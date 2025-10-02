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
    // Return fallback data with the sub-industry name
    const subIndustryNames: Record<string, string> = {
      coal: "Coal & Consumable Fuels",
      ogx: "Oil & Gas Exploration",
      utilities: "Electric Utilities", 
      renewable: "Renewable Energy",
      cotton: "Cotton & Natural Fibers",
      synthetic: "Synthetic Materials",
      wool: "Wool & Animal Fibers",
      pharma: "Pharmaceuticals",
      "medical-devices": "Medical Devices",
      hospitals: "Hospital Systems",
      banking: "Banking & Credit",
      insurance: "Insurance Services",
      fintech: "Financial Technology", 
      software: "Software & Services",
      hardware: "Hardware & Electronics",
      ai: "Artificial Intelligence",
      crops: "Crop Production",
      livestock: "Livestock & Dairy",
      organic: "Organic & Sustainable"
    };
    
    return {
      sub_industry: subIndustryNames[id] || "Unknown Sub-Industry",
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
    // Return fallback data with the sub-industry name  
    const subIndustryNames: Record<string, string> = {
      coal: "Coal & Consumable Fuels",
      ogx: "Oil & Gas Exploration",
      utilities: "Electric Utilities",
      renewable: "Renewable Energy", 
      cotton: "Cotton & Natural Fibers",
      synthetic: "Synthetic Materials",
      wool: "Wool & Animal Fibers",
      pharma: "Pharmaceuticals",
      "medical-devices": "Medical Devices",
      hospitals: "Hospital Systems",
      banking: "Banking & Credit",
      insurance: "Insurance Services",
      fintech: "Financial Technology",
      software: "Software & Services",
      hardware: "Hardware & Electronics", 
      ai: "Artificial Intelligence",
      crops: "Crop Production",
      livestock: "Livestock & Dairy",
      organic: "Organic & Sustainable"
    };
    
    return {
      sub_industry: subIndustryNames[id] || "Unknown Sub-Industry",
      dimensions: [
        {
          name: "Infrastructure",
          score: 58,
          classification: "Medium",
          coverage: 80,
          confidence: 0.72,
          human_check: true,
          expert_check: true,
          rating: 4
        },
        {
          name: "Necessity", 
          score: 53,
          classification: "Medium",
          coverage: 75,
          confidence: 0.70,
          human_check: true,
          expert_check: false,
          rating: 3
        },
        {
          name: "Resource",
          score: 46,
          classification: "Medium/High",
          coverage: 68,
          confidence: 0.65,
          human_check: false,
          expert_check: false,
          rating: 2
        },
        {
          name: "Artificial Support",
          score: 64,
          classification: "Low Viability", 
          coverage: 82,
          confidence: 0.78,
          human_check: true,
          expert_check: true,
          rating: 4
        },
        {
          name: "Ecological",
          score: 79,
          classification: "Low Viability",
          coverage: 90,
          confidence: 0.85,
          human_check: true,
          expert_check: true,
          rating: 5
        },
        {
          name: "Economic",
          score: 55,
          classification: "Medium",
          coverage: 72,
          confidence: 0.66,
          human_check: true,
          expert_check: false,
          rating: 3
        },
        {
          name: "Emissions",
          score: 82,
          classification: "Low Viability",
          coverage: 95,
          confidence: 0.88,
          human_check: true,
          expert_check: true,
          rating: 4
        }
      ],
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
    // Return fallback data with the sub-industry name
    const subIndustryNames: Record<string, string> = {
      coal: "Coal & Consumable Fuels",
      ogx: "Oil & Gas Exploration", 
      utilities: "Electric Utilities",
      renewable: "Renewable Energy",
      cotton: "Cotton & Natural Fibers",
      synthetic: "Synthetic Materials",
      wool: "Wool & Animal Fibers",
      pharma: "Pharmaceuticals",
      "medical-devices": "Medical Devices",
      hospitals: "Hospital Systems",
      banking: "Banking & Credit",
      insurance: "Insurance Services",
      fintech: "Financial Technology",
      software: "Software & Services", 
      hardware: "Hardware & Electronics",
      ai: "Artificial Intelligence",
      crops: "Crop Production",
      livestock: "Livestock & Dairy",
      organic: "Organic & Sustainable"
    };
    
    return {
      sub_industry: subIndustryNames[id] || "Unknown Sub-Industry",
      time_series: [
        { year: 2010, score: 52 },
        { year: 2015, score: 58 },
        { year: 2020, score: 63 },
        { year: 2025, score: 68 },
      ],
    };
  }
}