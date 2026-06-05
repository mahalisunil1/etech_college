
import ScrollReveal from "../components/ScrollReveal";

import ContactHero from "./components/ContactHero";
import ContactSection from "./components/ContactSection";

export const metadata = {
  title: "Contact Us | eTech Residential College",
  description: "Get in touch with eTech Residential College. Find our contact details, address, and reach out to us for admission and inquiries.",
};



export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">

      <ScrollReveal />



      <main>
        <ContactHero />
        <ContactSection />
      </main>


    </div>
  );
}
