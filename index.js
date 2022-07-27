const fs = require('fs');

console.log(`Hello Node.js v${process.versions.node}!`);
// readFile();
readFilejson();
function saveToFile(array) {
  fs.writeFile('./data16.7z', Buffer.from(array, 'binary'), (err) => {
    if (err) {
      console.log('There was an error writing the image');
    } else {
      console.log('Written File :');
    }
  });
}

function readFile() {
  // const fs.readFileSync('./test.zip', null).buffer;
  fs.readFile('./test.7z', null, function (err, nb) {
    var ab = nb.buffer;
    console.log(ab); // all is well
    const buff = new Uint8Array(ab); // all is well
    console.log(buff.byteLength);
    saveToFile(buff.join(','));
  });
}

function readFilejson() {
  // const fs.readFileSync('./test.zip', null).buffer;
  const data = fs.readFileSync('./data (16).txt');
  const d = JSON.parse(data);
  let arr = [];
  for (let data of Object.keys(d)) {
    arr.push(data.split(','));
  }
  // console.log(arr);
  saveToFile(arr);
}
