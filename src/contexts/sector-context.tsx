"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SectorContextType {
  selectedSectorId: string | null;
  setSelectedSectorId: (sectorId: string) => void;
  selectedSubIndustryId: string;
  setSelectedSubIndustryId: (subIndustryId: string) => void;
}

const SectorContext = createContext<SectorContextType | undefined>(undefined);

export function SectorProvider({ children }: { children: ReactNode }) {
  const [selectedSectorId, setSelectedSectorId] = useState<string | null>(null);
  const [selectedSubIndustryId, setSelectedSubIndustryId] = useState("coal");

  return (
    <SectorContext.Provider 
      value={{
        selectedSectorId,
        setSelectedSectorId,
        selectedSubIndustryId,
        setSelectedSubIndustryId,
      }}
    >
      {children}
    </SectorContext.Provider>
  );
}

export function useSector() {
  const context = useContext(SectorContext);
  if (context === undefined) {
    throw new Error('useSector must be used within a SectorProvider');
  }
  return context;
}

// Mapping of sectors to their sub-industries
export const sectorToSubIndustryMap: Record<string, string[]> = {
  energy: ["coal", "ogx", "utilities", "renewable"],
  textiles: ["cotton", "synthetic", "wool"],  // Future expansion
  healthcare: ["pharma", "medical-devices", "hospitals"],  // Future expansion
  financials: ["banking", "insurance", "fintech"],  // Future expansion
  technology: ["software", "hardware", "ai"],  // Future expansion
  agriculture: ["crops", "livestock", "organic"],  // Future expansion
};

// Helper function to get the first sub-industry for a sector
export function getDefaultSubIndustryForSector(sectorId: string): string {
  const subIndustries = sectorToSubIndustryMap[sectorId];
  return subIndustries?.[0] || "coal"; // fallback to coal if sector not found
}

// Helper function to get all sub-industries for a sector
export function getSubIndustriesForSector(sectorId: string): string[] {
  return sectorToSubIndustryMap[sectorId] || ["coal"];
}