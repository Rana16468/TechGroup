const express = require("express");
const app = express();
const port = 3026;

const cors = require("cors");
const router = require("./src/routes/routes");

// midddle were
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/create", (req, res) => {
  console.log(req.body);
});

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
