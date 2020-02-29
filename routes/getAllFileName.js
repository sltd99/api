var express = require("express");
var router = express.Router();
var fs = require("fs");

router.post("/", function(request, response) {
  let directory = "C:/Users/hlin3/Desktop/api/data/";
  let files = fs.readdirSync(directory, "utf-8");
  let obj = {};
  files.map(dir => {
    if (dir[0] !== ".") {
      let subdir = directory + dir;
      obj[dir] = fs.readdirSync(subdir).map(file => `/${file}`);
    }
  });
  response.send(obj);
});

module.exports = router;
