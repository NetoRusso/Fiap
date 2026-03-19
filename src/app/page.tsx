'use client';

import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import WaterAnimation from "@/components/WaterAnimation";
import Cursos from "@/components/Cursos";
import { useScreen } from "@/context/ScreenContext";
import Faq from "@/components/Faq";



export default function Home() {

  const { shouldShowDesktop } = useScreen();

  return (
    <>
    <Navbar />
    <Header />
    <Intro />
    {shouldShowDesktop && <WaterAnimation />}
    <Cursos />
    <Faq />
    </>
  );
}
