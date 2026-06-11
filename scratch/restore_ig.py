import os

base_path = r'c:\Users\LENOVO\Downloads\e_tech_college\e_tech_college'
ig_link = "https://www.instagram.com/etech_group_of_institutions?igsh=MW5yc2V2cG5wcG8xbQ=="
ig_path = '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>'

# 1. Header.tsx
hd_file = os.path.join(base_path, r'app\components\Header.tsx')
with open(hd_file, 'r', encoding='utf-8') as f:
    hd_content = f.read()

fb_hd_str = '''<a href="https://www.facebook.com/etech1etech" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>'''
ig_hd_str = f'''
            <a href="{ig_link}" target="_blank" rel="noopener noreferrer" className="hover:text-rose-400 transition-colors" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">{ig_path}</svg>
            </a>'''
if "aria-label=\"Instagram\"" not in hd_content:
    hd_content = hd_content.replace(fb_hd_str, fb_hd_str + ig_hd_str)
    with open(hd_file, 'w', encoding='utf-8') as f: f.write(hd_content)

# 2. SocialDock.tsx
sd_file = os.path.join(base_path, r'app\components\SocialDock.tsx')
with open(sd_file, 'r', encoding='utf-8') as f:
    sd_content = f.read()

fb_sd_str = '''    {
      label: "Facebook",
      path: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
      href: "https://www.facebook.com/etech1etech"
    },'''
ig_sd_str = f'''
    {{
      label: "Instagram",
      path: <>{ig_path}</>,
      href: "{ig_link}"
    }},'''
if 'label: "Instagram"' not in sd_content:
    sd_content = sd_content.replace(fb_sd_str, fb_sd_str + ig_sd_str)
    with open(sd_file, 'w', encoding='utf-8') as f: f.write(sd_content)

# 3. Footer.tsx
ft_file = os.path.join(base_path, r'app\components\Footer.tsx')
with open(ft_file, 'r', encoding='utf-8') as f:
    ft_content = f.read()

fb_ft_str = '''<a href="https://www.facebook.com/etech1etech" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>'''
ig_ft_str = f'''
              <a href="{ig_link}" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-rose-600 hover:text-white transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">{ig_path}</svg>
              </a>'''
if 'hover:bg-rose-600' not in ft_content:
    ft_content = ft_content.replace(fb_ft_str, fb_ft_str + ig_ft_str)
    with open(ft_file, 'w', encoding='utf-8') as f: f.write(ft_content)

# 4. ContactSection.tsx
cs_file = os.path.join(base_path, r'app\contact\components\ContactSection.tsx')
with open(cs_file, 'r', encoding='utf-8') as f:
    cs_content = f.read()

fb_cs_str = '''<a href="https://www.facebook.com/etech1etech" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white shadow-sm border border-blue-100 transition-all duration-300 group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>'''
ig_cs_str = f'''
                <a href="{ig_link}" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white shadow-sm border border-rose-100 transition-all duration-300 group">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    {ig_path}
                  </svg>
                </a>'''
if 'hover:bg-rose-600' not in cs_content:
    cs_content = cs_content.replace(fb_cs_str, fb_cs_str + ig_cs_str)
    cs_content = cs_content.replace("Follow us on Facebook", "Follow us on Facebook and Instagram")
    with open(cs_file, 'w', encoding='utf-8') as f: f.write(cs_content)

print("Restored Instagram successfully")
