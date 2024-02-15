// Importing necessary components from the react-leaflet library and other dependencies
import { Marker, MapContainer, Popup, TileLayer } from "react-leaflet";
import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Function component for rendering a Leaflet map
function MapLeaflet() {
  // Creating a custom icon for the marker

  const myIcon = L.icon({
    iconUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Media_Viewer_Icon_-_Location.svg/1024px-Media_Viewer_Icon_-_Location.svg.png",
    iconSize: [30, 30],
    iconAnchor: [13, 25],
  });
  // Defining the initial position on the map
  const position = {
    Latitude: 36.806389,
    Longitude: 10.181667,
  };
  // Rendering the Leaflet map with a marker at the specified position
  return (
    <div>
      {/* LEAFLET MAP CONTAINER */}
      <MapContainer
        center={[position.Latitude, position.Longitude]}
        zoom={12}
        style={{ height: "450px", width: "90%", margin: "auto" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={[position.Latitude, position.Longitude]}
          icon={myIcon}
        >
          <Popup>your location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
// Exporting the MapLeaflet component as the default export
export default MapLeaflet;