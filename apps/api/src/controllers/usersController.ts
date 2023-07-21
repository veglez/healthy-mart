import { Request, Response } from "express";
import {
  getUsersService,
  getUserByIdService,
  createUserService,
  updateUserService,
  deleteUserService,
} from "../services/userService";

// GET /users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// GET /users/:id
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const user = await getUserByIdService(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// POST /users
export const createUser = async (req: Request, res: Response) => {
  const { name, lastName, email, password, phone } = req.body
  const user = { name, lastName, email, password, phone }
  try {
    const newUser = await createUserService(user);
    console.log("Creando usuario...")
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// PUT /users/:id
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, lastName, email, password, phone } = req.body
  const user = { name, lastName, email, password, phone }

  try {
    const updatedUser = await updateUserService(id, user);
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// DELETE /users/:id
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const deletedUser = await deleteUserService(id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
