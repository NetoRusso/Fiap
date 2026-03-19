import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.scss";
import { ScreenProvider } from "@/context/ScreenContext";

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
  description: "Pagina de teste para Front-end - Neto Russo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={montserrat.className}>
        <ScreenProvider>
          {children}
        </ScreenProvider>
      </body>
    </html>
  );
}
