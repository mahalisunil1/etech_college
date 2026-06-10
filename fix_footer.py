import re

with open('app/components/Footer.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(
    r'<a href="#"( className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">\s*<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3)',
    r'<a href="https://www.facebook.com/etech1etech" target="_blank" rel="noopener noreferrer"\1',
    content
)

content = re.sub(
    r'<a href="#"( className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300">\s*<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2\.163c)',
    r'<a href="https://www.instagram.com/etech_group_of_institutions?igsh=MW5yc2V2cG5wcG8xbQ==" target="_blank" rel="noopener noreferrer"\1',
    content
)

with open('app/components/Footer.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
