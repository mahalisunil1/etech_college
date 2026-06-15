import os

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
data_file = os.path.join(base_path, r'app\entrance\components\EntranceResultsData.ts')

with open(data_file, 'r', encoding='utf-8') as f:
    content = f.read()

old_neet_banners = '''    "NEET": [
      "WEBSITE CHANGES 3/ENTRANCE PAGE/ENTRANCE DATA/NEET/BANNERS/MEDICAL ADVT 2024.webp"
    ],'''

new_neet_banners = '''    "NEET": [
      "WEBSITE CHANGES 3/ENTRANCE PAGE/ENTRANCE DATA/NEET/BANNERS/NEET_2025_BANNER.png",
      "WEBSITE CHANGES 3/ENTRANCE PAGE/ENTRANCE DATA/NEET/BANNERS/MEDICAL ADVT 2024.webp"
    ],'''

new_content = content.replace(old_neet_banners, new_neet_banners)

with open(data_file, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Added NEET 2025 Banner to EntranceResultsData.ts")
