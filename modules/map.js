let mapInstance = null;

/**
 * Initialize the Leaflet map
 * @returns {object} map instance
*/

export function initMap() {
  mapInstance = L.map('map').setView([20.5937, 78.9629], 3);

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapInstance);

  return mapInstance;
}

/**
 * Get the current Leaflet map instance
*/
export function getMapInstance() {
  return mapInstance;
}