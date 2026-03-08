import express from "express";
import {} from "../controllers/like.js";

const router = express.Router();

router.post("/", (req, res) => {
  res.send("Create likes");
});

export default router;
