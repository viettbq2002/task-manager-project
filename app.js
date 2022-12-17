const express = require("express");
const app = express();

const port = 3030;
app.get("/", (req, res) => {
  res.send("Test ");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`go to the app http://localhost:${port}`);
});
