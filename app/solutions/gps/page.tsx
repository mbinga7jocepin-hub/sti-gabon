"use client";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedStat from "@/components/AnimatedStat";
import AccordionFeatures from "@/components/AccordionFeatures";
import dynamic from "next/dynamic";
import { Shield, MapPin, Bell, BarChart3, Clock, Truck, Zap, Lock } from "lucide-react";

const LiveMap = dynamic(() => import("@/components/LiveMap"), { ssr: false });

export default function GPSPage() {
  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full min-h-[580px] flex items-center overflow-hidden mt-24">

        {/* IMAGE DE FOND */}
        <img
          src="/image-back.jpg"
          alt="Flotte de véhicules"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DÉGRADÉ : transparent à gauche → bleu marine à droite */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0F1F4B]/60 to-[#0F1F4B]" />

        {/* CONTENU À DROITE */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-end">
          <div className="max-w-xl text-white py-20">
            <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
              Suivez chaque véhicule. Maîtrisez chaque trajet.
            </h1>

            <ul className="space-y-4 mb-8">
              {[
                "Suivi GPS en temps réel avec mise à jour toutes les 10 secondes pour une visibilité totale de votre flotte.",
                "Coupure moteur à distance, alertes anti-vol et notifications instantanées pour sécuriser vos véhicules.",
                "Rapports détaillés sur la consommation, les trajets et le comportement conducteur pour optimiser vos coûts.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-200 leading-relaxed">
                  <span className="mt-1.5 w-2 h-2 bg-blue-400 rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button className="bg-white text-[#0F1F4B] px-8 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition">
              <a href="https://wa.me/74459211">En savoir plus →</a>
            </button>
          </div>
        </div>

      </section>

      {/* ATOUTS PLATEFORME */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-14">
            Fonctionnalités clés de notre plateforme GPS
          </h2>
          <AccordionFeatures />
        </div>
      </section>

      {/* SECTION MOBILE */}
      <section className="relative px-6 py-24 bg-white border-t border-gray-200 overflow-hidden">

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Gérez votre flotte depuis votre téléphone
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-20">
            Notre plateforme est entièrement accessible sur mobile. Suivez, contrôlez
            et analysez votre flotte où que vous soyez, à tout moment.
          </p>

          <div className="flex items-start justify-center gap-8">

            {/* COLONNE GAUCHE */}
            <div className="hidden md:flex flex-col gap-14 w-80 pt-10">
              {[
                {
                  icon: <MapPin size={22} className="text-[#1E3A8A]" />,
                  title: "Position en temps réel",
                  desc: "Visualisez tous vos véhicules sur la carte interactive depuis l'application mobile.",
                },
                {
                  icon: <Bell size={22} className="text-[#1E3A8A]" />,
                  title: "Alertes instantanées",
                  desc: "Recevez les notifications push directement sur votre smartphone en cas d'incident.",
                },
                {
                  icon: <Clock size={22} className="text-[#1E3A8A]" />,
                  title: "Historique des trajets",
                  desc: "Consultez et rejouez l'historique complet de chaque véhicule en quelques secondes.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start justify-end gap-4 text-right">
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* TÉLÉPHONE CENTRAL */}
            <div className="relative shrink-0 z-10">
              <div className="absolute inset-0 -m-6 bg-blue-50 rounded-[60px] opacity-60 blur-xl" />
              <div className="relative bg-gray-900 rounded-[44px] p-3 shadow-2xl w-[280px]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-full z-10" />
                <div className="bg-white rounded-[36px] overflow-hidden">
                  <div className="bg-[#1E3A8A] px-4 pt-10 pb-5">
                    <p className="text-white text-sm font-semibold">STI Fleet</p>
                    <p className="text-blue-200 text-xs mt-1">128 véhicules actifs</p>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {[
                      { name: "Véhicule #001", status: "En route", color: "bg-green-400", km: "12.4 km" },
                      { name: "Véhicule #002", status: "À l'arrêt", color: "bg-yellow-400", km: "0 km" },
                      { name: "Véhicule #003", status: "Alerte", color: "bg-red-400", km: "3.1 km" },
                      { name: "Véhicule #004", status: "En route", color: "bg-green-400", km: "8.7 km" },
                    ].map((v, i) => (
                      <div key={i} className="px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-2.5 h-2.5 rounded-full ${v.color}`} />
                          <div>
                            <p className="text-xs font-semibold text-gray-800">{v.name}</p>
                            <p className="text-[11px] text-gray-400">{v.status}</p>
                          </div>
                        </div>
                        <p className="text-[11px] text-gray-500">{v.km}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 px-4 py-3 flex justify-around border-t border-gray-100">
                    {[
                      <MapPin size={16} className="text-[#1E3A8A]" />,
                      <Bell size={16} className="text-gray-400" />,
                      <BarChart3 size={16} className="text-gray-400" />,
                      <Shield size={16} className="text-gray-400" />,
                    ].map((icon, i) => (
                      <span key={i}>{icon}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* COLONNE DROITE */}
            <div className="hidden md:flex flex-col gap-14 w-80 pt-10">
              {[
                {
                  icon: <Shield size={22} className="text-[#1E3A8A]" />,
                  title: "Coupure moteur à distance",
                  desc: "Immobilisez un véhicule en un tap depuis votre téléphone en cas de vol.",
                },
                {
                  icon: <BarChart3 size={22} className="text-[#1E3A8A]" />,
                  title: "Rapports & Statistiques",
                  desc: "Consultez les performances et la consommation de votre flotte en temps réel.",
                },
                {
                  icon: <Truck size={22} className="text-[#1E3A8A]" />,
                  title: "Gestion multi-véhicules",
                  desc: "Gérez l'ensemble de votre parc depuis une interface unifiée et intuitive.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-left">
                  <div className="shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* BOUTONS */}
          <div className="flex justify-center gap-4 mt-16 flex-wrap">
            <button className="bg-[#1E3A8A] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-blue-900 transition">
              <a href="https://wa.me/74459211">Demander une démo →</a>
            </button>
            <button className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-8 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition">
              <a href="https://wa.me/74459211">Comment ça marche ?</a>
            </button>
          </div>

        </div>
      </section>

      {/* POUR QUI */}
      <section className="px-6 py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Adapté à chaque secteur d'activité
          </h2>
          <p className="mt-4 text-gray-500 max-w-4xl mb-12">
            Notre solution GPS s'adapte à tous les types de flottes et secteurs,
            des petites entreprises aux grandes organisations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "/entrepot1.jpg",
                title: "Logistique & Livraison",
                desc: "Optimisez vos tournées, réduisez les coûts carburant et garantissez des livraisons dans les délais.",
              },
              {
                image: "/chantier.jpg",
                title: "BTP & Chantiers",
                desc: "Surveillez vos engins de chantier, prévenez les utilisations non autorisées et optimisez leur déploiement.",
              },
              {
                image: "/taxigab.jpg",
                title: "Gouvernement & Municipalités",
                desc: "Suivez les véhicules de service public, assurez la transparence et optimisez les ressources.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition">
                <img src={item.image} alt={item.title} className="w-full h-[200px] object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1E3A8A] mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMENT ÇA MARCHE */}
      <section className="px-6 py-24 bg-white border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Comment ça marche ?
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Une mise en place rapide et simple, sans compétences techniques requises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Installation du traceur", desc: "Nos techniciens installent le boîtier GPS sur vos véhicules en moins d'une heure." },
              { step: "02", title: "Activation de la plateforme", desc: "Votre compte est configuré et vos véhicules apparaissent immédiatement sur la carte." },
              { step: "03", title: "Suivi en temps réel", desc: "Visualisez et gérez toute votre flotte depuis l'application web ou mobile STI." },
              { step: "04", title: "Rapports & Optimisation", desc: "Analysez les données pour réduire les coûts et améliorer l'efficacité opérationnelle." },
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="w-14 h-14 bg-[#1E3A8A] text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#3D4ECC] rounded-[40px] px-16 py-24 text-white overflow-hidden min-h-[280px] flex flex-col items-center justify-center">
            <div className="absolute -left-20 -top-20 w-[600px] h-[600px] pointer-events-none" style={{ transform: "rotate(-15deg)" }}>
              {[...Array(20)].map((_, i) => (
                <div key={i} className="absolute border border-white/60 rounded-[60px]"
                  style={{ top: `${i * 12}px`, left: `${i * 12}px`, width: `${100 - i * 1.8}%`, height: `${100 - i * 1.8}%`, opacity: Math.max(0.3, 1 - i * 0.04) }}
                />
              ))}
            </div>
            <div className="relative z-10 text-center max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                Prêt à prendre le contrôle de votre flotte ?
              </h2>
              <p className="mt-4 text-blue-200 text-lg">
                Contactez-nous dès aujourd'hui pour une démonstration gratuite et sans engagement.
              </p>
              <div className="mt-10 flex justify-center gap-4 flex-wrap">
                <button className="bg-white text-[#3D4ECC] px-10 py-4 rounded-2xl font-medium text-base hover:bg-blue-50 transition shadow-lg">
                  <a href="https://wa.me/74459211">Demander une démo →</a>
                </button>
                <button className="border border-white/40 text-white px-10 py-4 rounded-2xl font-medium text-base hover:bg-white/10 transition">
                  <a href="https://wa.me/74459211">Obtenir un devis</a>
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