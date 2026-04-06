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
        {children}
      </body>

    </html>
  );
}