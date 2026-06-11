import os

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
fac_file = os.path.join(base_path, r'app\facilities\components\FacilitiesList.tsx')

with open(fac_file, 'r', encoding='utf-8') as f:
    fac_content = f.read()

old_features = '''    features: [
      "Vast collection of textbooks",
      "Reference materials & journals",
      "Quiet reading zones",
      "Digital learning resources"
    ]'''

new_bullet_points = '''    bulletPoints: [
      {
        title: "Vast Collection",
        desc: "Extensive selection of textbooks, reference materials, and competitive exam guides.",
        iconPath: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      },
      {
        title: "Quiet Reading Zones",
        desc: "Dedicated silent areas designed specifically for undisturbed self-study.",
        iconPath: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      },
      {
        title: "Digital Resources",
        desc: "Access to digital learning platforms, e-books, and research journals.",
        iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      }
    ]'''

if old_features in fac_content:
    fac_content = fac_content.replace(old_features, new_bullet_points)
    with open(fac_file, 'w', encoding='utf-8') as f:
        f.write(fac_content)
    print("Fixed library bullet points.")
else:
    print("Could not find the features array. Checking if bulletPoints already exists...")
    if 'bulletPoints:' in fac_content[fac_content.find('library-visual'):]:
        print("bulletPoints might already exist, but features wasn't found as exactly written.")
