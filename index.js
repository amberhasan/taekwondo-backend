const express = require("express");
// import express from 'express';
const app = express();
app.use(express.json()); //this tells the app to use JSON to pass the body during requests like POST
const port = 3000;

const users = [
  {
    id: 1,
    firstName: "Safdar",
    lastName: "Sikander",
  },
];

// http://127.0.0.1:3000/
app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.get("/users", (request, response) => {
  response.send(users);
});

app.post("/users", (request, response) => {
  console.log("request.body", request.body);
  if (!request.body.firstName || !request.body.lastName) {
    return response.status(400).json({
      message: "First Name and Last name is required",
      statusCode: "400",
    });
  }
  const user = {
    id: users.length + 1,
    firstName: request.body.firstName,
    lastName: request.body.lastName,
  };
  users.push(user);
  response.status(201).json(user);
});

app.get("/users/:id", (request, response) => {
  const id = request.params.id;
  console.log("id", id);
  response.send(id);
});

// get
// post
// put
// patch
// delete

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
