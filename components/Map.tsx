'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Correção para o ícone do marcador aparecer
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export default function Mapa() {
  // Coordenadas: [Latitude, Longitude]
  const position: [number, number] = [41.767, -8.575]

  return (
    <MapContainer center={position} zoom={15} style={{ height: '100%', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={customIcon}>
        <Popup>Casa Quintela</Popup>
      </Marker>
    </MapContainer>
  )
}