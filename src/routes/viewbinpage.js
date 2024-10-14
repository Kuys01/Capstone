import React from 'react';
import { MapContainer, ImageOverlay, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet CSS
import L from 'leaflet'; // Leaflet library
import 'flowbite'; // Flowbite JS components
import 'flowbite/dist/flowbite.min.css'; // Flowbite CSS
import mapImage from '../assets/Map.png'; // Import the uploaded map image

// Set up default Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl; // Delete default icons
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default function ViewBinPage() {
    // Sample bin data with coordinates (latitude, longitude)
    const bins = [
        { id: 1, name: 'Cafeteria', position: [8.5835, 125.6225], status: 'Full' },
        { id: 2, name: 'Library', position: [8.5840, 125.6210], status: 'Empty' },
        { id: 3, name: 'Gym', position: [8.5825, 125.6230], status: 'Halfway' },
    ];

    // Image overlay bounds (adjust as necessary for your image's coverage)
    const imageBounds = [
        [8.5810, 125.6200], // Southwest corner
        [8.5860, 125.6250], // Northeast corner
    ];

    return (
        <div className="max-h-11 bg-cover bg-no-repeat bg-center">
            Bin Management Section
            <div className="container max-h-11 p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">View Bins</h1>

                {/* Map with zoom and markers */}
                <div className="relative mb-4">
                    <MapContainer
                        center={[8.5835, 125.6225]} // Adjust center as necessary
                        zoom={17}
                        scrollWheelZoom={true}
                        className="h-96 w-2/4"
                    >
                        <ImageOverlay url={mapImage} bounds={imageBounds} />
                        
                        {/* Add markers for each bin */}
                        {bins.map((bin) => (
                            <Marker key={bin.id} position={bin.position}>
                                <Popup>
                                    <div>
                                        <h3>{bin.name}</h3>
                                        <p>Status: {bin.status}</p>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}
