const express = require("express");
const { menu } = require("./mock-data");
// import express from 'express';
const app = express();
app.use(express.json()); //this tells the app to use JSON to pass the body during requests like POST
const port = 3000;

app.get("/menu", (request, response) => {
  response.json(menu);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
