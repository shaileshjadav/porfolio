import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import PortFolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";

export default function Home() {

  return (
    <div >
      <Navbar />

      <main className="px-10 dark:bg-black-900 md:px-20 lg:px-40  ">
        <MainSection />
        {/* Portofolio section */}
        <PortFolioSection />

        {/* About Me section */}
        <AboutSection />
      </main>
    </div>
  );
}
