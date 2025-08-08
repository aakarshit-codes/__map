# Interactive Map Project

A simple interactive map web application that displays location markers with popups, categories, and search functionality. Built using Leaflet.js and vanilla JavaScript.

## Features
- Interactive map display
- Location markers loaded from JSON
- Popups with name, description, and category
- Search functionality for locations
- Easy to add or edit locations

## Demo
<!-- Optionally add a screenshot or GIF here -->

## Installation
1. Clone or download this repository:
   ```sh
   git clone https://github.com/aakarshit-codes/__map.git
   ```
2. No build step required. All dependencies are loaded via CDN.

## Usage
- Open `index.html` in your web browser.
- The map will display all locations from `data/locations.json`.
- Click on markers to view details.
- Use the search bar (if available) to filter locations.

## Project Structure
- `index.html` – Main HTML file
- `script.js` – Entry point for JS
- `modules/` – Contains modular JS files:
  - `map.js` – Map initialization
  - `markers.js` – Marker loading and rendering
  - `search.js` – Search/filter logic
  - `utils.js` – Utility functions
- `data/locations.json` – Location data
- `assets/` – Images, icons, etc.

## Customization
- To add or edit locations, modify `data/locations.json`.
- You can change map settings in `modules/map.js`.

## Technologies Used
- [Leaflet.js](https://leafletjs.com/)
- JavaScript 
- HTML5 & CSS3


## Credits
- [Leaflet.js](https://leafletjs.com/)
