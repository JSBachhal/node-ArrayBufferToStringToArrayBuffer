const fs = require('fs');

console.log(`Hello Node.js v${process.versions.node}!`);
readFile();
function saveToFile(arrayBuffer) {
  fs.writeFile(
    './btos.7z',
    Buffer.from(arrayBuffer.split(','), 'binary'),
    (err) => {
      if (err) {
        console.log('There was an error writing the image');
      } else {
        console.log('Written File :');
      }
    }
  );
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
