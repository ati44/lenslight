import express from "express";
import { createPhoto, getPhotos, getPhoto } from "../controllers/photoController.js";

const router = express.Router();

router.post("/", (req, res) => {
  createPhoto(req, res);
});
router.get("/", (req, res) => {
  getPhotos(req, res);
});

router.get("/:id", (req, res) => {
  getPhoto(req, res);
});

export default router;
