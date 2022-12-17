const express = require("express");
const app = express();
const taskRouter = require("./routes/task");



// middleware
app.use(express.json());
const port = 3030;
app.get("/hello", (req, res) => {
  res.send("Test ");
});
// routes
app.use("/api/v1/tasks", taskRouter);
// lisen server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`go to the app http://localhost:${port}`);
});
