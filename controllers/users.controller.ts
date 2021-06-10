import { Request, Response } from "express"

import User from "../models/user.model"
import { Controller } from "./index";

class UsersController extends Controller {

    async get_all (req: Request, res: Response) {
        let todos = await User.all();
        res.send(todos)
    }
}

export { UsersController }