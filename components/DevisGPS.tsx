"use client";

import { useState } from "react";
import { X, Download, ChevronDown } from "lucide-react";

const TARIFS = {
  traceur_basique: { label: "Traceur GPS basique", prix: 45000 },
  traceur_premium: { label: "Traceur GPS premium (coupure moteur)", prix: 75000 },
  abonnement_mensuel: { label: "Abonnement plateforme / véhicule / mois", prix: 5000 },
  installation: { label: "Installation par véhicule", prix: 15000 },
  formation: { label: "Formation équipe (forfait)", prix: 50000 },
};

export default function DevisGPS({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    nbVehicules: 1,
    typTraceur: "traceur_basique" as keyof typeof TARIFS,
    dureeAbonnement: 12,
    installation: true,
    formation: false,
  });

  const [generated, setGenerated] = useState(false);

  const calculer = () => {
    const traceur = TARIFS[form.typTraceur].prix * form.nbVehicules;
    const abonnement = TARIFS.abonnement_mensuel.prix * form.nbVehicules * form.dureeAbonnement;
    const installation = form.installation ? TARIFS.installation.prix * form.nbVehicules : 0;
    const formation = form.formation ? TARIFS.formation.prix : 0;
    return { traceur, abonnement, installation, formation, total: traceur + abonnement + installation + formation };
  };

  const telechargerPDF = async () => {
    const { default: jsPDF } = await import("jspdf");
    const montants = calculer();
    const doc = new jsPDF();
    const BLUE = [30, 58, 138] as [number, number, number];
    const GRAY = [100, 100, 100] as [number, number, number];

    // EN-TÊTE
    doc.setFillColor(...BLUE);
    doc.rect(0, 0, 210, 40, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("STI — Devis Estimatif GPS", 14, 18);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("Siping Technology Innovation — Libreville, Gabon", 14, 27);
    doc.text(`Généré le ${new Date().toLocaleDateString("fr-FR")}`, 14, 34);

    // INFOS CLIENT
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Informations client", 14, 54);
    doc.setDrawColor(...BLUE);
    doc.line(14, 57, 196, 57);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...GRAY);
    const infos = [
      ["Nom", form.nom || "—"],
      ["Entreprise", form.entreprise || "—"],
      ["Email", form.email || "—"],
      ["Téléphone", form.telephone || "—"],
    ];
    infos.forEach(([key, val], i) => {
      doc.text(`${key} :`, 14, 65 + i * 7);
      doc.setTextColor(0, 0, 0);
      doc.text(val, 60, 65 + i * 7);
      doc.setTextColor(...GRAY);
    });

    // DÉTAIL PRESTATIONS
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Détail des prestations", 14, 104);
    doc.line(14, 107, 196, 107);

    // TABLEAU HEADER
    doc.setFillColor(...BLUE);
    doc.rect(14, 110, 182, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.text("Prestation", 18, 116);
    doc.text("Qté", 120, 116);
    doc.text("P.U (FCFA)", 140, 116);
    doc.text("Total (FCFA)", 168, 116);

    // LIGNES
    const lignes = [
      [TARIFS[form.typTraceur].label, `${form.nbVehicules}`, `${TARIFS[form.typTraceur].prix.toLocaleString("fr-FR")}`, `${montants.traceur.toLocaleString("fr-FR")}`],
      [`Abonnement plateforme (${form.dureeAbonnement} mois)`, `${form.nbVehicules} véh.`, `${(TARIFS.abonnement_mensuel.prix * form.dureeAbonnement).toLocaleString("fr-FR")}`, `${montants.abonnement.toLocaleString("fr-FR")}`],
      ...(form.installation ? [["Installation par véhicule", `${form.nbVehicules}`, `${TARIFS.installation.prix.toLocaleString("fr-FR")}`, `${montants.installation.toLocaleString("fr-FR")}`]] : []),
      ...(form.formation ? [["Formation équipe (forfait)", "1", `${TARIFS.formation.prix.toLocaleString("fr-FR")}`, `${montants.formation.toLocaleString("fr-FR")}`]] : []),
    ];

    lignes.forEach((ligne, i) => {
      const y = 126 + i * 10;
      if (i % 2 === 0) {
        doc.setFillColor(240, 244, 255);
        doc.rect(14, y - 4, 182, 10, "F");
      }
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.text(ligne[0], 18, y + 2);
      doc.text(ligne[1], 120, y + 2);
      doc.text(ligne[2], 140, y + 2);
      doc.text(ligne[3], 168, y + 2);
    });

    // TOTAL
    const totalY = 126 + lignes.length * 10 + 8;
    doc.setFillColor(...BLUE);
    doc.rect(14, totalY, 182, 12, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("TOTAL ESTIMATIF", 18, totalY + 8);
    doc.text(`${montants.total.toLocaleString("fr-FR")} FCFA`, 148, totalY + 8);

    // NOTE
    doc.setTextColor(...GRAY);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8);
    doc.text("* Ce devis est estimatif et non contractuel. Contactez-nous pour un devis définitif.", 14, totalY + 22);
    doc.text("* Les prix peuvent varier selon la complexité du projet et la localisation.", 14, totalY + 28);

    // FOOTER
    doc.setFillColor(...BLUE);
    doc.rect(0, 280, 210, 17, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.text("STI — +241 74 45 92 11 — contact@sti-gabon.com — Libreville, Gabon", 14, 290);

    doc.save(`Devis_STI_GPS_${form.nom || "client"}.pdf`);
  };

  const montants = calculer();

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl my-8">

        {/* HEADER */}
        <div className="bg-[#1E3A8A] rounded-t-3xl px-8 py-6 flex justify-between items-center">
          <div>
            <h2 className="text-white text-xl font-bold">Devis estimatif GPS</h2>
            <p className="text-blue-200 text-sm mt-1">Remplissez le formulaire pour obtenir votre devis PDF</p>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white transition">
            <X size={24} />
          </button>
        </div>

        <div className="px-8 py-8 space-y-6">

          {/* INFOS CLIENT */}
          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">Vos informations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { key: "nom", label: "Nom complet *", placeholder: "Jean Dupont" },
                { key: "entreprise", label: "Entreprise", placeholder: "Nom de votre société" },
                { key: "email", label: "Email", placeholder: "jean@exemple.com" },
                { key: "telephone", label: "Téléphone", placeholder: "+241 XX XX XX XX" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="text-xs font-medium text-gray-500 block mb-1">{field.label}</label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form] as string}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E3A8A] transition"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CONFIGURATION */}
          <div>
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">Configuration de votre flotte</h3>
            <div className="space-y-4">

              {/* NB VÉHICULES */}
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-1">Nombre de véhicules</label>
                <input
                  type="number"
                  min={1}
                  max={500}
                  value={form.nbVehicules}
                  onChange={(e) => setForm({ ...form, nbVehicules: parseInt(e.target.value) || 1 })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E3A8A] transition"
                />
              </div>

              {/* TYPE TRACEUR */}
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-1">Type de traceur GPS</label>
                <div className="relative">
                  <select
                    value={form.typTraceur}
                    onChange={(e) => setForm({ ...form, typTraceur: e.target.value as keyof typeof TARIFS })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#1E3A8A] transition appearance-none"
                  >
                    <option value="traceur_basique">Traceur basique — 45 000 FCFA / véh.</option>
                    <option value="traceur_premium">Traceur premium (coupure moteur) — 75 000 FCFA / véh.</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* DURÉE ABONNEMENT */}
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-1">
                  Durée d'abonnement — 5 000 FCFA / véhicule / mois
                </label>
                <div className="flex gap-3">
                  {[6, 12, 24].map((d) => (
                    <button
                      key={d}
                      onClick={() => setForm({ ...form, dureeAbonnement: d })}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition ${
                        form.dureeAbonnement === d
                          ? "bg-[#1E3A8A] text-white border-[#1E3A8A]"
                          : "bg-white text-gray-600 border-gray-200 hover:border-[#1E3A8A]"
                      }`}
                    >
                      {d} mois
                    </button>
                  ))}
                </div>
              </div>

              {/* OPTIONS */}
              <div>
                <label className="text-xs font-medium text-gray-500 block mb-2">Options supplémentaires</label>
                <div className="space-y-2">
                  {[
                    { key: "installation", label: "Installation par nos techniciens", detail: "15 000 FCFA / véhicule" },
                    { key: "formation", label: "Formation de votre équipe", detail: "50 000 FCFA (forfait)" },
                  ].map((opt) => (
                    <div
                      key={opt.key}
                      onClick={() => setForm({ ...form, [opt.key]: !form[opt.key as keyof typeof form] })}
                      className={`flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer transition ${
                        form[opt.key as keyof typeof form]
                          ? "border-[#1E3A8A] bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div>
                        <p className="text-sm font-medium text-gray-800">{opt.label}</p>
                        <p className="text-xs text-gray-400">{opt.detail}</p>
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        form[opt.key as keyof typeof form] ? "border-[#1E3A8A] bg-[#1E3A8A]" : "border-gray-300"
                      }`}>
                        {form[opt.key as keyof typeof form] && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RÉCAPITULATIF */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <h3 className="text-sm font-bold text-gray-700 mb-4">Récapitulatif estimatif</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Traceurs GPS ({form.nbVehicules} véh.)</span>
                <span className="font-medium">{montants.traceur.toLocaleString("fr-FR")} FCFA</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Abonnement ({form.dureeAbonnement} mois × {form.nbVehicules} véh.)</span>
                <span className="font-medium">{montants.abonnement.toLocaleString("fr-FR")} FCFA</span>
              </div>
              {form.installation && (
                <div className="flex justify-between text-gray-600">
                  <span>Installation ({form.nbVehicules} véh.)</span>
                  <span className="font-medium">{montants.installation.toLocaleString("fr-FR")} FCFA</span>
                </div>
              )}
              {form.formation && (
                <div className="flex justify-between text-gray-600">
                  <span>Formation équipe</span>
                  <span className="font-medium">{montants.formation.toLocaleString("fr-FR")} FCFA</span>
                </div>
              )}
              <div className="border-t border-gray-300 pt-3 mt-3 flex justify-between">
                <span className="font-bold text-gray-900">Total estimatif</span>
                <span className="font-bold text-[#1E3A8A] text-lg">{montants.total.toLocaleString("fr-FR")} FCFA</span>
              </div>
            </div>
          </div>

          {/* BOUTON PDF */}
          <button
            onClick={telechargerPDF}
            disabled={!form.nom}
            className="w-full bg-[#1E3A8A] text-white py-4 rounded-xl font-semibold text-sm hover:bg-blue-900 transition flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Download size={18} />
            Télécharger mon devis en PDF
          </button>
          <p className="text-center text-xs text-gray-400">
            Devis estimatif — non contractuel. Renseignez votre nom pour activer le téléchargement.
          </p>

        </div>
      </div>
    </div>
  );
}