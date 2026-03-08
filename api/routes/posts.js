import express from "express";
import {} from "../controllers/post.js";

const router = express.Router();

router.post("/", (req, res) => {
  res.send("Create posts");
});

export default router;
