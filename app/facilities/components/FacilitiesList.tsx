"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import UniversalLightbox from "../../components/UniversalLightbox";

interface Facility {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  images: { src: string; label: string }[];
  bulletPoints: {
    title: string;
    desc: string;
    iconPath: string;
  }[];
}

interface InfoFacility {
  id: string;
  num: string;
  title: string;
  desc: string;
  tag: string;
  gradient: string;
  glowColor: string;
  glowLine: string;
  iconColor: string;
  iconPath: string;
}

const visualFacilities: Facility[] = [
  {
    id: "hostel",
    title: "Separate Hostel for Boys & Girls",
    subtitle: "A Home Away From Home",
    badge: "Separate Wings",
    desc: "We provide separate, fully-furnished, and highly secured residential wings for boys and girls, engineered to ensure a safe, hygienic, and productive stay.",
    images: [
      { src: "/new/FACILITIES/HOSTEL/BOYS HOSTEL FRONT.webp", label: "Boys Hostel Front View" },
      { src: "/new/FACILITIES/HOSTEL/GIRLS HOSTEL 1.webp", label: "Girls Hostel Wing A" },
      { src: "/new/FACILITIES/HOSTEL/GIRLS HOSTEL 2.webp", label: "Girls Hostel Wing B" }
    ],
    bulletPoints: [
      {
        title: "24/7 Wardens & Security",
        desc: "Resident wardens and security personnel ensure safety and discipline around the clock.",
        iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      },
      {
        title: "Structured Study Hours",
        desc: "Compulsory supervised self-study hours inside hostels to maintain academic consistency.",
        iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      },
      {
        title: "RO Purified Drinking Water",
        desc: "Continuous supply of pure and chilled drinking water through advanced RO filtration systems.",
        iconPath: "M11.48 3.499c.195-.39.78-.39.976 0l2.25 4.561 5.033.731c.433.063.606.595.293.901l-3.642 3.551.86 5.012c.074.432-.38.761-.767.558L12 18.347l-4.512 2.372c-.387.203-.84-.126-.767-.558l.86-5.012-3.642-3.551c-.313-.306-.14-.838.293-.901l5.033-.731 2.25-4.561z"
      }
    ]
  },
  {
    id: "hostel-mess",
    title: "Hygienic Hostel Mess",
    subtitle: "Healthy Eating, Healthy Living",
    badge: "4 Meals Daily",
    desc: "A highly hygienic hostel mess serving four nutritious, balanced, and fresh meals daily (breakfast, lunch, evening snacks, and dinner) to keep students healthy and focused.",
    images: [
      { src: "/new/FACILITIES/HOSTEL/DSC_1196.webp", label: "Hostel Dining & Mess Area" },
      { src: "/gallery-page/gallery-image-twelve.webp", label: "Hygienic Dining Facilities" }
    ],
    bulletPoints: [
      {
        title: "Nutritious Balanced Diet",
        desc: "Menu curated by nutritionists to include essential proteins, vegetables, and fresh dairy.",
        iconPath: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      },
      {
        title: "Strict Kitchen Hygiene",
        desc: "Regular sanitization and strict clean-cooking protocols monitored by our administrative staff.",
        iconPath: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Comfortable Dining Area",
        desc: "Spacious and clean sitting plans ensuring students enjoy meals in a relaxed environment.",
        iconPath: "M11.48 3.499c.195-.39.78-.39.976 0l2.25 4.561 5.033.731c.433.063.606.595.293.901l-3.642 3.551.86 5.012c.074.432-.38.761-.767.558L12 18.347l-4.512 2.372c-.387.203-.84-.126-.767-.558l.86-5.012-3.642-3.551c-.313-.306-.14-.838.293-.901l5.033-.731 2.25-4.561z"
      }
    ]
  },
  {
    id: "seminar",
    title: "Air-Conditioned Seminar Hall",
    subtitle: "Intellectual Gatherings",
    badge: "300+ Capacity",
    desc: "We regularly organize seminars, workshops, and guest lectures to keep our students at the forefront of modern science and technology. Our spacious hall serves as the hub.",
    images: [
      { src: "/new/FACILITIES/SEMINAR HALL.webp", label: "Seminar Hall Main Stage" }
    ],
    bulletPoints: [
      {
        title: "Expert Sessions",
        desc: "Interactive symposia on emerging scientific trends, engineering, and board roadmap planning.",
        iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      },
      {
        title: "Collaborative Learning",
        desc: "Structured group discussions and brainstorming sessions designed to encourage logic development.",
        iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.097.03M16.5 10.5a3 3 0 11-6 0 3 3 0 016 0zM18 6.5a3 3 0 11-6 0 3 3 0 016 0zM9 18.72a9.094 9.094 0 01-3.741-.479 3 3 0 014.682-2.72m-.94 3.198-.097.03M7.5 10.5a3 3 0 11-6 0 3 3 0 016 0zM9 6.5a3 3 0 11-6 0 3 3 0 016 0z"
      },
      {
        title: "Advanced AV Setup",
        desc: "High-definition projection screens and surround sound systems to facilitate multimedia lectures.",
        iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      }
    ]
  },
  {
    id: "sports",
    title: "Sports & Recreational Activities",
    subtitle: "Mind & Body Harmony",
    badge: "Annual Events",
    desc: "We believe a healthy mind resides in a healthy body. Our campus features dedicated playgrounds and sports courts where students engage in outdoor and indoor activities to develop fitness and teamwork.",
    images: [
      { src: "/new/FACILITIES/SPORTS EVENTS/DSC_6464.webp", label: "Annual Sports - Cricket Match" },
      { src: "/new/FACILITIES/SPORTS EVENTS/DSC_6505.webp", label: "Annual Sports - Running Meet" },
      { src: "/new/FACILITIES/SPORTS EVENTS/DSC_6569.webp", label: "Annual Sports - Tug of War" },
      { src: "/new/FACILITIES/SPORTS EVENTS/DSC_6632.webp", label: "Annual Sports - Winners Ceremony" }
    ],
    bulletPoints: [
      {
        title: "Outdoor Sports Fields",
        desc: "Fully leveled fields for cricket matches, running tournaments, and team building activities.",
        iconPath: "M11.48 3.499c.195-.39.78-.39.976 0l2.25 4.561 5.033.731c.433.063.606.595.293.901l-3.642 3.551.86 5.012c.074.432-.38.761-.767.558L12 18.347l-4.512 2.372c-.387.203-.84-.126-.767-.558l.86-5.012-3.642-3.551c-.313-.306-.14-.838.293-.901l5.033-.731 2.25-4.561z"
      },
      {
        title: "Physical Education",
        desc: "Regular workshops, self-defence programs, and morning yoga schedules to keep students active.",
        iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      },
      {
        title: "Recreation Zones",
        desc: "Indoor gaming blocks containing board games, table tennis, and carrom boards inside residential blocks.",
        iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      }
    ]
  },
  {
    id: "faculty",
    title: "Experienced and Dedicated Faculty",
    subtitle: "Mentorship & Guidance",
    badge: "Professional Mentors",
    desc: "A team of highly qualified and experienced teachers residing close to the campus, offering round-the-clock guidance, board preparation support, and conceptual mentorship.",
    images: [
      { src: "/new/FACILITIES/FACULITIES.webp", label: "Experienced teaching faculty group photo" }
    ],
    bulletPoints: [
      {
        title: "Round-The-Clock Support",
        desc: "Faculty members stay close to campus, helping students solve doubt sets even in late hours.",
        iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      },
      {
        title: "Continuous Progress Reviews",
        desc: "Customized mentorship files tracking marks performance, strengths, and areas requiring tutoring.",
        iconPath: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Interactive Methods",
        desc: "Concept mapping, chart diagrams, and formula sheets to make hard board topics understandable.",
        iconPath: "M11.48 3.499c.195-.39.78-.39.976 0l2.25 4.561 5.033.731c.433.063.606.595.293.901l-3.642 3.551.86 5.012c.074.432-.38.761-.767.558L12 18.347l-4.512 2.372c-.387.203-.84-.126-.767-.558l.86-5.012-3.642-3.551c-.313-.306-.14-.838.293-.901l5.033-.731 2.25-4.561z"
      }
    ]
  },
  {
    id: "transportation",
    title: "Transportation Facility",
    subtitle: "Safe & Punctual Transit",
    badge: "Connected Fleet",
    desc: "A large dedicated fleet of well-connected local buses ensuring safe, comfortable, and timely commutes for day scholars across Dhenkanal and surrounding areas.",
    images: [
      { src: "/new/FACILITIES/TRANSPORTATION FACILITY/DSC_1193.webp", label: "College Transport Fleet Front View" },
      { src: "/new/FACILITIES/TRANSPORTATION FACILITY/DSC_1304.webp", label: "College Bus Side Profile" },
      { src: "/new/FACILITIES/TRANSPORTATION FACILITY/DSC_1396.webp", label: "Student Commuting Boarding" }
    ],
    bulletPoints: [
      {
        title: "Wide Route Network",
        desc: "Buses cover extensive rural and urban lines to provide daily transit to every day scholar.",
        iconPath: "M11.48 3.499c.195-.39.78-.39.976 0l2.25 4.561 5.033.731c.433.063.606.595.293.901l-3.642 3.551.86 5.012c.074.432-.38.761-.767.558L12 18.347l-4.512 2.372c-.387.203-.84-.126-.767-.558l.86-5.012-3.642-3.551c-.313-.306-.14-.838.293-.901l5.033-.731 2.25-4.561z"
      },
      {
        title: "Safety Verified Commutes",
        desc: "Qualified, alert bus drivers with strict vehicle speed limits and regular emergency safety checks.",
        iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      },
      {
        title: "Accurate Punctuality",
        desc: "Strict adherence to pick-up schedules ensuring students arrive fresh before first assembly.",
        iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      }
    ]
  },
  {
    id: "smart-classrooms-visual",
    title: "AC Smart Classrooms",
    subtitle: "Digital Learning Environment",
    badge: "Interactive Setup",
    desc: "Air-conditioned rooms with digital smart boards and AV systems transform complex concepts into visual experiences, making learning highly engaging.",
    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7919.webp", label: "Smart Classroom View 1" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7924.webp", label: "Smart Classroom View 2" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7928.webp", label: "Smart Classroom View 3" }
    ],
    bulletPoints: [
      {
        title: "Digital Smart Boards",
        desc: "Interactive panels that make learning engaging and visually appealing.",
        iconPath: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
      },
      {
        title: "AV Systems",
        desc: "High-quality audio-visual systems for an immersive learning experience.",
        iconPath: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z"
      },
      {
        title: "Comfortable Environment",
        desc: "Fully air-conditioned spaces ensuring student comfort during long sessions.",
        iconPath: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      }
    ]
  },
  {
    id: "campus-cctv-visual",
    title: "Campus with CCTV",
    subtitle: "24x7 Security Surveillance",
    badge: "Maximum Safety",
    desc: "A comprehensive network of high-definition CCTV cameras ensures round-the-clock safety and security across the entire campus.",
    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/CCTV/CCTV 1.webp", label: "Campus CCTV" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/CCTV/CCTV 2.webp", label: "CCTV Surveillance" }
    ],
    bulletPoints: [
      {
        title: "Continuous Monitoring",
        desc: "Real-time monitoring of all campus activities to ensure a secure environment.",
        iconPath: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z"
      },
      {
        title: "Strategic Placement",
        desc: "Cameras located at all entry points, corridors, and communal areas.",
        iconPath: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Dedicated Control Room",
        desc: "Security personnel actively monitoring feeds to coordinate rapid response if needed.",
        iconPath: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      }
    ]
  },
  {
    id: "canteen-facility-visual",
    title: "College Canteen",
    subtitle: "Hygienic & Fresh Food",
    badge: "Quality Meals",
    desc: "Our college canteen offers a wide variety of fresh, nutritious, and hygienically prepared meals and snacks for students and staff.",
    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/BOYS CANTEEN.webp", label: "Boys Canteen" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/GIRLS CANTEEN.webp", label: "Girls Canteen" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/DSC_7900.webp", label: "Canteen Area" }
    ],
    bulletPoints: [
      {
        title: "Diverse Menu",
        desc: "A wide selection of healthy meals, snacks, and beverages catering to different tastes.",
        iconPath: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      },
      {
        title: "Clean and Hygienic",
        desc: "Strict adherence to food safety and cleanliness standards in preparation and serving.",
        iconPath: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Relaxing Ambiance",
        desc: "A comfortable setting for students to socialize and unwind between classes.",
        iconPath: "M11.48 3.499c.195-.39.78-.39.976 0l2.25 4.561 5.033.731c.433.063.606.595.293.901l-3.642 3.551.86 5.012c.074.432-.38.761-.767.558L12 18.347l-4.512 2.372c-.387.203-.84-.126-.767-.558l.86-5.012-3.642-3.551c-.313-.306-.14-.838.293-.901l5.033-.731 2.25-4.561z"
      }
    ]
  },
  {
    id: "science-laboratory-visual",
    title: "Well-Equipped Laboratories",
    subtitle: "Hands-on Learning",
    badge: "Advanced Tech",
    desc: "Physics, Chemistry, Botany, and Zoology labs with modern instruments and specimens for comprehensive practical excellence.",
    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/CHEMISTRY 1.webp", label: "Chemistry Lab" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/PHYSICS 1.webp", label: "Physics Lab" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/BOTANY 1.webp", label: "Botany Lab" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/ZOOLOGY 1.webp", label: "Zoology Lab" }
    ],
    bulletPoints: [
      {
        title: "Modern Equipment",
        desc: "Up-to-date apparatus and tools essential for conducting advanced experiments.",
        iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      },
      {
        title: "Expert Supervision",
        desc: "Experienced lab assistants and faculty guiding students through every practical session.",
        iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
      },
      {
        title: "Safety First",
        desc: "Strict adherence to safety protocols, including first-aid readiness and proper ventilation.",
        iconPath: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      }
    ]
  },
  {
    id: "computer-lab-visual",
    title: "Advanced Computer Lab",
    subtitle: "Digital Fluency",
    badge: "High-Speed Access",
    desc: "High-speed workstations, modern software, and broadband internet building digital fluency for every student.",
    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/IT.webp", label: "Computer Lab" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/IT (2).webp", label: "IT Workstations" }
    ],
    bulletPoints: [
      {
        title: "Latest Technology",
        desc: "Equipped with the latest hardware and software to keep students up to date with industry standards.",
        iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      },
      {
        title: "High-Speed Internet",
        desc: "Seamless connectivity for research, online learning, and uninterrupted project work.",
        iconPath: "M13 10V3L4 14h7v7l9-11h-7z"
      },
      {
        title: "Dedicated Support",
        desc: "Technical staff available to assist students with programming, design, and software issues.",
        iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.097.03M16.5 10.5a3 3 0 11-6 0 3 3 0 016 0zM18 6.5a3 3 0 11-6 0 3 3 0 016 0zM9 18.72a9.094 9.094 0 01-3.741-.479 3 3 0 014.682-2.72m-.94 3.198-.097.03M7.5 10.5a3 3 0 11-6 0 3 3 0 016 0zM9 6.5a3 3 0 11-6 0 3 3 0 016 0z"
      }
    ]
  }
];

