import os

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'

# 1. Update EntranceResults.tsx default tab to JEE
entrance_file = os.path.join(base_path, r'app\entrance\components\EntranceResults.tsx')
with open(entrance_file, 'r', encoding='utf-8') as f:
    ent_content = f.read()

ent_content = ent_content.replace(
    'useState<"NEET" | "JEE">("NEET")',
    'useState<"NEET" | "JEE">("JEE")'
)

with open(entrance_file, 'w', encoding='utf-8') as f:
    f.write(ent_content)

# 2. Update FacilitiesList.tsx with BOARD.webp
fac_file = os.path.join(base_path, r'app\facilities\components\FacilitiesList.tsx')
with open(fac_file, 'r', encoding='utf-8') as f:
    fac_content = f.read()

# Replace the first image of smart classrooms with BOARD.webp
fac_content = fac_content.replace(
    '{ src: "/WEBSITE CHANGES 3/FACILITIES/SMART CLASS ROOM/DSC_7919.webp", label: "Smart Classroom View 1" }',
    '{ src: "/WEBSITE CHANGES 3/FACILITIES/BOARD.webp", label: "Digital Smart Board" }'
)

with open(fac_file, 'w', encoding='utf-8') as f:
    f.write(fac_content)

print("Updated EntranceResults.tsx and FacilitiesList.tsx successfully")
