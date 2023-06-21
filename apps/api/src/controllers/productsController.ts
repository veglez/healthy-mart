import { Request, Response } from "express";
import {
    getProductsService,
    getProductByIdService,
    createProductService,
    updateProductService,
    deleteProductService,
} from "../services/productService";

// GET /products
export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await getProductsService();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// GET /products/:id
export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const product = await getProductByIdService(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// POST /products
export const createProduct = async (req: Request, res: Response) => {
    const { name, category, price, image, description, score, reviews } = req.body;

    try {
        const newProduct = await createProductService({
            name,
            category,
            price,
            image,
            description,
            score,
            // reviews,
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// PUT /products/:id
export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, category, price, image, description, score, reviews } = req.body;

    try {
        const updatedProduct = await updateProductService(id, {
            name,
            category,
            price,
            image,
            description,
            score,
            // reviews,
        });
        if (!updatedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// DELETE /products/:id
export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedProduct = await deleteProductService(id);
        if (!deletedProduct) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
