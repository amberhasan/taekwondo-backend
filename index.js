const express = require("express");
// import express from 'express';
const app = express();
const port = 3000;

// http://127.0.0.1:3000/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/amber", (req, res) => {
  res.send("Hello Amber!");
});

// get
// post
// put
// patch
// delete

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
