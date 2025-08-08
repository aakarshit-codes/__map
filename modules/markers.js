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
      <div class="text-sm">
        <h2 class="text-base font-semibold">${location.name}</h2>
        <p class="text-gray-600">${location.description}</p>
        <p class="mt-1 text-xs italic text-blue-500">${location.category}</p>
      </div>
      `);

      activeMarkers.push(marker);
  });
}

export function getAllLocations() {
  return allLocations;
}