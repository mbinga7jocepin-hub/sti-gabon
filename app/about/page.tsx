// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      <Navbar />
      {/* HERO */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de STI
            </h1>

            <p className="text-lg text-blue-100 mb-6">
              Nous aidons nos clients à sécuriser leurs opérations et leurs
              actifs. Et leur fournissons des technologies qui simplifient
              leur quotidien aussi bien au travail qu'à domicile.
            </p>

            <Link
              href="/contact"
              className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Nous contacter →
            </Link>
          </div>

          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src="/apropos.webp"
              alt="Equipe STI"
              fill
              className="object-cover rounded-xl"
            />
          </div>

        </div>
      </section>

      {/* QUI SOMMES NOUS */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* TEXTE */}
    <div>
      <h2 className="text-4xl font-bold text-blue-800 mb-6">
        Qui sommes-nous ?
      </h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        STI est une entreprise spécialisée dans la maintenance électronique, informatique et biomédicale, la sécurité électronique et la domotique, ainsi que les solutions d’électricité et d’énergie solaire.
        Nous accompagnons les particuliers, les entreprises et les industries dans l’installation, la maintenance et l’optimisation de leurs équipements technologiques et énergétiques.
        Grâce à une expertise multidisciplinaire et à des solutions fiables et innovantes, STI contribue à améliorer la performance, la sécurité et l’autonomie énergétique de ses clients.

      </p>

      <p className="text-gray-600 leading-relaxed mb-10">
        Nos solutions incluent l’installation, la formation,
        le suivi technique et un support réactif garantissant
        performance, sécurité et durabilité.
      </p>

      {/* RESEAUX SOCIAUX */}
      <div className="flex gap-4">
        {[
          { icon: "ri-whatsapp-line", link: "https://wa.me/74459211" },
          { icon: "ri-linkedin-fill", link: "https://www.linkedin.com/company/siping-technology-innovation/" },
          { icon: "ri-facebook-fill", link: "https://www.facebook.com/SmartHome241" },
          { icon: "ri-youtube-fill", link: "#" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.link}
            className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition"
          >
            <i className={`${social.icon} text-xl`} />
          </a>
        ))}
      </div>
    </div>

    {/* LOGOS PARTENAIRES */}
    <div className="grid grid-cols-2 gap-6">
      {[
        "/logos/client1.jpg",
        "/logos/client2.jpg",
        "/logos/client3.jpg",
        "/logos/client4.jpg",
      ].map((logo, i) => (
        <div
          key={i}
          className="bg-white rounded-xl p-10 flex items-center justify-center shadow-sm hover:shadow-lg transition duration-300"
        >
          <Image
            src={logo}
            alt="Partenaire"
            width={160}
            height={80}
            className="object-contain"
          />
        </div>
      ))}
    </div>

  </div>
</section>

      {/* VALEURS */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Nos valeurs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Innovation",
                desc: "Nous proposons des solutions modernes adaptées aux réalités locales."
              },
              {
                title: "Fiabilité",
                desc: "Nos équipes vous garantissent une disponibilité et une précision maximales."
              },
              {
                title: "Accompagnement",
                desc: "Nous accompagnons nos clients après prestations."
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* NOTRE EQUIPE */}
<section className="py-24 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold text-blue-900 mb-3">
      Notre Équipe
    </h2>

    <p className="text-gray-500 mb-16">
      Nos clients, nos meilleurs ambassadeurs
    </p>

    <div className="grid md:grid-cols-3 gap-12 items-center">

      {[
        {
          name: "Auberlien Siping",
          role: "Fondateur & PDG",
          image: "/team/siping.jpg",
        },
        {
          name: "Inconnu",
          role: "Responsable Technique",
          image: "/team/inconnu.png",
        },
        {
          name: "Randy Massimba",
          role: "Commerciale",
          image: "/team/randy.png",
        },
      ].map((member, i) => (
        <div key={i} className="flex flex-col items-center">

          {/* PHOTO */}
          <div className="relative w-28 h-28 mb-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover rounded-full shadow-md"
            />
          </div>

          {/* ÉTOILES */}
          <div className="flex text-yellow-400 mb-2 text-lg">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="ri-star-fill"></i>
            ))}
          </div>

          {/* NOM */}
          <h3 className="text-lg font-semibold text-gray-800">
            {member.name}
          </h3>

          {/* ROLE */}
          <p className="text-gray-500 text-sm">
            {member.role}
          </p>

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
                Prêt à collaborer avec nous ?
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