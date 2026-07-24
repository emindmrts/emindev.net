import fs from "fs";
const p = "public/admin/index.html";
const html = fs.readFileSync(p, "utf8");
const result = html
  .replace(/href="\/static\//g, 'href="/admin/static/')
  .replace(/src="\/static\//g, 'src="/admin/static/');
fs.writeFileSync(p, result);
