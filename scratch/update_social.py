import os
import re

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
fb_link = "https://www.facebook.com/etech1etech"
ig_link = "https://www.instagram.com/etech_group_of_institutions?igsh=MW5yc2V2cG5wcG8xbQ=="

ig_path = '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>'

# --- 1. SocialDock.tsx ---
sd_file = os.path.join(base_path, r'app\components\SocialDock.tsx')
with open(sd_file, 'r', encoding='utf-8') as f:
    sd_content = f.read()

old_yt = '''    {
      label: "YouTube",
      path: <><rect x="2" y="5" width="20" height="14" rx="4" /><path d="M10 9l5 3-5 3V9z" /></>,
      href: "#"
    },'''
new_ig = f'''    {{
      label: "Instagram",
      path: <>{ig_path}</>,
      href: "{ig_link}"
    }},'''
sd_content = sd_content.replace(old_yt, new_ig)

old_fb = '''    {
      label: "Facebook",
      path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
      href: "#"
    },'''
new_fb = f'''    {{
      label: "Facebook",
      path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
      href: "{fb_link}"
    }},'''
sd_content = sd_content.replace(old_fb, new_fb)

with open(sd_file, 'w', encoding='utf-8') as f:
    f.write(sd_content)

# --- 2. Header.tsx ---
hd_file = os.path.join(base_path, r'app\components\Header.tsx')
with open(hd_file, 'r', encoding='utf-8') as f:
    hd_content = f.read()

hd_content = hd_content.replace(
    '<a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook">',
    f'<a href="{fb_link}" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Facebook">'
)

old_yt_header = '''<a href="#" className="hover:text-red-400 transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>'''
new_ig_header = f'''<a href="{ig_link}" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{ig_path}</svg>
            </a>'''
hd_content = hd_content.replace(old_yt_header, new_ig_header)

with open(hd_file, 'w', encoding='utf-8') as f:
    f.write(hd_content)

# --- 3. ContactSection.tsx ---
cs_file = os.path.join(base_path, r'app\contact\components\ContactSection.tsx')
with open(cs_file, 'r', encoding='utf-8') as f:
    cs_content = f.read()

# Fix mobile numbers rendering
old_mobile = '''                    ) : item.title === "Mobile" ? (
                      <div className="text-slate-600 text-sm leading-relaxed font-semibold flex flex-wrap gap-x-2 gap-y-1">
                        {item.desc.split(", ").map((num, i) => (
                          <span key={i} className="inline-flex items-center">
                            <a href={`tel:${num.replace(/\s+/g, "")}`} className="hover:text-blue-600 hover:underline break-normal">
                              {num}
                            </a>
                            {i < item.desc.split(", ").length - 1 && <span className="text-slate-300 ml-2">|</span>}
                          </span>
                        ))}
                      </div>'''

new_mobile = '''                    ) : item.title === "Mobile" ? (
                      <div className="text-slate-600 text-sm leading-relaxed font-semibold">
                        {item.desc}
                      </div>'''
cs_content = cs_content.replace(old_mobile, new_mobile)

# Fix heading text from youtube to just facebook and instagram
cs_content = cs_content.replace("Follow us on facebook, Instagram, youtube", "Follow us on Facebook and Instagram")

# Remove youtube link block
old_yt_contact = '''                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-600 hover:bg-red-600 hover:text-white shadow-sm border border-red-100 transition-all duration-300 group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163c-.272-1.022-1.074-1.826-2.094-2.098C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.404.565C1.576 4.337.774 5.141.502 6.163.003 8.01 0 12 0 12s.003 3.99.502 5.837c.272 1.022 1.074 1.826 2.094 2.098C4.442 20.5 12 20.5 12 20.5s7.558 0 9.404-.565c1.02-.272 1.822-1.076 2.094-2.098.5-1.847.502-5.837.502-5.837s-.002-3.99-.502-5.837zm-14.183 9.478V8.358l6.284 3.642-6.284 3.641z" />
                  </svg>
                </a>'''
cs_content = cs_content.replace(old_yt_contact, "")

with open(cs_file, 'w', encoding='utf-8') as f:
    f.write(cs_content)

print("Social links updated everywhere.")
