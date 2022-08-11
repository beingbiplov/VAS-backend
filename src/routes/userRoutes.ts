import { Router } from "express";

import AuthenticationRoutes from "./userAuthenticationRoutes";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";
import { logout } from "../controllers/authController";
import authenticate from "../middleware/authenticate";

const router = Router();

router.use("/auth", AuthenticationRoutes);

router.use(authenticate);

router.delete("/logout", logout);

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
