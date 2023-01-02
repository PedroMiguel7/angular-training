const express = require("express");
const cors = require("cors");
const multiparty = require("connect-multiparty");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const multipartMiddleware = multiparty({ uploadDir: "./upload" });

app.post("/upload", multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
});

app.use((err, req, res, next) => res.json({ error: err.message }));

app.listen(8000);
