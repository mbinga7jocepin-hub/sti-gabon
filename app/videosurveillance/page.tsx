"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Eye, Bell, Wifi, Clock, Lock, Camera, Zap, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function VideoSurveillancePage() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { label: "Vision nocturne", active: true },
    { label: "Détection de mouvement", active: true },
    { label: "Accès smartphone", active: true },
    { label: "Enregistrement cloud", active: false },
    { label: "Alertes instantanées", active: true },
  ];

  const [toggles, setToggles] = useState(features.map(f => f.active));

  return (
    <main className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO — CENTRÉ, FOND SOMBRE AVEC CAMÉRA */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden mt-24">
        <img
          src="telesurveillance.jpg"
          alt="Vidéosurveillance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1F4B]/80" />
        <div className="relative z-10 text-center text-white max-w-3xl px-6 py-20">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Voyez tout. <br />
            <span className="text-blue-400">Protégez tout.</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
            STI installe des systèmes de vidéosurveillance HD intelligents pour
            sécuriser vos espaces — maisons, bureaux, commerces — avec accès
            en temps réel depuis votre smartphone.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-[#1E3A8A] text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-800 transition">
              <a href="https://wa.me/74459211">Demander une étude gratuite →</a>
            </button>
            <button className="border border-white/30 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
              <a href="/realisations">Voir nos installations</a>
            </button>
          </div>
        </div>
      </section>

      {/* 3 GRANDES CARTES HORIZONTALES */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Camera size={32} className="text-[#1E3A8A]" />,
              stat: "4K",
              label: "Résolution maximale",
              desc: "Nos caméras ultra HD capturent chaque détail avec une clarté irréprochable, de jour comme de nuit.",
              bg: "bg-white",
            },
            {
              icon: <Bell size={32} className="text-white" />,
              stat: "< 3s",
              label: "Délai d'alerte",
              desc: "En moins de 3 secondes après détection d'un mouvement, vous recevez une notification sur votre téléphone.",
              bg: "bg-[#1E3A8A]",
              dark: true,
            },
            {
              icon: <Clock size={32} className="text-[#1E3A8A]" />,
              stat: "24/7",
              label: "Surveillance continue",
              desc: "Votre système ne s'arrête jamais. Même en cas de coupure réseau, le stockage local prend le relai.",
              bg: "bg-white",
            },
          ].map((card, i) => (
            <div key={i} className={`${card.bg} rounded-3xl p-8 border ${card.dark ? "border-transparent" : "border-gray-200"} hover:shadow-lg transition`}>
              <div className={`w-14 h-14 ${card.dark ? "bg-white/10" : "bg-blue-50"} rounded-2xl flex items-center justify-center mb-6`}>
                {card.icon}
              </div>
              <p className={`text-5xl font-bold mb-2 ${card.dark ? "text-white" : "text-[#1E3A8A]"}`}>{card.stat}</p>
              <p className={`text-base font-semibold mb-3 ${card.dark ? "text-blue-200" : "text-gray-900"}`}>{card.label}</p>
              <p className={`text-sm leading-relaxed ${card.dark ? "text-blue-200" : "text-gray-500"}`}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION PRODUIT — IMAGE GAUCHE, INTERFACE DROITE */}
      <section className="px-6 py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">

          {/* IMAGE GAUCHE */}
          <div className="flex-1 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="installation.jpg"
                alt="Caméra de surveillance"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* BADGE */}
            <div className="absolute -bottom-6 -right-6 bg-[#1E3A8A] text-white rounded-2xl p-6 shadow-xl text-center w-40">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-xs text-blue-200 mt-1">Installations réalisées</p>
            </div>
          </div>

          {/* INTERFACE DROITE */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#1E3A8A] mb-4">
              Configurez votre système
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">
              Un système intelligent, entièrement personnalisable
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Activez ou désactivez chaque fonctionnalité selon vos besoins.
              Notre interface vous donne un contrôle total sur votre système
              de surveillance.
            </p>

            {/* TOGGLES INTERACTIFS */}
            <div className="space-y-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  onClick={() => setToggles(prev => prev.map((v, j) => j === i ? !v : v))}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 cursor-pointer hover:border-[#1E3A8A] transition group"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      className={toggles[i] ? "text-[#1E3A8A]" : "text-gray-300"}
                    />
                    <span className={`text-sm font-medium ${toggles[i] ? "text-gray-900" : "text-gray-400"}`}>
                      {feature.label}
                    </span>
                  </div>
                  <div className={`w-12 h-6 rounded-full transition-all duration-300 flex items-center px-1 ${toggles[i] ? "bg-[#1E3A8A]" : "bg-gray-300"}`}>
                    <div className={`w-4 h-4 bg-white rounded-full shadow transition-all duration-300 ${toggles[i] ? "translate-x-6" : "translate-x-0"}`} />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-[#1E3A8A] text-white px-7 py-3 rounded-xl text-sm font-semibold hover:bg-blue-900 transition">
              <a href="https://wa.me/74459211">Configurer mon système →</a>
            </button>
          </div>

        </div>
      </section>

      {/* GALERIE D'INSTALLATIONS */}
      <section className="px-6 py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Nos installations
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-14">
            De la maison individuelle aux grandes entreprises, nous sécurisons
            tous types d'espaces à Libreville et dans tout le Gabon.
          </p>

          {/* GRILLE ASYMÉTRIQUE */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 md:col-span-1 row-span-2 rounded-3xl overflow-hidden h-[420px]">
              <img src="/residence2.jpg" alt="Bureau" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-3xl overflow-hidden h-[200px]">
              <img src="/usine2.jpg" alt="Résidence" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-3xl overflow-hidden h-[200px]">
              <img src="/entreprise2.jpg" alt="Commerce" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-3xl overflow-hidden h-[200px]">
              <img src="/ville2.jpg" alt="Entrepôt" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="rounded-3xl overflow-hidden h-[200px]">
              <img src="/ecole2.jpg" alt="École" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA — FOND IMAGE AVEC OVERLAY */}
      <section className="relative px-6 py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&q=80"
          alt="CTA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1F4B]/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à sécuriser vos espaces ?
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Contactez-nous pour une étude gratuite et sans engagement.
            Nos techniciens se déplacent à Libreville et dans tout le Gabon.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-[#1E3A8A] px-10 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition">
              <a href="https://wa.me/74459211">Demander une étude gratuite →</a>
            </button>
            <button className="border border-white/40 text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition">
              <a href="https://wa.me/74459211">Nous appeler</a>
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}