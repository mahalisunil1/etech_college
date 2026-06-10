with open('app/gallery/components/GalleryGrid.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

felicitation_insert = """  { src: "/new/Gallery/2026/DSC_7846.webp", alt: "2026 Board Felicitation Function", year: "2026", category: "felicitation" },
  { src: "/WEBSITE CHANGES 3/FALICITATION/DSC_7836.webp", alt: "Felicitation Program Awardee", year: "2026", category: "felicitation" },
  { src: "/WEBSITE CHANGES 3/FALICITATION/DSC_7837.webp", alt: "Felicitation Program Celebration", year: "2026", category: "felicitation" },"""

content = content.replace(
    '  { src: "/new/Gallery/2026/DSC_7846.webp", alt: "2026 Board Felicitation Function", year: "2026", category: "felicitation" },',
    felicitation_insert
)

facilities_insert = """  { src: "/new/Gallery/2022/DSC_2711.webp", alt: "Student doubt clearing desk", year: "2022", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7919.webp", alt: "Smart Classroom 1", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7928.webp", alt: "Smart Classroom 2", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/CCTV/CCTV 1.webp", alt: "Campus CCTV", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/DSC_7900.webp", alt: "Canteen Area", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/IT.webp", alt: "Computer Lab", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/PHYSICS 1.webp", alt: "Physics Lab", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/CHEMISTRY 1.webp", alt: "Chemistry Lab", year: "2026", category: "campus-life" }"""

content = content.replace(
    '  { src: "/new/Gallery/2022/DSC_2711.webp", alt: "Student doubt clearing desk", year: "2022", category: "campus-life" }',
    facilities_insert
)

with open('app/gallery/components/GalleryGrid.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
