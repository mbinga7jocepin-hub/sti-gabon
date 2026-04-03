"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  Clock,
  MapPin
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", objet: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="bg-gray-50 text-gray-900 min-h-screen">
      <Navbar />

      {/* HERO SIMPLE */}
      <section className="pt-40 pb-16 px-6 bg-white border-b border-gray-200 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#1E3A8A] mb-4">
            Contactez-nous
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Comment pouvons-nous vous aider ?
          </h1>
          <p className="mt-5 text-gray-500 text-lg">
            Notre équipe est disponible pour répondre à toutes vos questions
            et vous accompagner dans vos projets.
          </p>
        </div>
      </section>

      {/* CORPS PRINCIPAL */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* COLONNE GAUCHE */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos coordonnées
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">
              Découvrez nos horaires d'ouverture et notre adresse pour planifier
              votre visite. Nous sommes impatients de vous accueillir et de
              répondre à tous vos besoins en personne.
            </p>

            {/* HORAIRES & ADRESSE */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Heures d'ouverture
                </p>
                <p className="text-sm text-gray-700 font-medium">Lundi – Vendredi : 8h30 – 18h00</p>
                <p className="text-sm text-gray-700 font-medium">Samedi : 8h30 – 16h00</p>
                <p className="text-sm text-gray-400">Fermé le dimanche</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                  Adresse
                </p>
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  Bas de Gué Gué, Libreville, Gabon
                </p>
              </div>
            </div>

            {/* TÉLÉPHONE */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                <Phone size={18} className="text-[#1E3A8A]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Numéro Téléphone</p>
                <p className="text-base font-bold text-gray-900">+241 74 45 92 11</p>
                <p className="text-base font-bold text-gray-900">+241 66 91 68 82</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                <Mail size={18} className="text-[#1E3A8A]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Email</p>
                <a href="mailto:contact@sti-gabon.com" className="text-base font-bold text-[#1E3A8A] hover:underline">
                  contact@sti-gabon.com
                </a>
              </div>
            </div>

            {/* RÉSEAUX SOCIAUX */}
            
          </div>

          {/* COLONNE DROITE — FORMULAIRE */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Nous contacter
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Utilisez notre formulaire pour nous faire part de vos questions ou
              demandes. Nous vous répondrons dans les plus brefs délais.
            </p>

            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <p className="text-2xl mb-2">✅</p>
                <p className="text-green-700 font-semibold text-lg">Message envoyé !</p>
                <p className="text-green-600 text-sm mt-2">Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Votre Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1E3A8A] transition"
                      placeholder="Yvon Nguema"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Votre Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1E3A8A] transition"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Objet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={form.objet}
                    onChange={(e) => setForm({ ...form, objet: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1E3A8A] transition"
                    placeholder="Demande de devis, information..."
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Votre message
                  </label>
                  <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#1E3A8A] transition resize-none"
                    placeholder="Décrivez votre besoin..."
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#1E3A8A] text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-blue-900 transition w-full md:w-auto"
                >
                  Envoyer le message →
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* CARTE GOOGLE MAPS */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[350px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63853.53861864819!2d9.4162!3d0.3924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x107f3b7dd95b3f07%3A0x7c97a8a9bf06f9dc!2sLibreville%2C%20Gabon!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <Footer />

    </main>
  );
}