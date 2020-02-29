const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded"
      });
    } else {
      //Use the name of the input field (i.e. "file") to retrieve the uploaded file
      const file = req.files.file;
      const topic = req.body.topic;

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      file.mv(`./data/${topic}/${file.name}`);

      //send response
      res.send({
        status: true,
        message: "File is uploaded"
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
