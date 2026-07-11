const PREFIX = 'mp_';
function getKey(key) { return `${PREFIX}${key}`; }

export function getStorageItem(key, defaultValue = null) {
  try { const item = localStorage.getItem(getKey(key)); return item === null ? defaultValue : JSON.parse(item); }
  catch { return defaultValue; }
}

export function setStorageItem(key, value) {
  try { localStorage.setItem(getKey(key), JSON.stringify(value)); } catch (error) { console.warn('localStorage write failed:', error); }
}

export function removeStorageItem(key) {
  try { localStorage.removeItem(getKey(key)); } catch { /* ignore */ }
}

export const UIState = {
  getFilters: () => getStorageItem('filters', { company: 'SBA', mediaType: 'All' }),
  setFilters: (filters) => setStorageItem('filters', filters),
  getSearchQuery: () => getStorageItem('searchQuery', ''),
  setSearchQuery: (q) => setStorageItem('searchQuery', q),
  getScrollPosition: (page = 'dashboard') => getStorageItem(`scroll_${page}`, 0),
  setScrollPosition: (page = 'dashboard', pos = 0) => setStorageItem(`scroll_${page}`, pos),
  getLastRoute: () => getStorageItem('lastRoute', '/welcome'),
  setLastRoute: (route) => setStorageItem('lastRoute', route),
  getRecentSearches: () => getStorageItem('recentSearches', []),
  addRecentSearch: (query) => {
    if (!query.trim()) return;
    const searches = getStorageItem('recentSearches', []);
    const filtered = searches.filter((s) => s !== query);
    filtered.unshift(query);
    setStorageItem('recentSearches', filtered.slice(0, 10));
  },
  getSelectedCards: () => getStorageItem('selectedCards', []),
  setSelectedCards: (ids) => setStorageItem('selectedCards', ids),
  getDarkMode: () => getStorageItem('darkMode', false),
  setDarkMode: (val) => setStorageItem('darkMode', val),
  getLanguage: () => getStorageItem('language', 'en'),
  setLanguage: (lang) => setStorageItem('language', lang),
};
