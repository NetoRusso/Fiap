'use client';

import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import ErrorBoundary from "@/components/ErrorBoundary";
import WaterAnimationFallback from "@/components/ErrorBoundary/WaterAnimationFallback";
import { useScreen } from "@/context/ScreenContext";

const WaterAnimation = dynamic(() => import("@/components/WaterAnimation"), {
  loading: () => <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Carregando...</div>,
  ssr: false,
});

const Cursos = dynamic(() => import("@/components/Cursos"), {
  loading: () => <div style={{ minHeight: '50vh' }} />,
});

const Faq = dynamic(() => import("@/components/Faq"), {
  loading: () => <div style={{ minHeight: '50vh' }} />,
});

export default function Home() {
  const { shouldShowDesktop } = useScreen();

  return (
    <>
      <Navbar />
      <Header />
      <Intro />
      {shouldShowDesktop && (
        <ErrorBoundary fallback={<WaterAnimationFallback />}>
          <WaterAnimation />
        </ErrorBoundary>
      )}
      <Cursos />
      <Faq />
    </>
  );
}
