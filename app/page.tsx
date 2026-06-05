import Hero from "./components/Hero";
import NoticeBoard from "./components/NoticeBoard";
import ScrollReveal from "./components/ScrollReveal";
import Principal from "./components/Principal";
import Courses from "./components/Courses";
import Legacy from "./components/Legacy";
import Toppers from "./components/Toppers";
import EntranceToppers from "./components/EntranceToppers";
import AchievementsCarousel from "./components/AchievementsCarousel";
import Features from "./components/Features";
import CampusTour from "./components/CampusTour";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">

      <Hero />
      <ScrollReveal />
      
      <Principal />

      <Courses />

      <Legacy />
      <Toppers />
      <EntranceToppers theme="dark" limit={3} showViewAll={true} />
      
      {/* ── Aesthetic Divider ── */}
      <div className="w-full flex items-center justify-center relative z-30 bg-slate-900 h-16">
         <div className="absolute w-full h-[2px] bg-gradient-to-r from-slate-900 via-blue-600/50 to-slate-900" />
         <div className="w-12 h-12 bg-slate-900 border-2 border-blue-500/50 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
           <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 2l2.4 7.4h7.6l-6.1 4.5 2.3 7.3-6.2-4.6-6.2 4.6 2.3-7.3-6.1-4.5h7.6z"/>
           </svg>
         </div>
      </div>

      {/* ── Continuous Shared Background for Achievements & Facilities ── */}
      <div className="relative w-full bg-slate-50 overflow-hidden">
         {/* Giant Blueprint Grid spanning both sections */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(15,23,42,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.5) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
         
         {/* Massive Floating Ambient Glows */}
         <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply" />
         <div className="absolute bottom-[10%] left-[-10%] w-[1000px] h-[1000px] bg-indigo-500/10 rounded-full blur-[180px] pointer-events-none mix-blend-multiply" />
         <div className="absolute top-[50%] left-[20%] w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

         <AchievementsCarousel />
         <Features />
      </div>

      <CampusTour />
      <NoticeBoard />

    </div>
  );
}
