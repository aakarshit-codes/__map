import { getAllLocations, renderMarkers } from './markers.js';
import { debounce } from './utils.js';

export function initSearch() {
  const input = document.getElementById('searchInput');
  const select = document.getElementById('categorySelect');

  const updateResults = () => {
    const nameQuery = input.value.trim().toLowerCase();
    const category = select.value;

    const filtered = getAllLocations().filter(loc => {
      const matchesName = loc.name.toLowerCase().includes(nameQuery);
      const matchesCategory = category ? loc.category.toLowerCase() === category.toLowerCase() : true;
      return matchesName && matchesCategory;
    });

    renderMarkers(filtered);
  };

  input.addEventListener('input', debounce(updateResults, 300));
  select.addEventListener('change', updateResults);
}