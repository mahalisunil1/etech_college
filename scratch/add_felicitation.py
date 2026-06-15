import os

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
gg_file = os.path.join(base_path, r'app\gallery\components\GalleryGrid.tsx')

with open(gg_file, 'r', encoding='utf-8') as f:
    content = f.read()

target = '  // 2026 - Felicitation\n'
new_items = '''  { src: "/feliciations 2026/DSC_7836.JPG", alt: "Felicitation Ceremony Award", year: "2026", category: "felicitation" },
  { src: "/feliciations 2026/DSC_7843.JPG", alt: "Felicitation Function Honours", year: "2026", category: "felicitation" },
'''

if target in content:
    new_content = content.replace(target, target + new_items)
    with open(gg_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Added the two felicitation pictures successfully.")
else:
    print("Target section not found.")
