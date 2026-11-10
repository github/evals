import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root=fileURLToPath(new URL("../",import.meta.url));
const record=JSON.parse(await readFile(path.join(root,"distribution.json"),"utf8"));
const plugin=path.join(root,"packages","plugin");
async function files(dir,prefix=""){const result=[];for(const entry of await readdir(dir,{withFileTypes:true})){assert.ok(!entry.isSymbolicLink());const name=prefix?prefix+"/"+entry.name:entry.name;if(entry.isDirectory())result.push(...await files(path.join(dir,entry.name),name));else{assert.ok(entry.isFile());result.push(name);}}return result.sort();}
assert.deepEqual(await files(plugin),record.files.map(file=>file.path).sort());
for(const file of record.files){const bytes=await readFile(path.join(plugin,...file.path.split("/")));assert.equal(bytes.length,file.bytes,file.path);assert.equal(createHash("sha256").update(bytes).digest("hex"),file.sha256,file.path);}
assert.equal(JSON.parse(await readFile(path.join(plugin,"plugin.json"),"utf8")).version,record.version);
console.log("Verified "+record.files.length+" Plugin files for "+record.version+". No models or evals ran.");
