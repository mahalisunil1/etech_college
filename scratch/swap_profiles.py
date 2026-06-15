import os
import re

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
lp_file = os.path.join(base_path, r'app\leadership\components\LeadershipProfiles.tsx')

with open(lp_file, 'r', encoding='utf-8') as f:
    content = f.read()

# I will find PROFILE 3 block and PROFILE 4 block.
# Since PROFILE 3 and 4 are at the end, let's extract using regex or split.

parts = re.split(r'(\s*\{\/\*\s*──\s*DIVIDER\s*──\s*\*\/}\s*<div[^>]+>\s*<\/\w*div>\s*\{\/\*\s*──\s*PROFILE 4: WOMEN\'S COLLEGE PRINCIPAL\s*──\s*\*\/}\s*)', content)
# wait, the divider might not close with </divdiv>, it closes with " />"
# Let's use a safer regex.

# We want to match Profile 3 up to the divider before Profile 4.
pattern_3 = r'(\s*\{\/\*\s*──\s*PROFILE 3: VICE PRINCIPAL\s*──\s*\*\/}.*?)(\s*\{\/\*\s*──\s*DIVIDER\s*──\s*\*\/}\s*<div[^>]+/>\s*)(\{\/\*\s*──\s*PROFILE 4: WOMEN\'S COLLEGE PRINCIPAL\s*──\s*\*\/}.*?)(\s*</section>)'

match = re.search(pattern_3, content, re.DOTALL)
if match:
    p3 = match.group(1)
    div = match.group(2)
    p4 = match.group(3)
    end = match.group(4)
    
    # We want to insert them as P4, Divider, P3
    # Wait, the comment says "PROFILE 3" and "PROFILE 4". Let's change those comments too so it stays logical if they look at code.
    # Actually, keep them as is or swap the comments. Let's just swap the whole chunks.
    # The new order:
    # {p4}
    # {div}
    # {p3}
    # {end}
    
    # We should rename the comments inside the chunks if we want them to be strictly numbered correctly.
    p4_renamed = p4.replace('PROFILE 4', 'PROFILE 3')
    p3_renamed = p3.replace('PROFILE 3', 'PROFILE 4')
    
    new_chunk = p4_renamed + div + p3_renamed + end
    
    new_content = content[:match.start()] + new_chunk + content[match.end():]
    
    with open(lp_file, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Swapped Principal of Women's College and Vice Principal.")
else:
    print("Could not find the profiles to swap.")
