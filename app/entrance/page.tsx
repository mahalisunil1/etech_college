import EntranceHero from "./components/EntranceHero";
import EntranceFeatures from "./components/EntranceFeatures";
import WhyChooseUs from "../components/WhyChooseUs";
import EntranceToppers from "../components/EntranceToppers";
import EntranceResults from "./components/EntranceResults";
import EntranceBanners from "./components/EntranceBanners";
import EntranceGallery from "./components/EntranceGallery";
import ScrollReveal from "../components/ScrollReveal";

export default function EntrancePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">

      <ScrollReveal />
      <EntranceHero />

      {/* ── Continuous Ambient Background ── */}
      <div className="relative w-full bg-slate-50 overflow-hidden">
        {/* Giant Blueprint Grid spanning all sections */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        
        {/* Massive Floating Ambient Glows */}
        <div className="absolute top-[5%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[45%] left-[-10%] w-[1000px] h-[1000px] bg-indigo-500/10 rounded-full blur-[180px] pointer-events-none mix-blend-multiply" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

        <EntranceFeatures />
        <WhyChooseUs />
        <EntranceToppers transparentBg={true} />
        <EntranceResults />
        <EntranceBanners />
        <EntranceGallery />
      </div>
    </div>
  );
}
