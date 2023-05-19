const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ msg: "App is working perfectly" });
});

app.listen(3003, () => {
  console.log("Server is running at: http://localhost:3003");
});
