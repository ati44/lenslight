import express from "express";
import {
  getIndexPage,
  getAboutPage,
  getServicePage,
  getBlogPage,
  getContactPage,
  getProjectsPage,
} from "../controllers/controllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  getIndexPage(req, res);
});
router.get("/about", (req, res) => {
  getAboutPage(req, res);
});
router.get("/services", (req, res) => {
  getServicePage(req, res);
});
router.get("/blog", (req, res) => {
  getBlogPage(req, res);
});
router.get("/projects", (req, res) => {
  getProjectsPage(req, res);
});
router.get("/contact", (req, res) => {
  getContactPage(req, res);
});

export default router;
