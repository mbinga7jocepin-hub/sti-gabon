"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, X, Menu } from "lucide-react";

// Structure de données mise à jour avec les liens (href)
const navLinks = [
  {
    label: "Services",
    href: "#", // On peut mettre une page /services si elle existe
    children: [
      { label: "📍 GPS & Gestion de flotte", href: "/solutions/gps" },
      { label: "🎥 Vidéosurveillance", href: "/videosurveillance" },
      { label: "📡 Réseau & WiFi", href: "/solutions/network" },
      { label: "🏠 Domotique & Maison intelligente", href: "/solutions/domotique" },
    ],
  },
  {
    label: "Réalisations",
    href: "/realisations",
    children: [],
  },
  {
    label: "À propos",
    href: "about",
    children: [],
  },
  {
    label: "Contact",
    href: "/contact",
    children: [],
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Fonction pour fermer le menu mobile lors d'un clic sur un lien
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      
      {/* BARRE SUPÉRIEURE */}
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img
              src="/logo1.png"
              alt="STI Logo"
              className="h-8 w-auto object-contain cursor-pointer"
            />
          </Link>
          <h1 className="font-bold text-xl text-[#1E3A8A] tracking-tight">STI</h1>
        </div>
        <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          GPS, Vidéosurveillance, Réseau & Domotique — Libreville, Gabon
        </div>
        <div className="flex items-center gap-4">
          <button className="text-sm text-[#1E3A8A] border border-[#1E3A8A] px-4 py-1.5 rounded-lg hover:bg-blue-50 transition hidden md:block">
            Demander un devis
          </button>
          <Search size={18} className="text-gray-500 cursor-pointer hover:text-[#1E3A8A] transition" />
          <span className="text-sm text-gray-500 hidden md:block">FR</span>
        </div>
      </div>

      {/* BARRE INFÉRIEURE (Desktop) */}
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children.length > 0 && setOpenMenu(link.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {link.children.length === 0 ? (
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm text-gray-700 hover:text-[#1E3A8A] transition rounded-lg hover:bg-blue-50 block"
                >
                  {link.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-700 hover:text-[#1E3A8A] transition rounded-lg hover:bg-blue-50">
                  {link.label}
                  <ChevronDown size={14} className={`transition-transform ${openMenu === link.label ? "rotate-180" : ""}`} />
                </button>
              )}

              {/* Dropdown Desktop */}
              {link.children.length > 0 && openMenu === link.label && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-2 w-64 z-50">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#1E3A8A] hover:bg-blue-50 transition"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link 
            href="https://wa.me/74459211" 
            className="bg-[#1E3A8A] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-900 transition hidden md:block"
          >
            DÉMARRER
          </Link>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-3 shadow-inner">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.children.length === 0 ? (
                <Link
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="block text-sm text-gray-700 py-2 font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => setOpenMenu(openMenu === link.label ? null : link.label)}
                    className="flex items-center justify-between w-full text-sm text-gray-700 py-2 font-medium"
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${openMenu === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openMenu === link.label && (
                    <div className="pl-4 flex flex-col gap-2 mt-1 border-l-2 border-gray-100 ml-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className="text-sm text-gray-500 hover:text-[#1E3A8A] py-1"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <Link 
            href="https://wa.me/74459211" 
            onClick={closeMobileMenu}
            className="bg-[#1E3A8A] text-white px-6 py-2 rounded-lg text-sm font-semibold mt-2 text-center"
          >
            DÉMARRER
          </Link>
        </div>
      )}
    </nav>
  );
}