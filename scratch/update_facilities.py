import os

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
fl_file = os.path.join(base_path, r'app\facilities\components\FacilitiesList.tsx')

with open(fl_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add DSC_1196.webp to hostel images
old_hostel_images = '''    images: [
      { src: "/new/FACILITIES/HOSTEL/BOYS HOSTEL FRONT.webp", label: "Boys Hostel Front View" },
      { src: "/new/FACILITIES/HOSTEL/GIRLS HOSTEL 1.webp", label: "Girls Hostel Wing A" },
      { src: "/new/FACILITIES/HOSTEL/GIRLS HOSTEL 2.webp", label: "Girls Hostel Wing B" }
    ],'''

new_hostel_images = '''    images: [
      { src: "/new/FACILITIES/HOSTEL/DSC_1196.webp", label: "Boys Hostel Building" },
      { src: "/new/FACILITIES/HOSTEL/BOYS HOSTEL FRONT.webp", label: "Boys Hostel Front View" },
      { src: "/new/FACILITIES/HOSTEL/GIRLS HOSTEL 1.webp", label: "Girls Hostel Wing A" },
      { src: "/new/FACILITIES/HOSTEL/GIRLS HOSTEL 2.webp", label: "Girls Hostel Wing B" }
    ],'''

content = content.replace(old_hostel_images, new_hostel_images)

# 2. Update hostel-mess images
old_mess_images = '''    images: [
      { src: "/new/FACILITIES/HOSTEL/DSC_1196.webp", label: "Hostel Dining & Mess Area" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/DSC_7900.webp", label: "Hygienic Dining Facilities" }
    ],'''

new_mess_images = '''    images: [
      { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/BOYS CANTEEN.webp", label: "Boys Canteen" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/GIRLS CANTEEN.webp", label: "Girls Canteen" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/BOYS CONTEEN 2.webp", label: "Boys Canteen Dining Area" },
      { src: "/WEBSITE CHANGES 3/FACILITIES/CANTEEN/GIRLS CANTEEN 2.webp", label: "Girls Canteen Dining Area" }
    ],'''

content = content.replace(old_mess_images, new_mess_images)

with open(fl_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated Facilities images successfully.")
