import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createSweet,
  getSweets,
  searchSweets,
  updateSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet
} from "../controllers/sweetController.js";

const router = express.Router();

// Protected routes
router.post("/", protect, createSweet);
router.put("/:id", protect, updateSweet);
router.delete("/:id", protect, deleteSweet);
router.post("/purchase/:id", protect, purchaseSweet);
router.post("/restock/:id", protect, restockSweet);

// Public routes
router.get("/", getSweets);
router.get("/search", searchSweets);

export default router;
