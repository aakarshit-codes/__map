let mapInstance = null;

export function initMap() {
  mapInstance = L.map('map').setView([20.5937, 78.9629], 3);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapInstance);

  return mapInstance;
}

export function getMapInstance() {
  return mapInstance;
}