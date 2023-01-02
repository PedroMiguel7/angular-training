const express = require("express");
const cors = require("cors");
const multiparty = require("connect-multiparty");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const multipartMiddleware = multiparty({ uploadDir: "./uploads" });

app.post("/upload", multipartMiddleware, (req, res) => {
  const files = req.files;
  console.log(files);
  res.json({ message: files });
});

app.get("/downloadExcel", (req, res) => {
  var file = __dirname + "./uploads/report2.xlsx";
  res.download(file);
});

app.get("/downloadPDF", (req, res) => {
  var file = __dirname + "./uploads/report2.pdf";
  res.download(file);
});

app.use((err, req, res, next) => res.json({ error: err?.message }));

app.listen(8000);
