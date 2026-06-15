import os

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
ag_file = os.path.join(base_path, r'app\achievements\components\AchievementGallery.tsx')

with open(ag_file, 'r', encoding='utf-8') as f:
    content = f.read()

old_list = '''  { id: 6, src: "/new/AWARDS & CEREMONIES/CHSE-2025/DSC_1871.webp", alt: "CHSE 2025 Top Achievers" },
  { id: 7, src: "/new/AWARDS & CEREMONIES/CHSE-2024/_DSC6761.webp", alt: "CHSE 2024 Felicitation program" },
];'''

new_list = '''  { id: 6, src: "/new/AWARDS & CEREMONIES/CHSE-2025/DSC_1871.webp", alt: "CHSE 2025 Top Achievers" },
  { id: 7, src: "/new/AWARDS & CEREMONIES/CHSE-2024/_DSC6761.webp", alt: "CHSE 2024 Felicitation program" },
  { id: 8, src: "/feliciations 2026/DSC_7836.JPG", alt: "2026 Felicitation Ceremony" },
  { id: 9, src: "/feliciations 2026/DSC_7843.JPG", alt: "2026 Achievers Awards" },
];'''

content = content.replace(old_list, new_list)

old_parent_cls = 'className={`columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 transition-opacity duration-1000 ${mounted ? \'opacity-100\' : \'opacity-0\'}`}'
new_parent_cls = 'className={`columns-1 sm:columns-2 lg:columns-3 gap-6 transition-opacity duration-1000 ${mounted ? \'opacity-100\' : \'opacity-0\'}`}'
content = content.replace(old_parent_cls, new_parent_cls)

old_child_cls = 'className="relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border border-blue-900 hover:border-[#fbbf24]/80 transition-all duration-500 reveal hover:-translate-y-2"'
new_child_cls = 'className="relative break-inside-avoid mb-6 rounded-2xl overflow-hidden cursor-pointer group shadow-2xl border border-blue-900 hover:border-[#fbbf24]/80 transition-all duration-500 reveal hover:-translate-y-2"'
content = content.replace(old_child_cls, new_child_cls)

with open(ag_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated AchievementGallery successfully.")
