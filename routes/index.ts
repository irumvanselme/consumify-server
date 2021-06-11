import { Router } from "express"

import { service_routes } from "./services.routes";
import { todos_routes } from "./todos.routes";
import { auth_routes } from "./auth.routes";
import { users_routes } from "./users.routes";
import { locations_routes } from "./locations.routes";

const router = Router();

router.use("/auth", auth_routes)
router.use("/todos", todos_routes)
router.use("/users", users_routes)
router.use("/services", service_routes)
router.use("/locations", locations_routes)

export default router;