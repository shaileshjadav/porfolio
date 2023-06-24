"use client";

import { useThemeContext } from "./Theme";

import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import PortFolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  const [theme] = useThemeContext();

  return (
    <div className={theme}>
      <Navbar />

      <main className="px-10 dark:bg-gray-900 md:px-20 lg:px-40  ">
        <MainSection />
        {/* Portofolio section */}
        <PortFolioSection />

        {/* About Me section */}
        <AboutSection />
      </main>
    </div>
  );
}
