"use client";

import TestimonialCard from "@/components/TestimonialCard";
import UseCasesCarousel from "@/components/UseCasesCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedStat from "@/components/AnimatedStat";
import SmartHomeAnimation from "@/components/SmartHomeAnimation";
import dynamic from "next/dynamic";
import { Shield, MapPin, Bell, BarChart3, Clock, Truck } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const LiveMap = dynamic(() => import("@/components/LiveMap"), { ssr: false });

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play();
    }
  }, []);

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="pt-28 pb-10 px-2 bg-white">
        <div className="max-w-7xl mx-auto">

          <div className="bg-blue-50 rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[580px] w-full">

            {/* TEXTE */}
            <div className="flex-1 p-16 md:p-24 flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Géolocalisation, Sécurité & Réseaux
              </p>

              <h1 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                <span className="text-[#1E3A8A]">STI</span> — la technologie au service
                de votre sécurité et de votre connectivité
              </h1>

              <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-md">
                Siping Technology Innovation vous accompagne avec des solutions sur mesure :
                géolocalisation de flotte, vidéosurveillance, réseau WiFi professionnel
                et domotique intelligente — pour particuliers, entreprises et collectivités
                à Libreville et partout au Gabon.
              </p>

              <div className="mt-8">
                <button className="bg-[#1E3A8A] text-white px-7 py-3 rounded-xl text-base font-medium hover:bg-blue-900 transition">
                  <a href="https://wa.me/74459211">Démarrer →</a>
                </button>
              </div>
            </div>

            {/* VIDEO */}
            <div className="flex-1 min-h-[300px]">
              <video
                ref={videoRef}
                src="ma-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { value: "10000+", label: "Installations" },
              { value: "100+",   label: "Entreprises partenaires" },
              { value: "10",     label: "Ans d'expérience" },
              { value: "4100+",  label: "Missions terrain" },
            ].map((stat, i) => (
              <AnimatedStat key={i} value={stat.value} label={stat.label} />
            ))}
          </div>

        </div>
      </section>

      {/* CLIENTS */}
      <section className="bg-[#1E3A8A] py-12 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <p className="text-xs text-blue-200 uppercase tracking-[0.3em] font-light mb-10">
            Ils nous font confiance
          </p>
        </div>
        <div className="relative overflow-hidden">
          <div className="flex gap-16 animate-scroll w-max">
            {[...Array(2)].map((_, repeat) => (
              <div key={repeat} className="flex gap-16 items-center">
                <img src="/logos/client1.jpg" alt="Client 1" className="h-16 object-contain" />
                <img src="/logos/client2.jpg" alt="Client 2" className="h-16 object-contain" />
                <img src="/logos/client3.jpg" alt="Client 3" className="h-16 object-contain" />
                <img src="/logos/client4.jpg" alt="Client 4" className="h-16 object-contain" />
                <img src="/logos/client5.jpg" alt="Client 5" className="h-16 object-contain" />
                <img src="/logos/client6.jpg" alt="Client 6" className="h-16 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Un tableau de bord performant, conçu pour les opérateurs</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Surveillez tous vos véhicules en temps réel, depuis n'importe quel appareil, partout dans le monde.
            </p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Live Tracking Dashboard</h2>
              <span className="text-sm text-green-600 font-medium">● Active</span>
            </div>
            <div className="h-[320px] rounded-xl relative overflow-hidden">
              <LiveMap />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                <p className="text-sm text-gray-500">Active Vehicles</p>
                <h3 className="text-2xl font-bold mt-2 text-gray-800">128</h3>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                <p className="text-sm text-gray-500">Distance Today</p>
                <h3 className="text-2xl font-bold mt-2 text-gray-800">542 km</h3>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                <p className="text-sm text-gray-500">Idle Vehicles</p>
                <h3 className="text-2xl font-bold mt-2 text-yellow-500">14</h3>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl">
                <p className="text-sm text-gray-500">Alerts</p>
                <h3 className="text-2xl font-bold mt-2 text-red-600">3</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative px-6 py-24 bg-white border-t border-gray-200 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] pointer-events-none animate-lines">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute border border-blue-200 rounded-[60px]"
              style={{ top: `${i * 12}px`, left: `${i * 12}px`, width: `${100 - i * 1.8}%`, height: `${100 - i * 1.8}%`, opacity: Math.max(0.1, 0.4 - i * 0.02) }}
            />
          ))}
        </div>
        <div className="absolute -right-20 -bottom-20 w-[600px] h-[600px] pointer-events-none animate-lines" style={{ animationDelay: "4s" }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute border border-blue-200 rounded-[60px]"
              style={{ top: `${i * 12}px`, left: `${i * 12}px`, width: `${100 - i * 1.8}%`, height: `${100 - i * 1.8}%`, opacity: Math.max(0.1, 0.4 - i * 0.02) }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            Points forts et avantages de STI
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-3xl mx-auto text-center mb-14">
            STI combine un suivi de précision et des analyses intelligentes pour vous donner
            un contrôle total sur vos opérations, quel que soit la taille de votre flotte.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <MapPin size={28} className="text-[#1E3A8A]" />, title: "Suivi GPS en Temps Réel", desc: "Connaissez la position exacte de chaque véhicule à tout moment. Mises à jour toutes les 10 secondes, avec historique de trajets et replay." },
              { icon: <Bell size={28} className="text-[#1E3A8A]" />, title: "Alertes & Notifications Instantanées", desc: "Soyez notifié en cas d'excès de vitesse, d'utilisation non autorisée, de sortie de zone ou de besoin de maintenance — immédiatement." },
              { icon: <BarChart3 size={28} className="text-[#1E3A8A]" />, title: "Analytique & Rapports de Flotte", desc: "Générez des rapports détaillés sur le kilométrage, la consommation de carburant, le comportement des conducteurs et l'efficacité de la flotte." },
              { icon: <Shield size={28} className="text-[#1E3A8A]" />, title: "Sécurité des Véhicules", desc: "Protégez vos actifs avec l'immobilisation à distance, les alertes d'effraction et la surveillance antivol 24h/24." },
              { icon: <Clock size={28} className="text-[#1E3A8A]" />, title: "Historique & Replay de Trajets", desc: "Consultez les journaux de trajet complets et rejouez n'importe quel parcours sur la carte pour l'audit et la conformité." },
              { icon: <Truck size={28} className="text-[#1E3A8A]" />, title: "Gestion Multi-Véhicules", desc: "Gérez voitures, camions, motos et engins lourds depuis une seule et même plateforme unifiée." },
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-md transition flex flex-col gap-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-6 py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Une surveillance adaptée à chaque environnement
          </h2>
          <p className="mt-4 text-gray-500 max-w-4xl">
            STI installe et configure des systèmes de vidéosurveillance sur mesure pour tous types
            d'espaces — de la maison individuelle aux grandes entreprises — avec accès à distance
            via smartphone, détection de mouvement et enregistrement HD.
          </p>
          <div className="mt-12">
            <UseCasesCarousel />
          </div>
        </div>
      </section>

      {/* SECTION RÉSEAU & WIFI */}
      <section className="relative px-6 py-24 bg-white border-t border-gray-200 overflow-hidden">
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] pointer-events-none animate-lines">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute border border-blue-200 rounded-[60px]"
              style={{ top: `${i * 12}px`, left: `${i * 12}px`, width: `${100 - i * 1.8}%`, height: `${100 - i * 1.8}%`, opacity: Math.max(0.1, 0.4 - i * 0.02) }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1E3A8A] mb-4">Réseau & Connectivité</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-5">Une connectivité optimale pour chaque espace</h2>
          <p className="text-gray-500 leading-relaxed max-w-2xl mb-10">
            STI installe et optimise vos infrastructures réseau et WiFi professionnelles
            pour garantir une connexion stable, rapide et sécurisée — dans vos bureaux,
            hôtels, commerces ou résidences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&q=80", label: "Installation WiFi professionnel", desc: "Couverture totale sans zones mortes" },
              { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80", label: "Extension de couverture réseau", desc: "Amplification et maillage intelligent" },
              { image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80", label: "Optimisation du débit internet", desc: "Configuration avancée pour performances maximales" },
              { image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&q=80", label: "Maintenance & support réseau", desc: "Suivi et interventions réactives" },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition">
                <img src={item.image} alt={item.label} className="w-full h-[140px] object-cover" />
                <div className="p-5">
                  <p className="font-semibold text-gray-800 mb-1 text-sm">{item.label}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-10 bg-[#1E3A8A] text-white px-7 py-3 rounded-xl text-sm font-medium hover:bg-blue-900 transition">
            <a href="/solutions/network">En savoir plus →</a>
          </button>
        </div>
      </section>

      {/* SECTION DOMOTIQUE */}
      <section className="relative px-6 py-24 bg-[#0F1F4B] overflow-hidden">
        <div className="absolute -right-20 -top-20 w-[600px] h-[600px] pointer-events-none animate-lines" style={{ animationDelay: "2s" }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute border border-white/10 rounded-[60px]"
              style={{ top: `${i * 12}px`, left: `${i * 12}px`, width: `${100 - i * 1.8}%`, height: `${100 - i * 1.8}%`, opacity: Math.max(0.05, 0.2 - i * 0.01) }}
            />
          ))}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">Domotique & Maison Intelligente</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">Transformez votre espace en environnement connecté</h2>
            <p className="mt-5 text-gray-400 leading-relaxed">
              STI automatise et sécurise vos espaces de vie et de travail. Contrôlez
              l'éclairage, la climatisation, les accès et bien plus — depuis votre smartphone, où que vous soyez.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: "💡", label: "Contrôle de l'éclairage", desc: "Automatisation et ambiances personnalisées" },
                { icon: "❄️", label: "Climatisation intelligente", desc: "Programmation et contrôle à distance" },
                { icon: "🚪", label: "Portails & accès automatisés", desc: "Ouverture sécurisée depuis votre téléphone" },
                { icon: "🔔", label: "Alarmes & capteurs connectés", desc: "Détection intrusion, fumée et fuite d'eau" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-lg shrink-0">{item.icon}</div>
                  <div>
                    <p className="font-semibold text-white text-sm">{item.label}</p>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-10 bg-white text-[#0F1F4B] px-7 py-3 rounded-xl text-sm font-semibold hover:bg-blue-50 transition">
              <a href="/solutions/domotique">En savoir plus →</a>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <SmartHomeAnimation />
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="px-6 py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#3D4ECC] rounded-3xl p-10 flex flex-col justify-between text-white min-h-[400px]">
              <div>
                <h2 className="text-2xl font-bold mb-4">Ce que nos clients disent de STI</h2>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Découvrez les retours de nos clients, entreprises de logistique,
                  collectivités et opérateurs de flotte qui nous font confiance au quotidien.
                  Apprenez pourquoi ils ont choisi STI comme solution de géolocalisation fiable
                  et bénéficiez de l'expérience de notre communauté.
                </p>
              </div>
              <button className="mt-8 bg-white text-[#3D4ECC] px-7 py-3 rounded-2xl font-medium w-fit hover:bg-blue-50 transition">
                <a href="https://wa.me/74459211">Nous contacter →</a>
              </button>
            </div>
            <TestimonialCard />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#3D4ECC] rounded-[40px] px-16 py-24 text-white overflow-hidden min-h-[280px] flex flex-col items-center justify-center">
            <div className="absolute -left-20 -top-20 w-[600px] h-[600px] pointer-events-none" style={{ transform: 'rotate(-15deg)' }}>
              {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute border border-white/60 rounded-[60px]"
                  style={{ top: `${i * 12}px`, left: `${i * 12}px`, width: `${100 - i * 1.8}%`, height: `${100 - i * 1.8}%`, opacity: Math.max(0.3, 1 - i * 0.04) }}
                />
              ))}
            </div>
            <div className="relative z-10 text-center max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Sécurisez et contrôlez vos actifs avec STI dès aujourd'hui
              </h2>
              <div className="mt-10">
                <button className="bg-white text-[#3D4ECC] px-10 py-4 rounded-2xl font-medium text-base hover:bg-blue-50 transition shadow-lg">
                  <a href="https://wa.me/74459211">En savoir plus →</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}