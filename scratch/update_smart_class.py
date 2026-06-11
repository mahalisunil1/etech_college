import os
import re

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
fac_file = os.path.join(base_path, r'app\facilities\components\FacilitiesList.tsx')

with open(fac_file, 'r', encoding='utf-8') as f:
    fac_content = f.read()

# Locate the smart-classrooms-visual facility block
old_block = '''    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/BOARD.webp", label: "Digital Smart Board" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7924.webp", label: "Smart Classroom View 2" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7928.webp", label: "Smart Classroom View 3" }
    ],'''

new_block = '''    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7919.webp", label: "Digital Classroom 1" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7924.webp", label: "Digital Classroom 2" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7925.webp", label: "Digital Classroom 3" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7928.webp", label: "Digital Classroom 4" }
    ],'''

if old_block in fac_content:
    fac_content = fac_content.replace(old_block, new_block)
    with open(fac_file, 'w', encoding='utf-8') as f:
        f.write(fac_content)
    print("Updated images successfully.")
else:
    print("Could not find the block to replace. Here is the context:")
    idx = fac_content.find('smart-classrooms-visual')
    if idx != -1:
        print(fac_content[idx:idx+1000])
    else:
        print("smart-classrooms-visual not found at all!")
