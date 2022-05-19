const express = require("express");
const app = express();
const port = 1515;

app.get("/detail", (req, res) => {
  res.send("Haha");
});
// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
