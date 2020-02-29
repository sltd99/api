var express = require("express");
var router = express.Router();

router.post("/", function(request, response) {
  let fileName = request.body.user.fileName;
  let dirName = request.body.user.dirName;
  const qqq = `C:/Users/hlin3/Desktop/api/data/${dirName}/${fileName}`;
  console.log(dirName);
  console.log(fileName);
  response.download(qqq);
});

module.exports = router;
