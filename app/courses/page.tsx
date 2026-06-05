import CoursesHero from "./components/CoursesHero";
import CourseDetail from "./components/CourseDetail";
import ScrollReveal from "../components/ScrollReveal";

export const metadata = {
  title: "Our Courses | eTech College",
  description:
    "Explore eTech College's premium academic programs — CHSE, CBSE, and NEET — designed for exceptional board results and competitive entrance success.",
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      <ScrollReveal />
      <CoursesHero />
      <CourseDetail />
    </div>
  );
}
