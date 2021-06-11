import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { authorizationMiddleware } from "../middlewares/authorization";


const router = Router();
const controller = new AuthController();

router.post("/login", controller.login);
router.post("/register", controller.register);
router.get("/profile", authorizationMiddleware, controller.profile)
router.post('/email-available/{email}', controller.email_available)
router.post('/username-available/{email}', controller.username_available)

export const auth_routes = router