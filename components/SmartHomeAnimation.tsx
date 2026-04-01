"use client";

import { useEffect, useState } from "react";

const rooms = [
  { id: 0, label: "Salon", x: 80, y: 180, w: 160, h: 120 },
  { id: 1, label: "Cuisine", x: 240, y: 180, w: 120, h: 120 },
  { id: 2, label: "Chambre", x: 80, y: 80, w: 120, h: 100 },
  { id: 3, label: "Bureau", x: 200, y: 80, w: 160, h: 100 },
  { id: 4, label: "Salle de bain", x: 80, y: 300, w: 100, h: 80 },
  { id: 5, label: "Garage", x: 240, y: 300, w: 120, h: 80 },
];

const devices = [
  { roomId: 0, icon: "💡", x: 140, y: 230, label: "Éclairage" },
  { roomId: 0, icon: "📺", x: 190, y: 260, label: "TV" },
  { roomId: 1, icon: "❄️", x: 285, y: 220, label: "Clim" },
  { roomId: 2, icon: "💡", x: 130, y: 120, label: "Lumière" },
  { roomId: 3, icon: "🖥️", x: 270, y: 120, label: "Bureau" },
  { roomId: 4, icon: "🚿", x: 120, y: 335, label: "Eau" },
  { roomId: 5, icon: "🚗", x: 295, y: 335, label: "Garage" },
];

export default function SmartHomeAnimation() {
  const [activeRooms, setActiveRooms] = useState<number[]>([]);
  const [activeDevices, setActiveDevices] = useState<number[]>([]);

  useEffect(() => {
    // Allume les pièces une par une
    rooms.forEach((r, i) => {
      setTimeout(() => setActiveRooms((prev) => [...prev, r.id]), i * 300);
    });
    // Allume les appareils après
    devices.forEach((d, i) => {
      setTimeout(() => setActiveDevices((prev) => [...prev, i]), 800 + i * 250);
    });

    // Cycle : éteint et rallume certains appareils
    const interval = setInterval(() => {
      const randomDevice = Math.floor(Math.random() * devices.length);
      setActiveDevices((prev) =>
        prev.includes(randomDevice)
          ? prev.filter((d) => d !== randomDevice)
          : [...prev, randomDevice]
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[420px] h-[430px]">
      <svg viewBox="0 0 420 430" className="w-full h-full">

        {/* FOND */}
        <rect x="60" y="60" width="300" height="340" rx="12" fill="#1a2e5a" stroke="#2a4a8a" strokeWidth="1.5" />

        {/* TOIT */}
        <polygon points="60,80 210,20 360,80" fill="#1E3A8A" stroke="#2a4a8a" strokeWidth="1.5" />
        <polygon points="60,80 210,20 360,80 360,80 60,80" fill="none" stroke="#3D5FCC" strokeWidth="1" />

        {/* PIÈCES */}
        {rooms.map((room) => (
          <rect
            key={room.id}
            x={room.x}
            y={room.y}
            width={room.w}
            height={room.h}
            rx="4"
            fill={activeRooms.includes(room.id) ? "#1E3A8A" : "#152545"}
            stroke="#2a4a8a"
            strokeWidth="1"
            style={{ transition: "fill 0.5s ease" }}
          />
        ))}

        {/* LABELS PIÈCES */}
        {rooms.map((room) => (
          <text
            key={room.id}
            x={room.x + room.w / 2}
            y={room.y + room.h - 10}
            textAnchor="middle"
            fontSize="8"
            fill={activeRooms.includes(room.id) ? "#93B4FF" : "#4a6a9a"}
            style={{ transition: "fill 0.5s ease" }}
          >
            {room.label}
          </text>
        ))}

        {/* APPAREILS */}
        {devices.map((device, i) => (
          <g key={i}>
            <circle
              cx={device.x}
              cy={device.y}
              r="14"
              fill={activeDevices.includes(i) ? "#3D5FCC" : "#1a2e5a"}
              stroke={activeDevices.includes(i) ? "#6B8FFF" : "#2a4a8a"}
              strokeWidth="1.5"
              style={{ transition: "all 0.4s ease" }}
            />
            {activeDevices.includes(i) && (
              <circle
                cx={device.x}
                cy={device.y}
                r="18"
                fill="none"
                stroke="#6B8FFF"
                strokeWidth="1"
                opacity="0.4"
              />
            )}
          </g>
        ))}

      </svg>

      {/* EMOJIS APPAREILS par dessus le SVG */}
      {devices.map((device, i) => {
        const left = (device.x / 420) * 100;
        const top = (device.y / 430) * 100;
        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-sm"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              filter: activeDevices.includes(i) ? "brightness(1.5)" : "brightness(0.5)",
              transition: "filter 0.4s ease",
            }}
          >
            {device.icon}
          </div>
        );
      })}

      {/* BADGE */}
      <div className="absolute top-3 right-3 bg-blue-900/80 border border-blue-700 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">
        ● Maison connectée
      </div>

      {/* STATUS BAR */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#0F1F4B]/90 rounded-b-2xl px-4 py-2 flex justify-between items-center">
        {["💡", "❄️", "🚪", "🔔"].map((icon, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-base">{icon}</span>
            <div className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? "bg-green-400" : "bg-gray-600"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}