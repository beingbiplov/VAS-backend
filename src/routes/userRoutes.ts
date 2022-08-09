import { Router } from "express";

import AuthenticationRoutes from "./userAuthenticationRoutes";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.use("/auth", AuthenticationRoutes);

export default router;
