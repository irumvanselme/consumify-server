import { Request, Response } from "express"

import Service from "../models/service.model"
import { Controller } from ".";

class ServiceController extends Controller {

    async get_all (req: Request, res: Response) {
        let services = await Service.all();
        res.send(services)
    }

    async create (req: Request, res: Response) {
        let { valid, errors } = super.validate(req.body, Service.validations);
        if (!valid) return res.send(errors)
        let newTodo = await Service.create(req.body)
        res.send(newTodo);
    }
}

export { ServiceController }