import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F1F4B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10">

        <div className="border-r border-white/10 pr-8">
          <h3 className="text-lg font-bold mb-4">STI</h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Siping Technology Innovation propose des solutions technologiques sur mesure
            pour particuliers et entreprises au Gabon.
          </p>
          <a href="mailto:contact@sti-gabon.com" className="text-[#F97316] text-sm hover:underline">
            contact@sti-gabon.com
          </a>
        </div>

        <div className="md:px-6">
          <h3 className="text-base font-bold mb-5">Nous Contacter</h3>
          <p className="text-sm text-gray-300 mb-1">+241 74 45 92 11</p>
          <p className="text-sm text-gray-300 mb-1">+241 66 91 68 82</p>
          <p className="text-sm text-gray-400 mb-1">Lundi – Vendredi : 8h30 – 18h00</p>
          <p className="text-sm text-gray-400 mb-4">Samedi : 8h30 – 16h00</p>
          <a href="mailto:contact@sti-gabon.com" className="text-[#F97316] text-sm hover:underline">
            contact@sti-gabon.com
          </a>
        </div>

        <div className="md:px-6">
          <h3 className="text-base font-bold mb-5">Nos Services</h3>
          <ul className="space-y-2">
            {[
              { label: "GPS & Gestion de flotte", href: "/solutions/gps" },
              { label: "Vidéosurveillance", href: "/videosurveillance" },
              { label: "Réseau & WiFi", href: "/solutions/network" },
              { label: "Domotique intelligente", href: "/solutions/domotique" },
            ].map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:px-6">
          <h3 className="text-base font-bold mb-5">Liens Utiles</h3>
          <ul className="space-y-2">
            {[
              { label: "À propos de STI", href: "/about" },
              { label: "Nos réalisations", href: "/realisations" },
              { label: "Demander un devis", href: "/contact" },
              { label: "Contact", href: "/contact" },
            ].map((s) => (
              <li key={s.label}>
                <Link href={s.href} className="text-sm text-gray-400 hover:text-white transition">
                  {s.label}
                </Link>
              </li>
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
  );
}