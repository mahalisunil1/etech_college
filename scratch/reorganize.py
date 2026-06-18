import os
import re
import glob
import shutil

base_dir = r"c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college"
public_images_dir = os.path.join(base_dir, "public", "images")
app_dir = os.path.join(base_dir, "app")

mapping = {}

def get_new_rel_path(rel_dir, filename):
    cleaned = filename
    if rel_dir == 'results':
        match = re.match(r'WEBSITE-CHANGES-\d+-ENTRANCE-PAGE-ENTRANCE-DATA-(JEE|NEET)-RESULT-(\d{4})-(.*)', cleaned, re.IGNORECASE)
        if match: return f"results/{match.group(1).lower()}/{match.group(2)}/{match.group(3)}"
        
        match = re.match(r'WEBSITE-CHANGES-\d+-CHSE-90%-ACHIEVERS-(.*)', cleaned, re.IGNORECASE)
        if match: return f"results/chse/{match.group(1)}"
        
        match = re.match(r'WEBSITE-CHANGES-\d+-ENTRANCE-PAGE-AWARDS-&-CEREMONEY-(\d{4})-MEDICAL-(.*)', cleaned, re.IGNORECASE)
        if match: return f"results/awards/{match.group(1)}/{match.group(2)}"
        
        match = re.match(r'RESULT-(\d{4})-E-TECH-(.*)', cleaned, re.IGNORECASE)
        if match: return f"results/etech/{match.group(1)}/{match.group(2)}"
        
        match = re.match(r'RESULT-(\d{4})-90%-ACHIEVERS-PHOTOS-(.*)', cleaned, re.IGNORECASE)
        if match: return f"results/achievers/{match.group(1)}/{match.group(2)}"

        match = re.match(r'WEBSITE-CHANGES-\d+-ENTRANCE-PAGE-EXAM-(.*)', cleaned, re.IGNORECASE)
        if match: return f"results/exam/{match.group(1)}"

        match = re.match(r'WEBSITE-CHANGES-\d+-ENTRANCE-PAGE-(.*)', cleaned, re.IGNORECASE)
        if match: return f"results/misc/{match.group(1)}"
        
    if rel_dir == 'campus':
        match = re.match(r'(?:WEBSITE-CHANGES-\d+-|new-)FACILITIES-(.*)', cleaned, re.IGNORECASE)
        if match: return f"campus/facilities/{match.group(1).lower()}"
        
    match = re.match(r'(?:WEBSITE-CHANGES-\d+-|new-)(.*)', cleaned, re.IGNORECASE)
    if match:
        return f"{rel_dir}/{match.group(1).lower()}"
        
    return f"{rel_dir}/{filename}"

# 1. Build mapping
for root, _, files in os.walk(public_images_dir):
    for f in files:
        if f.startswith('WEBSITE-CHANGES-3-') or f.startswith('new-') or f.startswith('RESULT-'):
            abs_path = os.path.join(root, f)
            rel_path = os.path.relpath(abs_path, public_images_dir).replace('\\', '/')
            
            parts = rel_path.split('/')
            if len(parts) > 1:
                rel_dir = parts[0]
                filename = parts[-1]
            else:
                rel_dir = ""
                filename = parts[0]
                
            new_rel_path = get_new_rel_path(rel_dir, filename)
            
            if new_rel_path != rel_path:
                old_full_rel = f"images/{rel_path}"
                new_full_rel = f"images/{new_rel_path}"
                mapping[old_full_rel] = new_full_rel

print(f"Found {len(mapping)} files to rename.")

# 2. Rename files
for old_full_rel, new_full_rel in mapping.items():
    old_abs = os.path.join(base_dir, "public", *old_full_rel.split('/'))
    new_abs = os.path.join(base_dir, "public", *new_full_rel.split('/'))
    
    os.makedirs(os.path.dirname(new_abs), exist_ok=True)
    if os.path.exists(old_abs):
        shutil.move(old_abs, new_abs)
    else:
        print(f"Warning: {old_abs} not found!")

# 3. Update files in app/
files_to_check = glob.glob(os.path.join(app_dir, "**", "*.ts"), recursive=True) + \
                 glob.glob(os.path.join(app_dir, "**", "*.tsx"), recursive=True)

modified_files = 0
for filepath in files_to_check:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    new_content = content
    changed = False
    
    for old_path, new_path in mapping.items():
        if old_path in new_content:
            new_content = new_content.replace(old_path, new_path)
            changed = True
            
    if changed:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        modified_files += 1

print(f"Updated {modified_files} files in the codebase.")
