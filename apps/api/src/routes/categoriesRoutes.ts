import express from "express";
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/categoriesController";

const router = express.Router();

// GET /categories
router.get("/", getCategories);

// GET /categories/:id
router.get("/:id", getCategoryById);

// POST /categories
router.post("/", createCategory);

// PUT /categories/:id
router.put("/:id", updateCategory);

// DELETE /categories/:id
router.delete("/:id", deleteCategory);

export default router;
