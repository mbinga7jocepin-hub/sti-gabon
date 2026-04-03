"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wifi, Server, Zap, Wrench, Globe, Shield, Router, Signal } from "lucide-react";
import { useState } from "react";

export default function ReseauWifiPage() {
  const [activeTab, setActiveTab] = useState(0);

  const solutions = [
    {
      tab: "Entreprises",
      title: "WiFi professionnel haute performance",
      desc: "Une infrastructure réseau robuste et sécurisée pour vos bureaux, open spaces et salles de réunion. Couverture totale, sans zones mortes, avec gestion centralisée.",
      image: "/pme.jpg",
      points: ["Réseau segmenté invité / employés", "Gestion centralisée des accès", "QoS pour prioriser vos applications critiques"],
    },
    {
      tab: "Hôtels & Commerces",
      title: "Connectivité premium pour vos clients",
      desc: "Offrez à vos clients une expérience WiFi fluide et rapide. Portail captif personnalisé, gestion de bande passante et couverture multi-zones.",
      image: "/flyhotel.jpg",
      points: ["Portail captif personnalisé à votre marque", "Gestion de bande passante par zone", "Support technique réactif 7j/7"],
    },
    {
      tab: "Résidences",
      title: "WiFi intelligent pour votre domicile",
      desc: "Fini les zones sans signal. Nous installons un réseau maillé intelligent qui couvre chaque recoin de votre maison avec un signal fort et stable.",
      image: "/wifihome.jpg",
      points: ["Réseau maillé sans zones mortes", "Contrôle parental intégré", "Installation rapide en moins de 2h"],
    },
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO — SPLIT SCREEN */}
      <section className="mt-24 min-h-[600px] flex flex-col md:flex-row">

        {/* GAUCHE — TEXTE SUR FOND BLEU */}
        <div className="flex-1 bg-[#0F1F4B] flex items-center px-12 py-20">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Connectez tout. <br />
              <span className="text-blue-400">Partout.</span>
            </h1>
            <p className="text-gray-300 text-base leading-relaxed mb-10">
              STI conçoit et installe des infrastructures réseau et WiFi
              professionnelles pour garantir une connexion stable, rapide et
              sécurisée — bureaux, hôtels, commerces ou résidences.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Installation WiFi professionnel sans zones mortes",
                "Optimisation du débit et de la qualité réseau",
                "Maintenance et support technique réactif",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-5 h-5 bg-blue-500/20 border border-blue-400/40 rounded-full flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-10 flex gap-4 flex-wrap">
              <button className="bg-white text-[#0F1F4B] px-7 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition">
                <a href="https://wa.me/74459211">Demander un audit gratuit →</a>
              </button>
              <button className="border border-white/30 text-white px-7 py-3 rounded-xl text-sm hover:bg-white/10 transition">
                <a href="/realisations">Nos réalisations</a>
              </button>
            </div>
          </div>
        </div>

        {/* DROITE — IMAGE AVEC STATS */}
        <div className="flex-1 relative min-h-[400px]">
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
            alt="Infrastructure réseau"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1F4B]/60 to-transparent" />

          {/* STATS FLOTTANTES */}
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
            {[
              { value: "1 Gbps", label: "Débit max" },
              { value: "100%", label: "Couverture" },
              { value: "< 2h", label: "Installation" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 text-center">
                <p className="text-xl font-bold text-[#1E3A8A]">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* TABS — SOLUTIONS PAR TYPE */}
      <section className="px-6 py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Une solution pour chaque environnement
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Que vous soyez une entreprise, un hôtel ou un particulier, nous avons
            la solution réseau adaptée à vos besoins.
          </p>

          {/* ONGLETS */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {solutions.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition ${
                  activeTab === i
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-[#1E3A8A] hover:text-[#1E3A8A]"
                }`}
              >
                {s.tab}
              </button>
            ))}
          </div>

          {/* CONTENU ONGLET */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 rounded-3xl overflow-hidden shadow-xl">
              <img
                key={activeTab}
                src={solutions[activeTab].image}
                alt={solutions[activeTab].tab}
                className="w-full h-[380px] object-cover transition-all duration-500"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solutions[activeTab].title}
              </h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                {solutions[activeTab].desc}
              </p>
              <ul className="space-y-3">
                {solutions[activeTab].points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-[#1E3A8A] rounded-full" />
                    </div>
                    <span className="text-sm text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-[#1E3A8A] text-white px-7 py-3 rounded-xl text-sm font-semibold hover:bg-blue-900 transition">
                <a href="https://wa.me/74459211">En savoir plus →</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AVANTAGES — GRILLE CRÉATIVE */}
      <section className="relative px-6 py-24 bg-white border-t border-gray-200 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] pointer-events-none animate-lines">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute border border-blue-100 rounded-[60px]"
              style={{ top: `${i * 12}px`, left: `${i * 12}px`, width: `${100 - i * 1.8}%`, height: `${100 - i * 1.8}%`, opacity: Math.max(0.1, 0.3 - i * 0.015) }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Pourquoi choisir STI pour votre réseau ?
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-14">
            Une expertise locale, des équipements certifiés et un support
            réactif pour une connectivité sans compromis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* GRANDE CARTE BLEUE */}
            <div className="bg-[#1E3A8A] rounded-3xl p-10 text-white flex flex-col justify-between min-h-[280px]">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <Wifi size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Couverture totale garantie</h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Nous réalisons une étude préalable de votre espace pour concevoir
                  une architecture réseau qui élimine toutes les zones mortes.
                  Résultat garanti ou nous revenons gratuitement.
                </p>
              </div>
            </div>

            {/* GRILLE 2x2 */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Zap size={22} className="text-[#1E3A8A]" />, title: "Débit optimisé", desc: "Configuration avancée pour des performances maximales." },
                { icon: <Shield size={22} className="text-[#1E3A8A]" />, title: "Réseau sécurisé", desc: "Firewall, VPN et segmentation pour protéger vos données." },
                { icon: <Wrench size={22} className="text-[#1E3A8A]" />, title: "SAV réactif", desc: "Nos techniciens interviennent rapidement en cas de panne." },
                { icon: <Globe size={22} className="text-[#1E3A8A]" />, title: "Multi-sites", desc: "Gérez plusieurs sites depuis une seule interface centralisée." },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 hover:shadow-md transition">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                    {item.icon}
                  </div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{item.title}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* PROCESS — TIMELINE HORIZONTALE */}
      <section className="px-6 py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Notre processus d'installation
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-16">
            De l'audit à la mise en service, nous gérons tout pour vous.
          </p>

          <div className="relative">
            {/* LIGNE */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-blue-100 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", icon: <Globe size={20} />, title: "Audit & Analyse", desc: "Analyse de votre espace et de vos besoins pour concevoir la solution optimale." },
                { step: "02", icon: <Router size={20} />, title: "Installation", desc: "Déploiement des équipements par nos techniciens certifiés, rapidement et proprement." },
                { step: "03", icon: <Wifi size={20} />, title: "Configuration", desc: "Paramétrage du réseau, sécurisation et tests de couverture dans chaque zone." },
                { step: "04", icon: <Wrench size={20} />, title: "Suivi & SAV", desc: "Maintenance préventive et support technique disponible pour toute intervention." },
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#1E3A8A] text-white rounded-2xl flex items-center justify-center shadow-lg mb-5">
                    {step.icon}
                  </div>
                  <span className="text-xs text-blue-400 font-bold mb-2">{step.step}</span>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGE */}
      <section className="px-6 py-24 bg-[#0F1F4B]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="text-6xl mb-8 opacity-30 font-serif">"</div>
          <p className="text-2xl md:text-3xl font-semibold leading-relaxed mb-10">
            STI a transformé notre infrastructure réseau en moins d'une journée.
            Le WiFi couvre maintenant l'intégralité de nos 3 étages avec un débit
            constant et sans la moindre coupure.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
              PO
            </div>
            <div className="text-left">
              <p className="font-semibold">Patrick Ondo</p>
              <p className="text-blue-300 text-sm">Directeur Général, Hôtel Cristal — Libreville</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative px-6 py-32 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
          alt="CTA réseau"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F1F4B]/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à booster votre connectivité ?
          </h2>
          <p className="text-blue-200 text-lg mb-10">
            Demandez un audit réseau gratuit. Nos experts se déplacent à Libreville
            et dans tout le Gabon pour analyser vos besoins.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-[#1E3A8A] px-10 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition">
              <a href="https://wa.me/74459211">Demander un audit gratuit →</a>
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