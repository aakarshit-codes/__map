import { getMapInstance } from "./map.js";

export async function loadMarkers()  {
  try {
    const response = await fetch('./data/locations.json');
    const locations = await response.json();
    
    const mapInstance = getMapInstance();
    locations.forEach(location => {
      const marker = L.marker([location.lat, location.lng]).addTo(mapInstance);
      marker.bindPopup(`
        <div class="text-sm">
          <h2 class="text-base font-semibold">${location.name}</h2
          <p class="text-gray-600">${location.description}</p>
          <p class="mt-1 text-xs italic text-blue-500">${location.category}</p>
        </div>

      `);
    });

  } catch (error) {
    console.error("Error loading markers:", error);
  }
}