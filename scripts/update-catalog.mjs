import {readFile,writeFile} from 'node:fs/promises';
import vm from 'node:vm';
const file=new URL('../data/catalog.js',import.meta.url);
const context={window:{}};vm.runInNewContext(await readFile(file,'utf8'),context);
const current=context.window.REPO_CATALOG;
const fetched=[];
for(let page=1;page<=20;page++){
  const response=await fetch(`https://api.github.com/users/${encodeURIComponent(current.owner)}/repos?per_page=100&sort=updated&page=${page}`,{headers:{'Accept':'application/vnd.github+json','User-Agent':'RaffaelePlus-catalog'}});
  if(!response.ok)throw new Error(`GitHub API: ${response.status}. Il catalogo esistente non è stato modificato.`);
  const items=await response.json();fetched.push(...items);if(items.length<100)break;
}
current.repositories=fetched.filter(r=>!r.private&&r.name!=='raffaele-plus').map(r=>{
  const old=current.repositories.find(item=>item.name===r.name);
  const defaults={title:r.name.replace(/[-_]/g,' '),subtitle:'OPEN SOURCE PROJECT',image:'cosmos',categories:r.language==='Python'?['ai']:['web'],kicker:'Da scoprire',description:r.description||`Esplora ${r.name} su GitHub.`};
  return {...defaults,...old,name:r.name,url:r.html_url,githubDescription:r.description,language:r.language||'Code',updated:r.updated_at,fork:r.fork};
});
current.generatedAt=new Date().toISOString().slice(0,10);
await writeFile(file,'window.REPO_CATALOG = '+JSON.stringify(current,null,2)+';\n');
console.log(`${current.repositories.length} repository aggiornate. Personalizza titoli, descrizioni, immagini e categorie in data/catalog.js.`);
