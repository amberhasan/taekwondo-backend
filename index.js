const express = require("express");
// import express from 'express';
const app = express();
app.use(express.json()); //this tells the app to use JSON to pass the body during requests like POST
const port = 3000;

const users = [
  {
    id: 1,
    name: "Safdar",
    lastName: "Sikander",
  },
];

// http://127.0.0.1:3000/
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("req.body", req.body);
});

// get
// post
// put
// patch
// delete

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
