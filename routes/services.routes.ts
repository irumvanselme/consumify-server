import { Router } from "express"
import { ServiceController } from "../controllers/services.controller";

const router = Router()
const controller = new ServiceController()

router.get("/", controller.get_all)
router.get("/:id", controller.show)
router.post("/", controller.create)
router.put("/:id", controller.update)
router.delete("/:id", controller.delete)

export const service_routes = router