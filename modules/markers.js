import { getMapInstance } from "./map.js";

let allLocations = [];
let activeMarkers = [];

/**
 * Load location data from JSON and display markers
*/
export async function loadMarkers()  {
  try {
    const response = await fetch('./data/locations.json');
    allLocations = await response.json();
    renderMarkers(allLocations);
  } catch (error) {
    console.error("Error loading markers:", error);
  }
}

/**
 * Render markers on the map from a location list
 * @param {Array} locations 
*/
export function renderMarkers(locations) {
  const map = getMapInstance();

  activeMarkers.forEach(marker => marker.remove());
  activeMarkers = [];

  locations.forEach(location => {
    const marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindPopup(`
    <div class="p-2 fade-in">
      <h2 class="text-lg font-semibold text-gray-800">${location.name}</h2>
      <p class="text-gray-600 mt-1">${location.description}</p>
      <span class="inline-block mt-2 px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded">
        ${location.category}
      </span>
    </div>
    `);

      activeMarkers.push(marker);
  });
}

/**
 * Get all loaded location data
*/
export function getAllLocations() {
  return allLocations;
}