"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Lightbulb, Thermometer, Lock, Smartphone, Zap, Shield, Eye } from "lucide-react";
import { useState, useEffect } from "react";

export default function DomotiquePage() {
  const [activeRoom, setActiveRoom] = useState(0);
  const [time, setTime] = useState("21:34");
  const [lights, setLights] = useState([true, false, true, true]);
  const [temp, setTemp] = useState(22);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(`${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const rooms = [
    {
      name: "Salon",
      image: "/sallon.jpg",
      devices: ["Éclairage ambiance", "Climatisation", "Volets roulants", "Système audio"],
      desc: "Contrôlez l'ambiance de votre salon en un tap — lumières, température, volets et musique depuis votre téléphone.",
    },
    {
      name: "Chambre",
      image: "/chambre.jpg",
      devices: ["Éclairage doux", "Climatisation programmée", "Alarme connectée", "Stores automatiques"],
      desc: "Programmez votre réveil, la température idéale et l'ouverture automatique des stores pour un réveil parfait.",
    },
    {
      name: "Entrée & Accès",
      image: "/entree.jpg",
      devices: ["Serrure connectée", "Interphone vidéo", "Détecteur de présence", "Portail automatique"],
      desc: "Sécurisez et contrôlez tous les accès de votre domicile à distance, avec alertes en temps réel.",
    },
    {
      name: "Extérieur",
      image: "/exterieur.jpg",
      devices: ["Éclairage extérieur", "Portail automatique", "Arrosage programmé", "Caméras extérieures"],
      desc: "Automatisez l'éclairage, le portail et l'arrosage de vos espaces extérieurs depuis n'importe où.",
    },
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO — FOND SOMBRE AVEC MAISON ILLUMINÉE */}
      <section className="relative w-full min-h-[650px] flex items-end overflow-hidden mt-24">
        <img
          src="/smart.jpg"
          alt="Maison intelligente"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/60 to-transparent" />

        {/* CONTENU BAS GAUCHE */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Votre maison vous <br />
              <span className="text-blue-400">obéit.</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
              STI transforme votre espace en un environnement connecté et automatisé.
              Contrôlez tout depuis votre smartphone — lumières, climatisation,
              accès, sécurité — où que vous soyez.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-[#0A0F1C] px-8 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition">
                <a href="https://wa.me/74459211">Demander une étude gratuite →</a>
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-xl text-sm hover:bg-white/10 transition">
                <a href="/realisations">Voir nos réalisations</a>
              </button>
            </div>
          </div>
        </div>

        {/* SMARTPHONE FLOTTANT DROITE */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="bg-gray-900 rounded-[40px] p-3 shadow-2xl w-[240px] border border-white/10">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-800 rounded-full" />
            <div className="bg-[#0F1F4B] rounded-[32px] overflow-hidden">
              {/* STATUS BAR */}
              <div className="flex justify-between items-center px-4 pt-8 pb-3">
                <span className="text-white text-xs font-bold">{time}</span>
                <span className="text-blue-300 text-xs">STI Home</span>
              </div>
              {/* TITRE */}
              <div className="px-4 pb-3">
                <p className="text-white text-sm font-bold">Bonsoir 👋</p>
                <p className="text-blue-300 text-xs">Votre maison est sécurisée</p>
              </div>
              {/* LUMIÈRES */}
              <div className="px-4 pb-3">
                <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-2">Lumières</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Salon", "Cuisine", "Chambre", "Entrée"].map((room, i) => (
                    <button
                      key={i}
                      onClick={() => setLights(prev => prev.map((v, j) => j === i ? !v : v))}
                      className={`rounded-xl p-2 text-center transition ${lights[i] ? "bg-blue-500/30 border border-blue-400/40" : "bg-white/5 border border-white/10"}`}
                    >
                      <Lightbulb size={14} className={`mx-auto mb-1 ${lights[i] ? "text-yellow-300" : "text-gray-500"}`} />
                      <p className={`text-[9px] ${lights[i] ? "text-white" : "text-gray-500"}`}>{room}</p>
                    </button>
                  ))}
                </div>
              </div>
              {/* TEMPÉRATURE */}
              <div className="px-4 pb-4">
                <div className="bg-white/5 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Thermometer size={16} className="text-orange-400" />
                    <span className="text-white text-xs">Climatisation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setTemp(t => Math.max(16, t - 1))} className="w-5 h-5 bg-white/10 rounded-full text-white text-xs flex items-center justify-center">−</button>
                    <span className="text-white text-xs font-bold">{temp}°</span>
                    <button onClick={() => setTemp(t => Math.min(30, t + 1))} className="w-5 h-5 bg-white/10 rounded-full text-white text-xs flex items-center justify-center">+</button>
                  </div>
                </div>
              </div>
              {/* NAV */}
              <div className="bg-black/30 px-4 py-2 flex justify-around">
                {[<Home size={14} />, <Lightbulb size={14} />, <Shield size={14} />, <Smartphone size={14} />].map((icon, i) => (
                  <span key={i} className={i === 0 ? "text-blue-400" : "text-gray-500"}>{icon}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 STATS */}
      <section className="bg-[#0A0F1C] px-6 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {[
            { value: "100%", label: "Contrôlable depuis smartphone" },
            { value: "< 1s", label: "Temps de réponse" },
            { value: "30%", label: "D'économie d'énergie" },
            { value: "24/7", label: "Surveillance automatique" },
          ].map((stat, i) => (
            <div key={i} className="border border-white/10 rounded-2xl py-6 px-4">
              <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PIÈCE PAR PIÈCE */}
      <section className="px-6 py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Chaque pièce, entièrement connectée
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            De l'entrée au jardin, STI automatise chaque espace de votre domicile
            ou de votre entreprise.
          </p>

          {/* ONGLETS PIÈCES */}
          <div className="flex gap-2 mb-10 flex-wrap justify-center">
            {rooms.map((room, i) => (
              <button
                key={i}
                onClick={() => setActiveRoom(i)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                  activeRoom === i
                    ? "bg-[#0A0F1C] text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-900"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* IMAGE */}
            <div className="flex-1 rounded-3xl overflow-hidden shadow-xl h-[420px]">
              <img
                key={activeRoom}
                src={rooms[activeRoom].image}
                alt={rooms[activeRoom].name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* CONTENU */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {rooms[activeRoom].name} connecté
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {rooms[activeRoom].desc}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {rooms[activeRoom].devices.map((device, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
                    <div className="w-2 h-2 bg-[#0A0F1C] rounded-full shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{device}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-[#0A0F1C] text-white px-7 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition">
                <a href="https://wa.me/74459211">En savoir plus →</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES CRÉATIFS */}
      <section className="px-6 py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
            Pourquoi passer à la domotique ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* GRANDE CARTE SOMBRE */}
            <div className="md:row-span-2 bg-[#0A0F1C] rounded-3xl p-10 text-white flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Smartphone size={28} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Tout depuis votre téléphone</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Allumez les lumières, réglez la température, ouvrez le portail
                  ou vérifiez vos caméras — depuis n'importe où dans le monde,
                  en temps réel, avec une seule application.
                </p>
              </div>
              <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-400">Appareils connectés</span>
                  <span className="text-xs text-green-400 font-semibold">● Tous actifs</span>
                </div>
                {["Lumières", "Climatisation", "Portail", "Alarme"].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                    <span className="text-xs text-gray-300">{item}</span>
                    <div className={`w-8 h-4 rounded-full ${i === 1 ? "bg-gray-600" : "bg-blue-500"} flex items-center px-0.5`}>
                      <div className={`w-3 h-3 bg-white rounded-full transition-all ${i === 1 ? "" : "translate-x-4"}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 PETITES CARTES */}
            {[
              { icon: <Zap size={22} className="text-[#0A0F1C]" />, title: "Économies d'énergie", desc: "Jusqu'à 30% de réduction sur votre facture grâce à l'automatisation intelligente." },
              { icon: <Shield size={22} className="text-[#0A0F1C]" />, title: "Sécurité renforcée", desc: "Alarmes, capteurs et caméras connectés pour une protection totale." },
              { icon: <Thermometer size={22} className="text-[#0A0F1C]" />, title: "Confort optimal", desc: "Température, lumière et ambiance ajustées automatiquement selon vos habitudes." },
              { icon: <Lock size={22} className="text-[#0A0F1C]" />, title: "Accès sécurisés", desc: "Serrures connectées, interphone vidéo et contrôle d'accès à distance." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-md transition">
                <div className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="px-6 py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Comment on procède ?
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">
            Une installation propre, rapide et sans perturbation de votre quotidien.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", icon: <Eye size={22} />, title: "Visite & Audit", desc: "Nos experts visitent votre espace pour concevoir la solution domotique idéale selon vos besoins." },
              { step: "02", icon: <Zap size={22} />, title: "Installation", desc: "Pose des équipements par nos techniciens certifiés, sans travaux lourds ni dégradation." },
              { step: "03", icon: <Smartphone size={22} />, title: "Configuration", desc: "Paramétrage de l'application, création des automatisations et des scènes personnalisées." },
              { step: "04", icon: <Shield size={22} />, title: "Formation & SAV", desc: "On vous forme à l'utilisation et restons disponibles pour toute assistance." },
            ].map((step, i) => (
              <div key={i} className="relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-md transition">
                <div className="absolute -top-4 left-8 bg-[#0A0F1C] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mb-5 mt-2 text-[#0A0F1C]">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative px-6 py-32 overflow-hidden">
        <img
          src="/backsmart.jpg"
          alt="Maison connectée"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0F1C]/88" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Votre maison intelligente commence ici.
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Contactez-nous pour une visite gratuite. Nos experts analysent votre
            espace et vous proposent une solution sur mesure.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-[#0A0F1C] px-10 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition">
              <a href="https://wa.me/74459211">Demander une visite gratuite →</a>
            </button>
            <button className="border border-white/40 text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-white/10 transition">
              <a href="https://wa.me/74459211">Nous appeler</a>
            </button>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}