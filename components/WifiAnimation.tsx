"use client";

import { useEffect, useState } from "react";

const devices = [
  { label: "Smartphone", icon: "📱", angle: 0 },
  { label: "Laptop", icon: "💻", angle: 72 },
  { label: "Tablette", icon: "📟", angle: 144 },
  { label: "TV", icon: "📺", angle: 216 },
  { label: "Imprimante", icon: "🖨️", angle: 288 },
];

export default function WifiAnimation() {
  const [active, setActive] = useState<number[]>([]);
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    // Active les appareils un par un
    devices.forEach((_, i) => {
      setTimeout(() => {
        setActive((prev) => [...prev, i]);
      }, i * 400);
    });

    // Pulse des ondes
    const interval = setInterval(() => {
      setPulse((p) => (p + 1) % 3);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const cx = 200;
  const cy = 200;
  const radius = 130;

  return (
    <div className="relative w-[400px] h-[400px]">
      <svg viewBox="0 0 400 400" className="w-full h-full">

        {/* ONDES WIFI CONCENTRIQUES */}
        {[60, 95, 130].map((r, i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="#1E3A8A"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity={pulse === i ? 0.5 : 0.15}
            style={{ transition: "opacity 0.4s ease" }}
          />
        ))}

        {/* LIGNES DE CONNEXION vers chaque appareil */}
        {devices.map((device, i) => {
          const angleRad = (device.angle - 90) * (Math.PI / 180);
          const x = cx + radius * Math.cos(angleRad);
          const y = cy + radius * Math.sin(angleRad);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="#1E3A8A"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              opacity={active.includes(i) ? 0.4 : 0}
              style={{ transition: "opacity 0.6s ease" }}
            />
          );
        })}

        {/* POINTS DE CONNEXION */}
        {devices.map((device, i) => {
          const angleRad = (device.angle - 90) * (Math.PI / 180);
          const x = cx + radius * Math.cos(angleRad);
          const y = cy + radius * Math.sin(angleRad);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={4}
              fill="#1E3A8A"
              opacity={active.includes(i) ? 0.6 : 0}
              style={{ transition: "opacity 0.6s ease" }}
            />
          );
        })}

      </svg>

      {/* ROUTEUR CENTRAL */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#1E3A8A] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 z-10">
        <span className="text-2xl">📡</span>
      </div>

      {/* APPAREILS AUTOUR */}
      {devices.map((device, i) => {
        const angleRad = (device.angle - 90) * (Math.PI / 180);
        const x = cx + radius * Math.cos(angleRad);
        const y = cy + radius * Math.sin(angleRad);
        const left = (x / 400) * 100;
        const top = (y / 400) * 100;

        return (
          <div
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              opacity: active.includes(i) ? 1 : 0,
              transform: `translate(-50%, -50%) scale(${active.includes(i) ? 1 : 0.5})`,
              transition: "all 0.5s ease",
            }}
          >
            <div className="w-11 h-11 bg-white border-2 border-blue-100 rounded-xl flex items-center justify-center shadow-md text-lg">
              {device.icon}
            </div>
            <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">{device.label}</span>
          </div>
        );
      })}

      {/* BADGE SIGNAL */}
      <div className="absolute top-4 right-4 bg-green-50 border border-green-200 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
        ● Signal actif
      </div>
    </div>
  );
}