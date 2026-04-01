"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const features = [
  {
    title: "Suivi GPS en temps réel",
    desc: "Visualisez la position exacte de chaque véhicule sur une carte interactive, mise à jour toutes les 10 secondes. Accédez à l'historique complet des trajets à tout moment.",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=800&q=80",
  },
  {
    title: "Alertes & Notifications instantanées",
    desc: "Recevez des alertes immédiates en cas d'excès de vitesse, de sortie de zone géographique, d'utilisation non autorisée ou de déclenchement du moteur en dehors des heures de travail.",
    image: "/alertenotifs.jpg",
  },
  {
    title: "Coupure moteur à distance",
    desc: "Immobilisez votre véhicule à distance depuis votre smartphone en cas de vol ou d'utilisation non autorisée. Une sécurité totale pour vos actifs.",
    image: "/couper.jpg",
  },
  {
    title: "Rapports & Analytique avancée",
    desc: "Générez des rapports détaillés sur le kilométrage, la consommation de carburant, le comportement des conducteurs et l'efficacité globale de votre flotte.",
    image: "/rapport.png",
  },
  {
    title: "Gestion multi-véhicules",
    desc: "Gérez voitures, camions, motos et engins lourds depuis une interface unifiée. Organisez votre flotte par groupes, zones ou conducteurs selon vos besoins.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
  },
];

export default function AccordionFeatures() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col md:flex-row gap-12 items-start">

      {/* ACCORDION */}
      <div className="flex-1 divide-y divide-gray-200">
        {features.map((feature, i) => (
          <div key={i} className="py-5">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex justify-between items-center text-left gap-4"
            >
              <span className={`text-base font-semibold transition ${open === i ? "text-[#1E3A8A]" : "text-gray-700"}`}>
                {feature.title}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 shrink-0 transition-all ${
                open === i
                  ? "border-[#1E3A8A] bg-[#1E3A8A] text-white"
                  : "border-gray-300 text-gray-400"
              }`}>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </div>
            </button>

            {open === i && (
              <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                {feature.desc}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* IMAGE QUI CHANGE */}
<div className="flex-1 relative sticky top-28">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">

    {/* CARTES FLOTTANTES DERRIÈRE */}
    <div className="absolute -bottom-8 -left-8 bg-blue-100 rounded-2xl w-64 h-24 z-0" />
    <div className="absolute -top-8 -right-8 bg-blue-200 rounded-2xl w-56 h-20 z-0" />

    {/* IMAGE AU DESSUS */}
    <div className="relative z-10">
      <img
        key={open}
        src={features[open >= 0 ? open : 0].image}
        alt={features[open >= 0 ? open : 0].title}
        className="w-full h-[420px] object-cover transition-all duration-500"
      />
    </div>

    {/* BADGE BAS GAUCHE */}
    <div className="absolute bottom-6 left-6 z-20 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 w-56">
      <p className="text-xs text-gray-400 mb-1">Véhicules actifs</p>
      <p className="text-2xl font-bold text-[#1E3A8A]">128</p>
      <div className="mt-2 flex items-center gap-1">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-xs text-green-500">Tous connectés</span>
      </div>
    </div>

    {/* BADGE HAUT DROITE */}
    <div className="absolute top-6 right-6 z-20 bg-[#1E3A8A] text-white rounded-2xl shadow-xl p-5 w-48 text-center">
      <p className="text-2xl font-bold">99%</p>
      <p className="text-xs text-blue-200 mt-1">Disponibilité plateforme</p>
    </div>

  </div>
</div>

    </div>
  );
}