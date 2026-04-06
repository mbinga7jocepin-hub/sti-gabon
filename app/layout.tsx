import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siping Technology Innovation (STI) | GPS, Caméras & Réseaux au Gabon",
  description:
    "Installation GPS, vidéosurveillance et solutions réseau professionnelles au Gabon.",
  verification: {
    google: "xNSBKpLju287G8m0GyZCqi8Iipj0HvEWzdX75mk0if4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      {/* AJOUTE ÇA */}
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>

      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Siping Technology Innovation(STI)",
              url: "https://sti-gabon.ga",
              telephone: "+24166916882",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Libreville",
                addressCountry: "GA",
              },
              areaServed: "Gabon",
            }),
          }}
        />
        {children}
      </body>

    </html>
  );
}