import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const realisations = [
  {
    image: "/realisations/mission1.jpeg",
    categorie: "GPS & Flotte",
    titre: "Gestion de flotte — Entreprise de transport",
    lieu: "Libreville, Gabon",
  },
  {
    image: "/realisations/mission2.jpeg",
    categorie: "Vidéosurveillance",
    titre: "Sécurisation d'un complexe résidentiel",
    lieu: "Libreville, Gabon",
  },
  {
    image: "/realisations/mission3.jpeg",
    categorie: "Réseau & WiFi",
    titre: "Infrastructure WiFi — Hôtel 4 étoiles",
    lieu: "Port-Gentil, Gabon",
  },
  {
    image: "/realisations/mission4.jpeg",
    categorie: "Domotique",
    titre: "Maison intelligente — Résidence privée",
    lieu: "Libreville, Gabon",
  },
  {
    image: "/realisations/mission5.jpeg",
    categorie: "Vidéosurveillance",
    titre: "Surveillance d'un entrepôt industriel",
    lieu: "Owendo, Gabon",
  },
  {
    image: "/realisations/mission6.jpeg",
    categorie: "GPS & Flotte",
    titre: "Suivi de véhicules — Société BTP",
    lieu: "Libreville, Gabon",
  },
];

const categories = ["Tous", "GPS & Flotte", "Vidéosurveillance", "Réseau & WiFi", "Domotique"];

const categoryColors: Record<string, string> = {
  "GPS & Flotte": "bg-blue-100 text-blue-700",
  "Vidéosurveillance": "bg-purple-100 text-purple-700",
  "Réseau & WiFi": "bg-green-100 text-green-700",
  "Domotique": "bg-orange-100 text-orange-700",
};

export default function RealisationsPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#1E3A8A] mb-4">
                Nos Réalisations
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Des projets concrets, <br />
                <span className="text-[#1E3A8A]">des résultats réels.</span>
              </h1>
            </div>
            <p className="text-gray-500 text-base max-w-md leading-relaxed">
              Découvrez quelques-uns des projets réalisés par STI à Libreville
              et dans tout le Gabon — GPS, vidéosurveillance, réseau et domotique.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
            {[
              { value: "500+", label: "Missions réalisées" },
              { value: "100+", label: "Clients satisfaits" },
              { value: "4", label: "Domaines d'expertise" },
              { value: "10 ans", label: "D'expérience terrain" },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <p className="text-3xl font-bold text-[#1E3A8A]">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* GRILLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {realisations.map((item, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition duration-300"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden h-[240px]">
                  <img
                    src={item.image}
                    alt={item.titre}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {/* BADGE CATÉGORIE */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${categoryColors[item.categorie]}`}>
                      {item.categorie}
                    </span>
                  </div>
                </div>

                {/* TEXTE */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.titre}</h3>
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {item.lieu}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#1E3A8A] rounded-3xl px-12 py-16 text-white overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">

            {/* LIGNES DÉCORATIVES */}
            <div className="absolute -left-20 -top-20 w-[500px] h-[500px] pointer-events-none" style={{ transform: "rotate(-15deg)" }}>
              {[...Array(15)].map((_, i) => (
                <div key={i} className="absolute border border-white/20 rounded-[60px]"
                  style={{ top: `${i * 14}px`, left: `${i * 14}px`, width: `${100 - i * 2}%`, height: `${100 - i * 2}%`, opacity: Math.max(0.1, 0.4 - i * 0.03) }}
                />
              ))}
            </div>

            <div className="relative z-10 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Vous avez un projet en tête ?
              </h2>
              <p className="text-blue-200 text-sm leading-relaxed">
                Contactez-nous pour discuter de votre projet. Nos experts se déplacent
                à Libreville et dans tout le Gabon pour une étude gratuite.
              </p>
            </div>

            <div className="relative z-10 flex gap-4 flex-wrap shrink-0">
              <a href="/contact" className="bg-white text-[#1E3A8A] px-7 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition">
                Nous contacter →
              </a>
              <a href="https://wa.me/74459211" className="border border-white/40 text-white px-7 py-3 rounded-xl font-semibold text-sm hover:bg-white/10 transition">
                WhatsApp
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}