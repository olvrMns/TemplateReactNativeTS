import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";

export const router: Router = Router();

router.post("/login", AuthController.authenticate);
router.post("/signup", AuthController.signup);