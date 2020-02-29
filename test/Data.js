const fs = require("fs");
let directory = "../data";
let files = fs.readdirSync(directory, "utf-8");
const store = [];
for (i = 0; i < files.length; i++) {
  store.push(files[i]);
  console.log(files[i]);
}
console.log(store);
console.log(files);

//"../data/testData2.md"
