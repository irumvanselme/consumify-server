import { Router } from "express"
import { LocationsController } from "../controllers/locations.controller";

const router = Router()
const controller = new LocationsController()

router.get("/", controller.get_all)
router.post("/", controller.create)

export const locations_routes = router