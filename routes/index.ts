import { Router } from "express"

import { service_routes } from "./services.routes";
import { todos_routes } from "./todos.routes";
import { auth_routes } from "./auth.routes";

const router = Router();

router.use("/auth", auth_routes)
router.use("/todos", todos_routes)
router.use("/services", service_routes)

export default router;