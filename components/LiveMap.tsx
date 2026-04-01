"use client";

import { useEffect, useRef } from "react";

const vehicles = [
  { id: 1, name: "Véhicule #001", position: [0.4162, 9.4673] as [number, number], status: "En mouvement" },
  { id: 2, name: "Véhicule #002", position: [0.4280, 9.4550] as [number, number], status: "À l'arrêt" },
  { id: 3, name: "Véhicule #003", position: [0.4050, 9.4800] as [number, number], status: "En mouvement" },
  { id: 4, name: "Véhicule #004", position: [0.3900, 9.4620] as [number, number], status: "Alerte" },
  { id: 5, name: "Véhicule #005", position: [0.4350, 9.4400] as [number, number], status: "En mouvement" },
];

export default function LiveMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mapInstanceRef.current) return;
    if (!mapRef.current) return;

    import("leaflet").then((L) => {
      // Fix icônes
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      // Import CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);

      // Crée la carte
      const map = L.map(mapRef.current!).setView([0.4162, 9.4673], 13);
      mapInstanceRef.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      vehicles.forEach((v) => {
        L.marker(v.position)
          .addTo(map)
          .bindPopup(`<strong>${v.name}</strong><br/>Statut : ${v.status}`);
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return <div ref={mapRef} style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }} />;
}