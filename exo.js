require('dotenv').config()

const express = require("express");

const app = express();

const port = process.env.SERVER_PORT;
server.listen(port);

app.get("/", (req, res) => {
  res.send(`I am ${process.env.MY_CITY}, wilder in ${process.env.MY_NAME}, and I love ${process.env.MY_LANGUAGE}`);
});




