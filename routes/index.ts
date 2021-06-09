import { Router } from "express"

import todos_routes from "./todos.routes"
import services_routes from "./services.routes"

const router = Router();

router.use("/todos", todos_routes)
router.use("/services", services_routes)

export default router;