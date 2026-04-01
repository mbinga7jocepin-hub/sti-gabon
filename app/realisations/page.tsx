import Navbar from "@/components/Navbar";
import { Clock, Wrench, Bell } from "lucide-react";

export default function RealisationsPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

        {/* LIGNES ANIMÉES FOND */}
        <div className="absolute -left-20 -top-20 w-[600px] h-[600px] pointer-events-none animate-lines">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute border border-blue-100 rounded-[60px]"
              style={{ top: `${i * 12}px`, left: `${i * 12}px`, width: `${100 - i * 1.8}%`, height: `${100 - i * 1.8}%`, opacity: Math.max(0.1, 0.3 - i * 0.015) }}
            />
          ))}
        </div>
        <div className="absolute -right-20 -bottom-20 w-[600px] h-[600px] pointer-events-none animate-lines" style={{ animationDelay: "4s" }}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute border border-blue-100 rounded-[60px]"
              style={{ top: `${i * 12}px`, left: `${i * 12}px`, width: `${100 - i * 1.8}%`, height: `${100 - i * 1.8}%`, opacity: Math.max(0.1, 0.3 - i * 0.015) }}
            />
          ))}
        </div>

        {/* CONTENU CENTRÉ */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">

          {/* ICÔNE ANIMÉE */}
          <div className="flex justify-center mb-8">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 bg-blue-100 rounded-full animate-ping opacity-30" />
              <div className="relative w-24 h-24 bg-[#1E3A8A] rounded-full flex items-center justify-center shadow-xl">
                <Wrench size={40} className="text-white animate-spin" style={{ animationDuration: "4s" }} />
              </div>
            </div>
          </div>

          {/* BADGE */}

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Nos réalisations arrivent <br />
            <span className="text-[#1E3A8A]">très bientôt.</span>
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            Nous préparons une galerie complète de nos installations GPS,
            vidéosurveillance, réseau WiFi et domotique réalisées à Libreville
            et dans tout le Gabon. Revenez bientôt !
          </p>

          {/* BARRE DE PROGRESSION */}
          <div className="bg-gray-100 rounded-full h-3 w-full max-w-sm mx-auto mb-3 overflow-hidden">
            <div className="bg-[#1E3A8A] h-3 rounded-full w-[65%] relative">
              <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full" />
            </div>
          </div>
          <p className="text-sm text-gray-400 mb-10">65% complété</p>

          {/* BOUTONS */}
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="/" className="bg-[#1E3A8A] text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-blue-900 transition">
              ← Retour à l'accueil
            </a>
            <a href="/contact" className="border border-gray-300 text-gray-700 px-7 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition">
              Nous contacter
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F1F4B] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10">
          <div className="border-r border-white/10 pr-8">
            <h3 className="text-lg font-bold mb-4">STI</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Siping Technology Innovation propose des solutions technologiques
              sur mesure pour particuliers et entreprises au Gabon.
            </p>
            <a href="mailto:contact@sti-gabon.com" className="text-[#F97316] text-sm hover:underline">
              contact@sti-gabon.com
            </a>
          </div>
          <div className="md:px-6">
            <h3 className="text-base font-bold mb-5">Nous Contacter</h3>
            <p className="text-sm text-gray-300 mb-1">+241 74 45 92 11</p>
            <p className="text-sm text-gray-400 mb-4">Lundi – Samedi : 8h00 – 18h00</p>
            <a href="mailto:contact@sti-gabon.com" className="text-[#F97316] text-sm hover:underline">
              contact@sti-gabon.com
            </a>
          </div>
          <div className="md:px-6">
            <h3 className="text-base font-bold mb-5">Nos Services</h3>
            <ul className="space-y-2">
              {["GPS & Gestion de flotte", "Vidéosurveillance", "Réseau & WiFi", "Domotique intelligente"].map((s) => (
                <li key={s}><a href="#" className="text-sm text-gray-400 hover:text-white transition">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="md:px-6">
            <h3 className="text-base font-bold mb-5">Liens Utiles</h3>
            <ul className="space-y-2">
              {["À propos de STI", "Nos réalisations", "Demander un devis", "Contact"].map((s) => (
                <li key={s}><a href="#" className="text-sm text-gray-400 hover:text-white transition">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center border-b border-white/10">
          <div className="w-1/3 border-r border-white/10"></div>
          <p className="flex-1 text-sm text-gray-300 text-center pl-6">
            Interventions rapides à Libreville et dans tout le Gabon.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-xs text-gray-500">
            Copyright {new Date().getFullYear()} © Tous droits réservés. Développé par{" "}
            <span className="text-gray-400">Euclidian-Tech</span>.
          </p>
        </div>
      </footer>

    </main>
  );
}