import { Request, Response } from "express"

import Todo from "../models/todo.model"
import { Controller } from "./index";

class TodosController extends Controller {

    async get_all (req: Request, res: Response) {
        let todos = await Todo.all();

        res.send(todos)
    }

    async create (req: Request, res: Response) {
        let { valid, errors } = super.validate(req.body,Todo.validations);
        if(!valid) return res.status(400).send(errors)

        let newTodo = await Todo.create(req.body)

        res.send(newTodo);
    }
}

export default new TodosController();