import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import router from "./routes/routes.js";
import photoRouter from "./routes/photoRoute.js";
dotenv.config();

conn(); // Call the function conn() from db.js

const app = express();
const port = process.env.PORT || 3000;

//ejs template engine

app.set("view engine", "ejs");

app.use(express.static("public")); // Static files
app.use(express.json());

// Routes
app.use("/", router);
app.use("/photos", photoRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
