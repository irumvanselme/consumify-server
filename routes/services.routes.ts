import { RequestHandler, Router } from "express"
import { ServiceController } from "../controllers/services.controller";
import { authorizationMiddleware } from "../middlewares/authorization";

const router = Router()
const controller = new ServiceController()

router.get("/", controller.get_all)
router.get("/:id", controller.show)
router.post("/", authorizationMiddleware as RequestHandler, controller.create as unknown as RequestHandler)
router.put("/:id", controller.update)
router.delete("/:id", controller.delete)

export const service_routes = router