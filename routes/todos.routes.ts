import { Router } from "express";
import { TodosController } from "../controllers/todos.controller";

const router = Router();
const controller = new TodosController();

router.get("/", controller.get_all);
router.post("/", controller.create);

export const todos_routes = router