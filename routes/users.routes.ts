import { Router } from "express"
import { UsersController } from "../controllers/users.controller";

const router = Router()
const controller = new UsersController()

router.get("/", controller.get_all)

export const users_routes = router