import os

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
nb_file = os.path.join(base_path, r'app\components\NoticeBoard.tsx')

with open(nb_file, 'r', encoding='utf-8') as f:
    nb_content = f.read()

# Replace the specific array
old_array = '''  const announcements = [
    { date: "New", text: "Admission open for CHSE 2026-27", tag: "Entrance" },
    { date: "Closed", text: "Summer course 2026 closed", tag: "Summer" },
    { date: "New", text: "Admission open for NEET 2026-27", tag: "Entrance" },
    { date: "New", text: "Admission open for CBSE", tag: "Entrance" },
    { date: "Alert", text: "We don’t have arts and commerce", tag: "Warning" },
  ];'''

new_array = '''  const announcements = [
    { date: "New", text: "Admission open for CHSE 2026-27", tag: "Entrance" },
    { date: "Closed", text: "Summer course 2026 closed", tag: "Summer" },
    { date: "New", text: "Admission open for NEET 2026-27", tag: "Entrance" },
    { date: "New", text: "Admission open for CBSE", tag: "Entrance" }
  ];'''

if old_array in nb_content:
    nb_content = nb_content.replace(old_array, new_array)
    with open(nb_file, 'w', encoding='utf-8') as f:
        f.write(nb_content)
    print("Successfully removed arts & commerce notice.")
else:
    print("Could not find the array to replace.")
