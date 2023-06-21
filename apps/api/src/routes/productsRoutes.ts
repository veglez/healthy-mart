import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
} from "../controllers/productsController";

const router = express.Router();

// GET /products
router.get("/", getProducts);

// GET /products/:id
router.get("/:id", getProductById);

// POST /products
router.post("/", createProduct);

// PUT /products/:id
router.put("/:id", updateProduct);

// DELETE /products/:id
router.delete("/:id", deleteProduct);

export default router;
