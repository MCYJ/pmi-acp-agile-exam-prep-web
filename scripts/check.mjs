import {access,readFile,readdir} from "node:fs/promises";
import {dirname,join,resolve} from "node:path";
import {fileURLToPath} from "node:url";
const root=join(dirname(fileURLToPath(import.meta.url)),".."),out=join(root,"dist"),files=[],fail=[];
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const p=join(dir,e.name);if(e.isDirectory())await walk(p);else if(e.name.endsWith(".html"))files.push(p)}}
await walk(out);
for(const file of files){const html=await readFile(file,"utf8");for(const required of ["<title>",'name="description"','rel="canonical"','lang="','id="main"'])if(!html.includes(required))fail.push(`${file}: missing ${required}`);for(const m of html.matchAll(/(?:src|href)="(\/pmi-acp-agile-exam-prep-web\/[^"?#]+)"/g)){const rel=m[1].replace("/pmi-acp-agile-exam-prep-web/","");if(/^(en|ko|assets)\//.test(rel)){let target=resolve(out,rel);if(!target.includes("."))target=join(target,"index.html");try{await access(target)}catch{fail.push(`${file}: broken ${m[1]}`)}}}}
for(const p of ["index.html","404.html","sitemap.xml","robots.txt",".nojekyll","en/index.html","ko/index.html"])try{await access(join(out,p))}catch{fail.push(`missing ${p}`)}
if(files.length!==38)fail.push(`expected 38 HTML, found ${files.length}`);
const combined=(await Promise.all(files.map(f=>readFile(f,"utf8")))).join("\n");
for(const required of ["app.mcyj.examprep.glb0003","id6795570504","120 questions · 180 min","Psychometric standard","Mindset · 28%","Leadership · 25%","Product · 19%","Delivery · 28%","Not affiliated with, sponsored by or endorsed by Project Management Institute"])if(!combined.includes(required))fail.push(`missing ${required}`);
for(const forbidden of ["app.mcyj.examprep.glb0006","S Food Protection Manager","2026 FDA Food Code","90 questions · 120 min","70% · 56 of 80","Q-Net","Coming soon"])if(combined.includes(forbidden))fail.push(`stale content found: ${forbidden}`);
const css=await readFile(join(out,"assets","styles.css"),"utf8");
if(!css.includes("word-break:keep-all"))fail.push("keep-all rule missing");
if(!css.includes("store-badge-frame-sync"))fail.push("Store badge frame rule missing");
if(!css.includes("width:194px")||!css.includes("height:75px"))fail.push("194x75 Store frame missing");
if(fail.length){console.error(fail.join("\n"));process.exit(1)}
console.log(`Checked ${files.length} HTML files; metadata, links, page count, official facts, Store identities, keep-all and equal badge frames passed.`);
