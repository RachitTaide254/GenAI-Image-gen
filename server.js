const cors = require('cors');
const express = require('express');
const bodyParser = require("body-parser");
const apiRoute = require("./apiRoute")

const app = express();

const port = 3002

app.use(bodyParser.json());
app.use(cors());
app.use("/api",apiRoute)

app.listen(port, () => {
    console.log('Server is up on', port);
  });