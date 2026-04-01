"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  label: string;
}

export default function AnimatedStat({ value, label }: Props) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Extrait le nombre du string (ex: "10 000+" → 10000)
          const numeric = parseInt(value.replace(/\s|[^0-9]/g, ""));
          const suffix = value.replace(/[\d\s]/g, ""); // garde "+", "k", etc.
          const duration = 1500;
          const steps = 60;
          const increment = numeric / steps;
          let current = 0;
          let step = 0;

          const timer = setInterval(() => {
            step++;
            current += increment;
            const formatted = Math.floor(current).toLocaleString("fr-FR");
            setDisplay(formatted + suffix);

            if (step >= steps) {
              setDisplay(numeric.toLocaleString("fr-FR") + suffix);
              clearInterval(timer);
            }
          }, duration / steps);

          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="bg-gray-100 rounded-2xl p-6">
      <p className="text-2xl font-bold text-gray-900">{display}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </div>
  );
}