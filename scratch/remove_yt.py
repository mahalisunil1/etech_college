import os
import re

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'

def remove_pattern(filepath, pattern):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = re.sub(pattern, '', content, flags=re.DOTALL)
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
    else:
        print(f"Pattern not found in {filepath}")

# 1. SocialDock.tsx
sd_file = os.path.join(base_path, r'app\components\SocialDock.tsx')
yt_sd = r'\s*\{\s*label:\s*"YouTube",\s*path:\s*<>[^<]*<rect[^>]*>[^<]*<path[^>]*>[^<]*</>,\s*href:\s*"https://youtube\.com"\s*\},'
remove_pattern(sd_file, yt_sd)

# 2. Header.tsx
hd_file = os.path.join(base_path, r'app\components\Header.tsx')
yt_hd = r'\s*<a href="https://youtube\.com"[^>]*aria-label="YouTube">\s*<svg[^>]*>.*?<\/svg>\s*<\/a>'
remove_pattern(hd_file, yt_hd)

# 3. Footer.tsx
ft_file = os.path.join(base_path, r'app\components\Footer.tsx')
# In Footer.tsx the YouTube icon was added maybe by some other script?
yt_ft = r'\s*<a href="https://youtube\.com"[^>]*>\s*<svg[^>]*>.*?<\/svg>\s*<\/a>'
remove_pattern(ft_file, yt_ft)

# 4. ContactSection.tsx
cs_file = os.path.join(base_path, r'app\contact\components\ContactSection.tsx')
yt_cs = r'\s*<a href="https://youtube\.com"[^>]*bg-red-50[^>]*>.*?<\/a>'
remove_pattern(cs_file, yt_cs)

print("Done removing YouTube.")
