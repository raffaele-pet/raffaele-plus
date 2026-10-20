import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=fileURLToPath(new URL('../',import.meta.url));
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.jpg':'image/jpeg','.svg':'image/svg+xml'};
const port=Number(process.env.PORT||4173);
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const decoded=decodeURIComponent(url.pathname);const target=path.resolve(root,'.'+decoded+(decoded.endsWith('/')?'index.html':''));if(!target.startsWith(root)){res.writeHead(403).end();return}if(!(await stat(target)).isFile())throw new Error('not a file');const data=await readFile(target);res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-store'});res.end(data)}catch{res.writeHead(404,{'Content-Type':'text/plain'}).end('Not found')}}).listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
