"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Marc Guéhi",
    role: "Directeur Logistique",
    text: "STI nous a permis de réduire nos coûts de carburant de 18% en seulement 3 mois. Le suivi en temps réel est d'une précision remarquable, même dans les zones reculées.",
  },
  {
    name: "Aminata Koné",
    role: "CEO, FastDeliver",
    text: "Grâce à STI, nous avons une visibilité totale sur notre flotte de 80 véhicules. Les alertes instantanées nous ont évité plusieurs incidents majeurs.",
  },
  {
    name: "Carl Mbinga",
    role: "Responsable Flotte",
    text: "La plateforme est intuitive et le support client est excellent. Nous recommandons STI à toutes les entreprises qui veulent optimiser leur gestion de flotte.",
  },
];

export default function TestimonialCard() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[current];

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 flex flex-col justify-between min-h-[400px]">

      {/* HAUT : NOM + TEXTE */}
      <div>
        <div className="mb-6">
          <p className="font-semibold text-gray-900">{t.name}</p>
          <p className="text-sm text-gray-400">{t.role}</p>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
      </div>

      {/* BAS : DOTS + FLÈCHES */}
      <div className="flex justify-between items-center mt-8">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition ${
                i === current ? "bg-[#3D4ECC] w-4" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition text-gray-600"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition text-gray-600"
          >
            ›
          </button>
        </div>
      </div>

    </div>
  );
}