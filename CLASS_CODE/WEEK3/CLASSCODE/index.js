// const express = require("express");

import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Welcome to the server - GET");
});
app.post("/", (req, res) => {
  res.send("Welcome to the server - POST");
});
app.put("/", (req, res) => {
  res.send("Welcome to the server - PUT");
});
app.delete("/", (req, res) => {
  res.send("Welcome to the server - DELETE");
});

//
app.get("/watch", (req, res) => {
  console.log("URL CALL:");
  console.log(req.url);

  console.log("METHOD CALL:");
  console.log(req.method);

  console.log("HEADERS CALL:");
  console.log(req.headers);

  console.log("QUERY CALL:");
  console.log(req.query);

  console.log("PARAMS CALL:");
  console.log(req.params);

  console.log("BODY CALL:");
  console.log(req.body);
  res.send("Welcome to the watch list");
});
//

app.get("/item/:itemID", (req, res) => {
  console.log("QUERY CALL:");
  console.log(req.query);

  console.log("PARAMS CALL:");
  console.log(req.params);

  console.log("BODY CALL:");
  console.log(req.body);
  res.send("Welcome to the watch list");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
