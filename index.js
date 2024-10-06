const express = require("express");
const app = express();
const port = 5000;

const connection = require('./db');
var cors = require('cors');
connection();

app.use(cors());

app.use(express.json());

app.use("/api",require("./routes/Data"));
app.listen(port,() => {
  console.log(`app listening at http://localhost:${port}`);
})