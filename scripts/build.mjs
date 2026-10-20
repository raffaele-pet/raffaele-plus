import {mkdir,cp,copyFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url));
const dist=path.join(root,'dist');
await mkdir(dist,{recursive:true});
for(const name of ['index.html','styles.css','app.js','.nojekyll']) await copyFile(path.join(root,name),path.join(dist,name));
for(const name of ['assets','data']) await cp(path.join(root,name),path.join(dist,name),{recursive:true});
console.log('Sito statico pronto in dist/');
