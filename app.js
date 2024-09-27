import express from "express";

const app = express();
const port = 3000;

//ejs template engine

app.set("view engine", "ejs");

app.use(express.static("public")); // Static files

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about.html", (req, res) => {
  res.send("about");
});
app.get("/contact", (req, res) => {
  res.send("Contact Us");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
