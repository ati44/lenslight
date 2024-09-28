import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";

dotenv.config();

conn(); // Call the function conn() from db.js

const app = express();
const port = process.env.PORT || 3000;

//ejs template engine

app.set("view engine", "ejs");

app.use(express.static("public")); // Static files

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about.html", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.send("Contact Us");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