const informationalFacilities: InfoFacility[] = [
  {
    id: "doubt-clearing",
    num: "01",
    title: "Regular Doubt-Clearing Sessions",
    desc: "One-on-one sessions with expert faculty ensure no concept is left unclear, keeping every student ahead of the curve.",
    tag: "Support",
    gradient: "linear-gradient(135deg, #083344 0%, #0e7490 100%)",
    glowColor: "rgba(6,182,212,0.45)",
    glowLine: "linear-gradient(90deg,#67e8f9,#06b6d4,#67e8f9)",
    iconColor: "text-cyan-300",
    iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.097.03M16.5 10.5a3 3 0 11-6 0 3 3 0 016 0zM18 6.5a3 3 0 11-6 0 3 3 0 016 0zM9 18.72a9.094 9.094 0 01-3.741-.479 3 3 0 014.682-2.72m-.94 3.198-.097.03"
  },
  {
    id: "science-labs",
    num: "02",
    title: "Well-Equipped Science Labs",
    desc: "Physics, Chemistry, and Biology labs with modern instruments and specimens for hands-on practical excellence.",
    tag: "Academics",
    gradient: "linear-gradient(135deg, #2e1065 0%, #6d28d9 100%)",
    glowColor: "rgba(139,92,246,0.45)",
    glowLine: "linear-gradient(90deg,#c4b5fd,#8b5cf6,#c4b5fd)",
    iconColor: "text-violet-300",
    iconPath: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
  },
  {
    id: "library",
    num: "03",
    title: "Library & Reading Room",
    desc: "Thousands of textbooks, journals, and reference books in a quiet scholarly space that fosters deep research.",
    tag: "Academics",
    gradient: "linear-gradient(135deg, #042f2e 0%, #0f766e 100%)",
    glowColor: "rgba(20,184,166,0.45)",
    glowLine: "linear-gradient(90deg,#5eead4,#14b8a6,#5eead4)",
    iconColor: "text-teal-300",
    iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
  },
  {
    id: "security",
    num: "04",
    title: "24×7 CCTV Surveillance",
    desc: "Campus-wide high-definition camera network ensures round-the-clock safety for all students and staff.",
    tag: "Safety",
    gradient: "linear-gradient(135deg, #172554 0%, #1d4ed8 100%)",
    glowColor: "rgba(37,99,235,0.45)",
    glowLine: "linear-gradient(90deg,#93c5fd,#2563eb,#93c5fd)",
    iconColor: "text-blue-300",
    iconPath: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2z"
  },
  {
    id: "coaching",
    num: "05",
    title: "NEET & JEE Integrated Coaching",
    desc: "Daily mock tests and expert-curated material that weave entrance coaching seamlessly into the board syllabus.",
    tag: "Entrance",
    gradient: "linear-gradient(135deg, #052e16 0%, #16a34a 100%)",
    glowColor: "rgba(22,163,74,0.45)",
    glowLine: "linear-gradient(90deg,#86efac,#16a34a,#86efac)",
    iconColor: "text-emerald-300",
    iconPath: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
  },
  {
    id: "guidance",
    num: "06",
    title: "Career Guidance & Counselling",
    desc: "Professional counsellors help students navigate exam stress, career choices, and personal development confidently.",
    tag: "Support",
    gradient: "linear-gradient(135deg, #4c0519 0%, #e11d48 100%)",
    glowColor: "rgba(225,29,72,0.45)",
    glowLine: "linear-gradient(90deg,#fda4af,#e11d48,#fda4af)",
    iconColor: "text-rose-300",
    iconPath: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.097.03M16.5 10.5a3 3 0 11-6 0 3 3 0 016 0zM18 6.5a3 3 0 11-6 0 3 3 0 016 0zM9 18.72a9.094 9.094 0 01-3.741-.479 3 3 0 014.682-2.72m-.94 3.198-.097.03M7.5 10.5a3 3 0 11-6 0 3 3 0 016 0zM9 6.5a3 3 0 11-6 0 3 3 0 016 0z"
  },
  {
    id: "scholarships",
    num: "07",
    title: "Scholarship Support",
    desc: "Merit-based scholarships and tuition fee exemptions reward academic excellence and motivate high achievers.",
    tag: "Support",
    gradient: "linear-gradient(135deg, #451a03 0%, #d97706 100%)",
    glowColor: "rgba(217,119,6,0.45)",
    glowLine: "linear-gradient(90deg,#fcd34d,#d97706,#fcd34d)",
    iconColor: "text-amber-300",
    iconPath: "M11.48 3.499c.195-.39.78-.39.976 0l2.25 4.561 5.033.731c.433.063.606.595.293.901l-3.642 3.551.86 5.012c.074.432-.38.761-.767.558L12 18.347l-4.512 2.372c-.387.203-.84-.126-.767-.558l.86-5.012-3.642-3.551c-.313-.306-.14-.838.293-.901l5.033-.731 2.25-4.561z"
  },
  {
    id: "medical",
    num: "08",
    title: "Medical Assistance & First Aid",
    desc: "On-campus first-aid station and collaboration with nearby clinics ensure every health emergency is handled swiftly.",
    tag: "Health",
    gradient: "linear-gradient(135deg, #431407 0%, #ea580c 100%)",
    glowColor: "rgba(234,88,12,0.45)",
    glowLine: "linear-gradient(90deg,#fdba74,#ea580c,#fdba74)",
    iconColor: "text-orange-300",
    iconPath: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
  }
];

