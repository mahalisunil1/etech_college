import os
import glob

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'

# --- 1. Update EntranceResultsData.ts ---
data_file = os.path.join(base_path, r'app\entrance\components\EntranceResultsData.ts')

awards_dir = os.path.join(base_path, r'public\WEBSITE CHANGES 3\ENTRANCE PAGE\AWARDS & CEREMONEY')
award_images = []
for root, dirs, files in os.walk(awards_dir):
    for f in files:
        if f.endswith('.webp'):
            rel_path = os.path.relpath(os.path.join(root, f), os.path.join(base_path, 'public')).replace('\\', '/')
            award_images.append(f'"{rel_path}"')

neet_banner = '"WEBSITE CHANGES 3/ENTRANCE PAGE/ENTRANCE DATA/NEET/BANNERS/MEDICAL ADVT 2024.webp"'

with open(data_file, 'r', encoding='utf-8') as f:
    data_content = f.read()

# Replace empty AWARDS array
awards_str = ',\n      '.join(award_images)
data_content = data_content.replace('"AWARDS": []', f'"AWARDS": [\n      {awards_str}\n    ]')

# Replace empty NEET banners array
data_content = data_content.replace('"NEET": []', f'"NEET": [\n      {neet_banner}\n    ]')

with open(data_file, 'w', encoding='utf-8') as f:
    f.write(data_content)


# --- 2. Update EntranceGallery.tsx ---
gallery_file = os.path.join(base_path, r'app\entrance\components\EntranceGallery.tsx')
with open(gallery_file, 'r', encoding='utf-8') as f:
    gal_content = f.read()

# Replace study-exams items
old_study = '''    id: "study-exams",
    name: "Study & Exams",
    items: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/LAIBRARY/DSC_7957.webp", label: "Library & Study Zone", desc: "Quiet study zones designed for individual preparation and revision." },
      { src: "/WEBSITE CHANGES 3/FACILITIES/LAIBRARY/DSC_7960.webp", label: "Resource Center", desc: "Extensive collection of reference materials." },
      { src: "/WEBSITE CHANGES 3/ENTRANCE PAGE/EXAM/DSC_7896.webp", label: "State-of-the-Art Exam Hall", desc: "Spacious exam halls simulating national test environments." },
      { src: "/WEBSITE CHANGES 3/ENTRANCE PAGE/EXAM/DSC_7897.webp", label: "CBT Practice", desc: "Rigorous testing environments to build exam temperment." }
    ]'''

new_study = '''    id: "study-exams",
    name: "Study & Exams",
    items: [
      { src: "/WEBSITE CHANGES 3/ENTRANCE PAGE/STUDY ROOM.webp", label: "Dedicated Study Room", desc: "Focused study environment for continuous preparation." },
      { src: "/WEBSITE CHANGES 3/ENTRANCE PAGE/EXAM/DSC_7896.webp", label: "State-of-the-Art Exam Hall", desc: "Spacious exam halls simulating national test environments." },
      { src: "/WEBSITE CHANGES 3/ENTRANCE PAGE/EXAM/DSC_7897.webp", label: "CBT Practice", desc: "Rigorous testing environments to build exam temperment." }
    ]'''

if old_study in gal_content:
    gal_content = gal_content.replace(old_study, new_study)

# Remove banners
old_banners = ''',
  {
    id: "banners",
    name: "Banners & Events",
    items: [
      { src: "/new/Glorious Achievments/KEY HIGHLIGHTS ADVT. - 2026.webp", label: "Key Highlights Board Advertisement", desc: "2026 academic milestones and achievements banner." },
      { src: "/new/Glorious Achievments/15x6 - etech.webp", label: "State CHSE Board Rank Holders", desc: "Celebrating our toppers on regional boards." }
    ]
  }'''

if old_banners in gal_content:
    gal_content = gal_content.replace(old_banners, '')

with open(gallery_file, 'w', encoding='utf-8') as f:
    f.write(gal_content)

print("Update completed.")
