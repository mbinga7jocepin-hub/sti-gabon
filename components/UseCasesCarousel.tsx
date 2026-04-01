"use client";

import { useState } from "react";

const useCases = [
  {
    title: "Maisons & Résidences",
    desc: "Sécurisez votre domicile avec des caméras HD accessibles depuis votre smartphone, avec détection de mouvement et enregistrement continu.",
    image: "homecamera.jpg",
  },
  {
    title: "Bureaux & Entreprises",
    desc: "Surveillez vos locaux professionnels 24h/24, contrôlez les accès et protégez vos équipements contre le vol et les intrusions.",
    image: "camerabureau.webp",
  },
  {
    title: "Commerces & Boutiques",
    desc: "Dissuadez les actes malveillants et gardez un œil sur votre point de vente en temps réel, même à distance.",
    image: "cameracommerce.jpg",
  },
  {
    title: "Entrepôts & Chantiers",
    desc: "Protégez vos stocks, vos équipements et vos chantiers contre le vol et le vandalisme grâce à une surveillance permanente.",
    image: "entrepot.jpg",
  },
  {
    title: "Hôtels & Résidences haut de gamme",
    desc: "Offrez à vos clients et résidents un environnement sécurisé avec un système de surveillance discret et performant.",
    image: "camerahotel.jpg",
  },
  {
    title: "Établissements scolaires",
    desc: "Assurez la sécurité des élèves et du personnel avec une couverture vidéo complète des accès, couloirs et espaces communs.",
    image: "cameraecole.jpg",
  },
];

const ITEMS_PER_PAGE = 3;

export default function UseCasesCarousel() {
  const [current, setCurrent] = useState(0);
  const total = Math.ceil(useCases.length / ITEMS_PER_PAGE);
  const visible = useCases.slice(current * ITEMS_PER_PAGE, current * ITEMS_PER_PAGE + ITEMS_PER_PAGE);

  return (
    <div>
      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visible.map((uc, i) => (
          <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition">
            <img
              src={uc.image}
              alt={uc.title}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-[#1E3A8A]">{uc.title}</h3>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">{uc.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-8">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "bg-[#1E3A8A] w-6" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}