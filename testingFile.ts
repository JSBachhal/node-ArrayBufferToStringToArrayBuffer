import { appendFileSync } from 'fs';

console.log(`Hello Node.js v${process.versions.node}!`);

function saveToFile() {
  appendFileSync(outfile, Buffer.from(arrayBuffer));
}
