import os
import json
import re

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
jee_2026_dir = os.path.join(base_path, r'public\WEBSITE CHANGES 3\ENTRANCE PAGE\ENTRANCE DATA\JEE\RESULT\2026')

# 1. Get all JEE 2026 images
images = [f"WEBSITE CHANGES 3/ENTRANCE PAGE/ENTRANCE DATA/JEE/RESULT/2026/{img}" for img in sorted(os.listdir(jee_2026_dir)) if img.endswith('.webp')]

data_file = os.path.join(base_path, r'app\entrance\components\EntranceResultsData.ts')
with open(data_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Insert "2026": [ ... ] into JEE
images_str = ',\n        '.join(f'"{img}"' for img in images)
jee_2026_str = f'"2026": [\n        {images_str}\n      ],\n      "2025": ['

content = content.replace('"2025": [', jee_2026_str, 1)

with open(data_file, 'w', encoding='utf-8') as f:
    f.write(content)

# 2. Update EntranceResults.tsx to include 2026
results_file = os.path.join(base_path, r'app\entrance\components\EntranceResults.tsx')
with open(results_file, 'r', encoding='utf-8') as f:
    results_content = f.read()

results_content = results_content.replace(
    'useState<"2025" | "2024" | "2023">("2025")',
    'useState<"2026" | "2025" | "2024" | "2023">("2026")'
)

results_content = results_content.replace(
    '{(["2025", "2024", "2023"] as const).map(year => (',
    '{(["2026", "2025", "2024", "2023"] as const).map(year => ('
)

# Also update the summary cards if we want? The user specifically said "Explore aur star achiever ❖ JEE 2026 DATA IS NOT THERE" so we'll just fix the gallery tabs.

with open(results_file, 'w', encoding='utf-8') as f:
    f.write(results_content)

print("Updated EntranceResultsData.ts and EntranceResults.tsx")
