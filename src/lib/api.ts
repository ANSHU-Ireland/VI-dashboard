// Mock API functions with fallback to local JSON data

export interface SystemProgress {
  sub_industries_completed: number;
  total_sub_industries: number;
  metrics_completed_pct: number;
  global_coverage_pct: number;
}

export interface Dimension {
  name: string;
  score: number;
  classification: string;
  coverage: number;
  confidence: number;
  human_check: boolean;
  expert_check: boolean;
  rating: number;
  assumptions?: string;
  known_bias?: string;
}

export interface SystemScores {
  dimensions: Dimension[];
  composite_global_score: number;
  composite_classification: string;
}

export interface Sector {
  id: string;
  name: string;
  score: number;
  classification: string;
}

export interface SubIndustryProgress {
  sub_industry: string;
  metrics_completed_pct: number;
  coverage_pct: number;
}

export interface SubIndustryScores {
  sub_industry: string;
  dimensions: Dimension[];
  composite_score: number;
  classification: string;
}

export interface TimeSeriesData {
  sub_industry: string;
  time_series: Array<{
    year: number;
    score: number;
  }>;
}

// Helper function to load local JSON
async function loadLocalJSON<T>(path: string): Promise<T> {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Failed to load ${path}`);
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${path}:`, error);
    throw error;
  }
}

export async function getSystemProgress(): Promise<SystemProgress> {
  try {
    // In production, this would hit /api/system/progress
    return await loadLocalJSON<SystemProgress>('/data/system-progress.json');
  } catch (error) {
    console.error('Error fetching system progress:', error);
    // Fallback data
    return {
      sub_industries_completed: 1,
      total_sub_industries: 163,
      metrics_completed_pct: 12,
      global_coverage_pct: 34,
    };
  }
}

export async function getSystemScores(): Promise<SystemScores> {
  try {
    return await loadLocalJSON<SystemScores>('/data/system-scores.json');
  } catch (error) {
    console.error('Error fetching system scores:', error);
    return {
      dimensions: [],
      composite_global_score: 63,
      composite_classification: "Low Viability",
    };
  }
}

export async function getSectors(): Promise<{ sectors: Sector[] }> {
  try {
    return await loadLocalJSON<{ sectors: Sector[] }>('/data/sectors.json');
  } catch (error) {
    console.error('Error fetching sectors:', error);
    return { sectors: [] };
  }
}

export async function getSubIndustryProgress(id: string): Promise<SubIndustryProgress> {
  try {
    return await loadLocalJSON<SubIndustryProgress>(`/data/${id}-progress.json`);
  } catch (error) {
    console.error(`Error fetching sub-industry progress for ${id}:`, error);
    return {
      sub_industry: "Coal & Consumable Fuels",
      metrics_completed_pct: 28,
      coverage_pct: 35,
    };
  }
}

export async function getSubIndustryScores(id: string): Promise<SubIndustryScores> {
  try {
    return await loadLocalJSON<SubIndustryScores>(`/data/${id}-scores.json`);
  } catch (error) {
    console.error(`Error fetching sub-industry scores for ${id}:`, error);
    return {
      sub_industry: "Coal & Consumable Fuels",
      dimensions: [],
      composite_score: 68,
      classification: "Low Viability",
    };
  }
}

export async function getSubIndustryTimeSeries(id: string): Promise<TimeSeriesData> {
  try {
    return await loadLocalJSON<TimeSeriesData>(`/data/${id}-timeseries.json`);
  } catch (error) {
    console.error(`Error fetching sub-industry time series for ${id}:`, error);
    return {
      sub_industry: "Coal & Consumable Fuels",
      time_series: [
        { year: 2010, score: 52 },
        { year: 2015, score: 58 },
        { year: 2020, score: 63 },
        { year: 2025, score: 68 },
      ],
    };
  }
}