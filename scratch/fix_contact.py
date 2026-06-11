import os

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'

cs_file = os.path.join(base_path, r'app\contact\components\ContactSection.tsx')
with open(cs_file, 'r', encoding='utf-8') as f:
    cs_content = f.read()

cs_content = cs_content.replace("Follow us on Facebook and YouTube", "Follow us on Facebook")

with open(cs_file, 'w', encoding='utf-8') as f:
    f.write(cs_content)

print("Fixed heading text.")
