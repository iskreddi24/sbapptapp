import { createContext, useState, useContext } from 'react';

const MediaContext = createContext();

export const COMPANY_MEDIA_TYPES = {
  SBA: ["SBA-Hitech Traffic Umbrella", "SBA-Modern Umbrella", "SBA-Traffic Control Booth", "SBA-Traffic Umbrella", "SBA-Arch", "SBA-Bus Shelter", "SBA-Cantilever", "SBA-Lollipop-Boards", "SBA-Pole-Boards"],
  OUTSPACE: ["Hoarding", "Bus Shelter", "Arch", "Back Lit Board", "Uni-Pole", "Uni-Structure"],
  YUVA: ["Pole-Boards", "Lollipop-Boards"],
};

export const PROPOSAL_BRANDS = [...Object.keys(COMPANY_MEDIA_TYPES), "NO_LOGO"];

export const MediaProvider = ({ children }) => {
  const [filters, setFilters] = useState({ company: 'SBA', mediaType: 'All', searchQuery: '' });
  const [selectedIds, setSelectedIds] = useState(new Set());

  const toggleSelection = (id) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) { newSet.delete(id); } else { newSet.add(id); }
      return newSet;
    });
  };

  const clearSelection = () => setSelectedIds(new Set());

  const setCompany = (company) => { setFilters((prev) => ({ ...prev, company, mediaType: 'All' })); };
  const setMediaType = (mediaType) => { setFilters((prev) => ({ ...prev, mediaType })); };
  const setSearchQuery = (query) => { setFilters((prev) => ({ ...prev, searchQuery: query })); };

  return (
    <MediaContext.Provider value={{ filters, setCompany, setMediaType, setSearchQuery, selectedIds, toggleSelection, clearSelection }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => useContext(MediaContext);
