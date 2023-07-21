import { Request, Response } from "express";
import {
    getCategoriesService,
    getCategoryByIdService,
    createCategoryService,
    updateCategoryService,
    deleteCategoryService,
} from "../services/categoryService";

// GET /categories
export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await getCategoriesService();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// GET /categories/:id
export const getCategoryById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const category = await getCategoryByIdService(id);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// POST /categories
export const createCategory = async (req: Request, res: Response) => {
    const { name, image } = req.body
    const category = { name, image }
    try {
        const newCategory = await createCategoryService(category);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// PUT /categories/:id
export const updateCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, image } = req.body
    const category = { name, image }
    try {
        const updatedCategory = await updateCategoryService(id, category);
        if (!updatedCategory) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

// DELETE /categories/:id
export const deleteCategory = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedCategory = await deleteCategoryService(id);
        if (!deletedCategory) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};
