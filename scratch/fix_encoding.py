import os
import re

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
ach_file = os.path.join(base_path, r'app\achievements\components\TopAchievers.tsx')

# 1. Update the TSX file
with open(ach_file, 'r', encoding='utf-8') as f:
    ach_content = f.read()

# I will replace "90% ACHIEVERS" with "90%25 ACHIEVERS" in the image paths.
# Wait, actually URL encoding is best done globally or just by changing the string.
# Let's replace "CHSE 90% ACHIEVERS" with "CHSE 90%25 ACHIEVERS"
# And "90% ACHIEVERS PHOTOS - WOMENS" with "90%25 ACHIEVERS PHOTOS - WOMENS"

new_ach_content = ach_content.replace('CHSE 90% ACHIEVERS', 'CHSE 90%25 ACHIEVERS')
new_ach_content = new_ach_content.replace('90% ACHIEVERS PHOTOS', '90%25 ACHIEVERS PHOTOS')

with open(ach_file, 'w', encoding='utf-8') as f:
    f.write(new_ach_content)

print("Fixed % encoding in TopAchievers.tsx")
