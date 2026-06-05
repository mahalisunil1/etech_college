
import FacilitiesHero from "./components/FacilitiesHero";
import FacilitiesList from "./components/FacilitiesList";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Facilities | eTech Residential College",
  description:
    "Explore the world-class facilities at eTech Residential College, including separate hostels, a modern computer lab, an intellectual seminar hall, and dedicated sports grounds.",
};

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen font-sans bg-[#f8fafc]">

      <ScrollReveal />

      <main>
        <FacilitiesHero />
        <FacilitiesList />
      </main>


    </div>
  );
}
