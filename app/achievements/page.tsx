
import AchievementsHero from "./components/AchievementsHero";
import TopAchievers from "./components/TopAchievers";
import CollegeHighlights from "./components/CollegeHighlights";
import AchievementGallery from "./components/AchievementGallery";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Achievements | eTech Residential College",
  description:
    "Explore the remarkable achievements of our students at eTech Residential College. Discover our 90%+ club and browse the milestone moments from our award ceremonies.",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen font-sans bg-[#f8fafc]">

      <ScrollReveal />

      <main>
        <AchievementsHero />
        <TopAchievers />
        <CollegeHighlights />
        <AchievementGallery />
      </main>


    </div>
  );
}
