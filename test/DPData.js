const fs = require("fs");

let directory = "/Users/l_lu0807/Downloads/api/data/";
let files = fs.readdirSync(directory, "utf-8");
let obj = {};
files.map(dir => {
  if (dir[0] !== ".") {
    let subdir = directory + dir;
    obj[dir] = fs.readdirSync(subdir).map(file => `/${file}`);
  }
});

console.log(obj);
// get all file name without ext
// console.log(
//   arr.map(file => {
//     return file.substring(file.lastIndexOf("/") + 1, file.lastIndexOf("."));
//   })
// );

// console.log(arr);

// console.log(JSON.stringify(arr));
// for (i = 0; i < files.length; i++) {
//   var file = directory + "/" + files[i];
// }
