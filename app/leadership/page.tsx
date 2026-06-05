
import LeadershipHero from "./components/LeadershipHero";
import LeadershipProfiles from "./components/LeadershipProfiles";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Leadership | eTech Residential College",
  description: "Meet the visionary educators driving academic excellence and shaping the future at eTech Residential College.",
};

export default function LeadershipPage() {
  return (
    <div className="min-h-screen font-sans bg-[#f8fafc]">

      <ScrollReveal />
      
      <main>
        <LeadershipHero />
        <LeadershipProfiles />
      </main>


    </div>
  );
}
