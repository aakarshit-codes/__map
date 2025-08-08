import { getMapInstance } from "./map.js";

let allLocations = [];
let activeMarkers = [];

export async function loadMarkers()  {
  try {
    const response = await fetch('./data/locations.json');
    allLocations = await response.json();
    renderMarkers(allLocations);
  } catch (error) {
    console.error("Error loading markers:", error);
  }
}

export function renderMarkers(locations) {
  const map = getMapInstance();

  activeMarkers.forEach(marker => marker.remove());
  activeMarkers = [];

  locations.forEach(location => {
    const marker = L.marker([location.lat, location.lng]).addTo(map);
    marker.bindPopup(`
    <div class="p-2">
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

export function getAllLocations() {
  return allLocations;
}