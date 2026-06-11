import os

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
data_file = os.path.join(base_path, r'app\entrance\components\EntranceResultsData.ts')

with open(data_file, 'r', encoding='utf-8') as f:
    data_content = f.read()

old_neet = '''    "NEET": {
      "2023": ['''

new_neet = '''    "NEET": {
      "2026": [],
      "2023": ['''

if old_neet in data_content:
    data_content = data_content.replace(old_neet, new_neet)
    with open(data_file, 'w', encoding='utf-8') as f:
        f.write(data_content)
    print("Fixed EntranceResultsData.ts")
else:
    print("Could not find the NEET block to update.")
