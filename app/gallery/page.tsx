
import GalleryHero from "./components/GalleryHero";
import GalleryGrid from "./components/GalleryGrid";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Gallery | eTech Residential College",
  description:
    "Explore life at eTech Residential College through our gallery — campus events, academic milestones, and student celebrations.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen font-sans bg-[#f8fafc]">

      <ScrollReveal />

      <main>
        <GalleryHero />
        <GalleryGrid />
      </main>


    </div>
  );
}
