const fs = require("fs");

let directory = "../data/Tree";
let dirBuf = Buffer.from(directory);

let files = fs.readdirSync(directory, "utf-8");

for (i = 0; i < files.length; i++) {
  console.log(files[i]);
}
console.log(files);

//"../data/testData2.md"
