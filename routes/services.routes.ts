import { Router } from "express"

import ServiceController from "../controllers/services.controller"

const router = Router()

router.get("/", ServiceController.get_all)
router.post("/", ServiceController.create)

export default router