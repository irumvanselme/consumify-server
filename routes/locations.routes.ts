import { Router } from "express"
import { LocationsController } from "../controllers/locations.controller";

const router = Router()
const controller = new LocationsController()

router.get("/", controller.get_all)
router.get("/:id", controller.show)
router.post("/", controller.create)
router.put("/:id", controller.update)

export const locations_routes = router