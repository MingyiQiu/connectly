import express from "express";
import {} from "../controllers/comment.js";

const router = express.Router();

router.post("/", (req, res) => {
  res.send("Create comment");
});

export default router;