export default function FacilitiesList() {
  const [activeIndices, setActiveIndices] = useState<Record<string, number>>({});

  // Modal Gallery state
  const [modalTitle, setModalTitle] = useState("");
  const [modalImages, setModalImages] = useState<{ src: string; label: string }[] | null>(null);
  const [activeModalIdx, setActiveModalIdx] = useState(0);

  const handleKey = (e: KeyboardEvent) => {
    if (!modalImages) return;
    if (e.key === "Escape") {
      setModalImages(null);
    } else if (e.key === "ArrowRight") {
      setActiveModalIdx((prev) => (prev + 1) % modalImages.length);
    } else if (e.key === "ArrowLeft") {
      setActiveModalIdx((prev) => (prev - 1 + modalImages.length) % modalImages.length);
    }
  };

  useEffect(() => {
    if (modalImages !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [modalImages]);

  const getActiveImg = (sectionId: string, maxLen: number) => {
    const idx = activeIndices[sectionId] || 0;
    return idx < maxLen ? idx : 0;
  };
  const setActiveImg = (sectionId: string, idx: number) => {
    setActiveIndices((prev) => ({ ...prev, [sectionId]: idx }));
  };

  return (
    <div className="w-full bg-gradient-to-b from-[#f8fafc] to-white pt-20 lg:pt-32 relative overflow-hidden">
      {/* Decorative Blueprint Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: "linear-gradient(#1e3a8a 1px, transparent 1px), linear-gradient(90deg, #1e3a8a 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      {/* Glowing Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#fbbf24]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating Animated Stars */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out forwards; }
      `}</style>
      <svg className="absolute top-20 left-10 w-8 h-8 text-[#fbbf24]/30 pointer-events-none z-0" style={{ animation: 'floatSlow 6s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>
      <svg className="absolute bottom-40 right-20 w-12 h-12 text-blue-500/20 pointer-events-none z-0" style={{ animation: 'floatFast 5s ease-in-out infinite' }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L14.4 9.6H22L15.8 14.4L18.2 22L12 17.2L5.8 22L8.2 14.4L2 9.6H9.6L12 2Z"/></svg>

      <div className="w-[90vw] mx-auto max-w-7xl flex flex-col gap-24 lg:gap-36 relative z-10">
        
        {/* Render Visual Sections */}
        {visualFacilities.map((fac, idx) => {
          const isEven = idx % 2 === 0;
          const activeImgIdx = getActiveImg(fac.id, fac.images.length);

          return (
            <div key={fac.id} className="flex flex-col gap-24 lg:gap-36">
              {idx > 0 && (
                /* ── DIVIDER ── */
                <div className="w-[80%] mx-auto h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
              )}

              <section 
                id={fac.id} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 scroll-mt-32 ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-[45%] relative reveal">
                  <div className="absolute -inset-4 bg-[#fbbf24]/20 rounded-2xl rotate-2 scale-105 -z-10" />
                  <div className="absolute -inset-4 bg-blue-900/10 rounded-2xl -rotate-2 scale-105 -z-10" />
                  
                  <div 
                    onClick={() => {
                      setModalTitle(fac.title);
                      setModalImages(fac.images);
                      setActiveModalIdx(activeImgIdx);
                    }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-900 cursor-pointer group"
                  >
                    <Image src={fac.images[activeImgIdx].src} 
                      alt={fac.title} 
                      className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
                     width={800} height={800} unoptimized={false} />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex justify-between items-center z-10">
                      <span className="text-white text-xs font-bold tracking-widest uppercase">{fac.images[activeImgIdx].label}</span>
                      <span className="text-white/60 text-xs font-mono">{activeImgIdx + 1} / {fac.images.length}</span>
                    </div>

                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                      <div className="w-10 h-10 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-md">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Thumbnail Controls */}
                  {fac.images.length > 1 && (
                    <div className="flex gap-2 mt-4 justify-center">
                      {fac.images.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveImg(fac.id, i)}
                          className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                            activeImgIdx === i ? "border-blue-600 scale-105" : "border-transparent opacity-65 hover:opacity-100"
                          }`}
                        >
                          <Image src={img.src} alt={img.label} className="w-full h-full object-cover"  width={800} height={800} unoptimized={false} />
                        </button>
                      ))}
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 bg-blue-600 text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-lg z-20">
                    {fac.badge}
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-[55%] flex flex-col justify-center reveal">
                  <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3 flex items-center gap-2">
                    <span className="w-8 h-[2px] bg-blue-600" /> {fac.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-[1.15] tracking-tight mb-6 relative inline-block">
                    {fac.title}
                    {/* Double Swoosh */}
                    <svg className="absolute -bottom-4 left-0 w-[80%] h-[16px] text-blue-500/30" viewBox="0 0 200 16" fill="none" preserveAspectRatio="none">
                      <path d="M5,12 Q100,0 195,10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
                      <path d="M25,16 Q100,6 170,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                    </svg>
                  </h2>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                    {fac.desc}
                  </p>

                  <ul className="space-y-6">
                    {fac.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx} className="flex gap-4">
                        <div className="mt-1 shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={bp.iconPath} />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-lg">{bp.title}</h4>
                          <p className="text-slate-600 leading-relaxed text-sm mt-1">{bp.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          );
        })}

        {/* ── DARK BAND + INFORMATIONAL CARD GRID ── */}
        <section id="additional-services" className="scroll-mt-32 -mx-[5vw] px-[5vw] py-20 -mb-0 relative overflow-hidden" style={{ background: 'linear-gradient(160deg,#0f172a 0%,#1e293b 100%)' }}>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)', backgroundSize: '36px 36px' }} />
          {/* Glow orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(99,102,241,0.12)' }} />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(14,165,233,0.10)' }} />

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">
                <span className="w-6 h-[1px] bg-blue-400" /> Complete Campus Ecosystem <span className="w-6 h-[1px] bg-blue-400" />
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-[1.1] tracking-tight mt-2">
                Additional Services &amp; Facilities
              </h2>
              <p className="text-slate-400 text-base mt-5 max-w-xl mx-auto leading-relaxed">
                An integrated ecosystem of support services designed to nurture every dimension of student life at E-Tech College.
              </p>
            </div>

            {/* Card grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {informationalFacilities.map((fac, idx) => (
                <div
                  id={fac.id}
                  key={fac.id}
                  className={`group relative rounded-2xl overflow-hidden flex flex-col min-h-[240px] transition-all duration-300 hover:-translate-y-2 cursor-default ${
                    // first card and last card span 2 cols on xl for bento feel
                    idx === 0 || idx === 9 ? 'xl:col-span-2' : ''
                  }`}
                  style={{
                    background: fac.gradient,
                    boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 16px 40px ${fac.glowColor}`)}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)')}
                >
                  {/* Animated glow line at top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: fac.glowLine }}
                  />

                  {/* Shimmer overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 60%)' }}
                  />

                  {/* Giant watermark number */}
                  <span
                    className="absolute -bottom-3 -right-1 text-[110px] font-black leading-none select-none pointer-events-none font-mono"
                    style={{ color: 'rgba(255,255,255,0.06)' }}
                  >
                    {fac.num}
                  </span>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 gap-3 relative z-10">
                    {/* Tag chip */}
                    <span className="self-start text-[10px] font-black uppercase tracking-[0.18em] px-2.5 py-1 rounded-full mb-1" style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.75)' }}>
                      {fac.tag}
                    </span>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.13)' }}>
                      <svg className={`w-5 h-5 ${fac.iconColor}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={fac.iconPath} />
                      </svg>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white text-[15px] leading-snug mt-1">
                      {fac.title}
                    </h3>

                    {/* Desc */}
                    <p className="text-white/50 text-[13px] leading-relaxed flex-1">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <UniversalLightbox
        isOpen={modalImages !== null}
        onClose={() => setModalImages(null)}
        image={
          modalImages !== null && modalImages[activeModalIdx]
            ? {
                src: modalImages[activeModalIdx].src,
                label: modalImages[activeModalIdx].label,
                desc: modalTitle,
              }
            : null
        }
        showNavigation={modalImages !== null && modalImages.length > 1}
        onNext={() => setActiveModalIdx((prev) => (prev + 1) % (modalImages?.length || 1))}
        onPrev={() => setActiveModalIdx((prev) => (prev - 1 + (modalImages?.length || 1)) % (modalImages?.length || 1))}
      />
    </div>
  );
}
