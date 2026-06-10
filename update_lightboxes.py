import os
import re

files_to_update = [
    "app/gallery/components/GalleryGrid.tsx",
    "app/facilities/components/FacilitiesList.tsx",
    "app/events/page.tsx",
    "app/entrance/components/EntranceResults.tsx",
    "app/entrance/components/EntranceGallery.tsx",
    "app/entrance/components/EntranceBanners.tsx",
    "app/achievements/components/AchievementGallery.tsx",
    "app/achievements/components/CollegeHighlights.tsx"
]

def update_file(filepath):
    if not os.path.exists(filepath):
        print(f"File not found: {filepath}")
        return
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Add import statement
    if "UniversalLightbox" not in content:
        import_idx = content.find("import ")
        if import_idx != -1:
            # Determine path depth
            depth = filepath.count('/') - 1
            rel_path = "../" * depth if depth > 0 else "./"
            if filepath.startswith("app/components"):
                 rel_path = "./"
            elif depth == 2:
                 rel_path = "../../components/"
            elif depth == 1:
                 rel_path = "../components/"
            
            import_statement = f"import UniversalLightbox from \"{rel_path}UniversalLightbox\";\n"
            content = content[:import_idx] + import_statement + content[import_idx:]
            
    # 2. Replace Lightbox JSX
    # We will search for {/* ── LIGHTBOX MODAL ── */} or something similar
    
    # For simple replacements, it might be easier to use regex to find the modal div
    # But since they're varied, let's look for `<div className="fixed inset-0` or similar
    # and remove until `</div>`
    
    # This might be risky with regex if there are nested divs. 
    # Let's write specific replacements for the ones we know.

    print(f"Processing {filepath}")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for file in files_to_update:
    update_file(file)
