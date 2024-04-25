import express from "express";
import { addingUser, deletingUser, fetchUser, fetchUsers, updatingUser } from "../controller/userController.js";

const router = express.Router();

router.post("/api/users", addingUser);
router.get("/api/users", fetchUsers);
router.put("/api/users/:id", updatingUser);
router.delete("/api/users/:id", deletingUser);
router.get("/api/users/:id", fetchUser);

export default router;