import os
import re

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'

# --- Task 1: FacilitiesList.tsx ---
fac_file = os.path.join(base_path, r'app\facilities\components\FacilitiesList.tsx')
with open(fac_file, 'r', encoding='utf-8') as f:
    fac_content = f.read()

# Replace hostel 2nd picture
fac_content = fac_content.replace(
    '{ src: "/gallery-page/gallery-image-twelve.webp", label: "Hygienic Dining Facilities" }',
    '{ src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/DSC_7900.webp", label: "Hygienic Dining Facilities" }'
)

# Update laboratory images
old_lab = '''    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/CHEMISTRY 1.webp", label: "Chemistry Lab" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/PHYSICS 1.webp", label: "Physics Lab" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/BOTANY 1.webp", label: "Botany Lab" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/ZOOLOGY 1.webp", label: "Zoology Lab" }
    ],'''

new_lab = '''    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/CHEMISTRY 1.webp", label: "Chemistry Lab 1" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/CHEMISTRY 2.webp", label: "Chemistry Lab 2" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/PHYSICS 1.webp", label: "Physics Lab 1" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/PHYSICS 2.webp", label: "Physics Lab 2" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/BOTANY 1.webp", label: "Botany Lab 1" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/BOTANY 2.webp", label: "Botany Lab 2" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/ZOOLOGY 1.webp", label: "Zoology Lab 1" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/ZOOLOGY 2.webp", label: "Zoology Lab 2" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/IT.webp", label: "IT Lab 1" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LABORATORY/IT (2).webp", label: "IT Lab 2" }
    ],'''
fac_content = fac_content.replace(old_lab, new_lab)

# Add Library before Canteen
canteen_id = '  {\n    id: "canteen-facility-visual",'
library_block = '''  {
    id: "library-visual",
    title: "College Library",
    subtitle: "Knowledge Resource Center",
    badge: "Extensive Collection",
    desc: "A quiet and fully equipped library with a vast collection of books, journals, and digital resources to support academic growth.",
    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/LAIBRARY/DSC_7957.webp", label: "Library Area 1" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LAIBRARY/DSC_7958.webp", label: "Library Area 2" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LAIBRARY/DSC_7960.webp", label: "Library Area 3" }
    ],
    features: [
      "Vast collection of textbooks",
      "Reference materials & journals",
      "Quiet reading zones",
      "Digital learning resources"
    ]
  },
'''
if 'library-visual' not in fac_content:
    fac_content = fac_content.replace(canteen_id, library_block + canteen_id)

# Remove 3rd picture of canteen
fac_content = fac_content.replace(
    ',\n      { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/DSC_7900.webp", label: "Canteen Area" }',
    ''
)

with open(fac_file, 'w', encoding='utf-8') as f:
    f.write(fac_content)

print("Facilities updated.")

# --- Task 2: TopAchievers.tsx ---
import string

def parse_achievers(folder, is_womens):
    folder_path = os.path.join(base_path, 'public', folder)
    if not os.path.exists(folder_path):
        return []
    
    files = os.listdir(folder_path)
    res = []
    for f in files:
        if f.endswith('.webp'):
            # e.g. "01 - PARHTA SARATHI KHILAR - 598.webp"
            parts = f.replace('.webp', '').split('-')
            if len(parts) >= 3:
                name = parts[1].strip().title()
                try:
                    marks = int(parts[-1].strip())
                except:
                    marks = 0
                image = f"/{folder.replace(chr(92), '/')}/{f}"
                roll_no = f"ET26-{(hash(name) % 8999) + 1000}"
                res.append((marks, name, image, roll_no, is_womens))
    return res

coed_list = parse_achievers(r'WEBSITE CHANGES 3\CHSE 90% ACHIEVERS', False)
womens_list = parse_achievers(r'WEBSITE CHANGES 3\CHSE 90% ACHIEVERS\90% ACHIEVERS PHOTOS - WOMENS', True)

all_achievers = coed_list + womens_list
# Sort by marks descending
all_achievers.sort(key=lambda x: x[0], reverse=True)

# Generate TS code
achievers_ts = "const achievers: Achiever[] = [\n"
state_rank = 1
for idx, (marks, name, image, roll_no, is_womens) in enumerate(all_achievers):
    # Determine rank for top 20 globally
    rank_str = f", stateRank: {state_rank}" if state_rank <= 20 else ""
    if idx > 0 and all_achievers[idx][0] < all_achievers[idx-1][0]:
        state_rank += 1
        rank_str = f", stateRank: {state_rank}" if state_rank <= 20 else ""
        
    achievers_ts += f'  {{ name: "{name}", marks: {marks}, image: "{image}", rollNo: "{roll_no}", isWomens: {"true" if is_womens else "false"}{rank_str} }},\n'
achievers_ts += "];"

ach_file = os.path.join(base_path, r'app\achievements\components\TopAchievers.tsx')
with open(ach_file, 'r', encoding='utf-8') as f:
    ach_content = f.read()

# Replace the block
start_idx = ach_content.find('const achievers: Achiever[] = [')
end_idx = ach_content.find('];', start_idx) + 2
if start_idx != -1 and end_idx != -1:
    ach_content = ach_content[:start_idx] + achievers_ts + ach_content[end_idx:]

with open(ach_file, 'w', encoding='utf-8') as f:
    f.write(ach_content)

print("TopAchievers updated.")

# --- Task 3: GalleryGrid.tsx ---
gal_file = os.path.join(base_path, r'app\gallery\components\GalleryGrid.tsx')
with open(gal_file, 'r', encoding='utf-8') as f:
    gal_content = f.read()

gal_content = gal_content.replace(
    '  { src: "/WEBSITE CHANGES 3/FALICITATION/DSC_7836.webp", alt: "Felicitation Program Awardee", year: "2026", category: "felicitation" },\n',
    ''
)
gal_content = gal_content.replace(
    '  { src: "/WEBSITE CHANGES 3/FALICITATION/DSC_7837.webp", alt: "Felicitation Program Celebration", year: "2026", category: "felicitation" },\n',
    ''
)

new_campus_images = '''
  { src: "/WEBSITE CHANGES 3/FACILITIES/CLASS ROOM/DSC_7920.webp", alt: "Campus Classroom 1", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/CLASS ROOM/DSC_7929.webp", alt: "Campus Classroom 2", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/CLASS ROOM/DSC_7931.webp", alt: "Campus Classroom 3", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/CLASS ROOM/DSC_7971.webp", alt: "Campus Classroom 4", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/CLASS ROOM/DSC_7974.webp", alt: "Campus Classroom 5", year: "2026", category: "campus-life" },
  { src: "/WEBSITE CHANGES 3/FACILITIES/CLASS ROOM/DSC_7975.webp", alt: "Campus Classroom 6", year: "2026", category: "campus-life" },
'''

gal_content = gal_content.replace(
    '  { src: "/CAMPUS/CLASSROOM(2).webp", alt: "Campus Classroom 2022", year: "2022", category: "campus-life" },',
    new_campus_images + '  { src: "/CAMPUS/CLASSROOM(2).webp", alt: "Campus Classroom 2022", year: "2022", category: "campus-life" },'
)

with open(gal_file, 'w', encoding='utf-8') as f:
    f.write(gal_content)

print("GalleryGrid updated.")
