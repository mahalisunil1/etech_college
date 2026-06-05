
import ScrollReveal from "../components/ScrollReveal";

import AboutHero from "./components/AboutHero";
import AboutIntro from "./components/AboutIntro";
import CorePillars from "./components/CorePillars";
import Management from "./components/Management";
import VisionTradition from "./components/VisionTradition";

export const metadata = {
  title: "About Us | eTech Residential College",
  description: "Learn about eTech Residential College's history, management, vision, and our commitment to providing quality education in Odisha.",
};



export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">


      <ScrollReveal />



      <main>
        <AboutHero />
        <AboutIntro />
        <CorePillars />
        <Management />
        <VisionTradition />
      </main>


    </div>
  );
}
