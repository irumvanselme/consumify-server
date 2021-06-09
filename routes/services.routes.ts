import { Router } from "express"
import { ServiceController } from "../controllers/services.controller";

const router = Router()
const controller = new ServiceController()

router.get("/", controller.get_all)
router.post("/", controller.create)

export const service_routes = router