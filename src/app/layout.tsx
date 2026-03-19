import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.scss";
import { ScreenProvider } from "@/context/ScreenContext";
import CustomCursor from "@/components/CustomCursor";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ['latin'],
  variable: "--font-montserrat",
  display: "swap",
})

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ['latin'],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FIAP - Let's Rock the Future",
  description: "Descubra os cursos de tecnologia, inovação e empreendedorismo da FIAP. Prepare-se para o futuro com a melhor educação em TI, programação, design e negócios digitais.",

  keywords: [
    "FIAP",
    "cursos tecnologia",
    "faculdade TI",
    "programação",
    "inovação",
    "educação digital",
    "cursos online",
    "MBA tecnologia",
    "graduação TI"
  ],

  authors: [{ name: "FIAP" }],
  creator: "Neto Russo",
  publisher: "FIAP",

  alternates: {
    canonical: "https://fiap-netorusso.vercel.app/",
    languages: {
      'pt-BR': 'https://fiap-netorusso.vercel.app/',
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fiap-netorusso.vercel.app/",
    siteName: "FIAP",
    title: "FIAP - Let's Rock the Future",
    description: "Descubra os cursos de tecnologia, inovação e empreendedorismo da FIAP. Prepare-se para o futuro com a melhor educação em TI, programação, design e negócios digitais.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FIAP - Let's Rock the Future - Cursos de Tecnologia e Inovação",
        type: "image/png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  applicationName: "FIAP",
  referrer: "origin-when-cross-origin",
  category: "education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${roboto.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareDeveloper",
              "name": "Neto Russo",
              "description": "Paixão por tecnologia, impulsionando resultados",
              "url": "https://netorusso.onrender.com/",
              "sameAs": [
                "https://www.instagram.com/neto.russo/",
                "https://www.linkedin.com/in/neto-russo/",
                "https://netorusso.onrender.com/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Admissions",
                "availableLanguage": "Portuguese",
                "telephone": "+55-34-99213-8816",
                "email": "netoacrn1@gmail.com"
              }
            })
          }}
        />
      </head>
      <body className={montserrat.className}>
        <ScreenProvider>
          <CustomCursor />
          {children}
        </ScreenProvider>
      </body>
    </html>
  );
}
