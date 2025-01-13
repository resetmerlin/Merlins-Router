import express from "express";

const app = express();

app.get("/*", (req, res) => {
  res.sendFile("./index.html");
});

app.listen(5050, () => {
  console.log("Server running..");
});
