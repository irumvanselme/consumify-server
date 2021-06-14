import { NextFunction, Request, Response } from "express"

import Service from "../models/service.model"
import { Controller } from ".";
import { formatRes } from "../utils/response";
import { RequestWithUser } from "../interfaces/RequestWithUser";

class ServiceController extends Controller {

    async get_all (req: Request, res: Response) {
        try {
            let services = await Service.all();
            res.send(services)
        } catch ( e ) {
            return res.status(500).send(formatRes(0, "Failed to show all services", e))
        }
    }

    async show (req: Request, res: Response) {
        try {
            let service = await Service.query.findById(req.params.id);
            if (!service) return res.status(404).send(formatRes(0, "Service Not found", null))

            return res.send(service);
        } catch ( e ) {
            return res.status(500).send(formatRes(0, "Failed to show the service with this id", e))
        }
    }

    async create (req: RequestWithUser, res: Response, next: NextFunction) {
        try {
            return res.send(req.user)
            // let { valid, errors } = super.validate(req.body, Service.validations);
            // if (!valid) return res.send(errors)
            //
            // let newTodo = await Service.create(req.body)
            // return res.send(newTodo);
        } catch ( e ) {
            return res.status(500).send(formatRes(0, "Failed to show the service with this id", e))
        }
    }

    async update (req: Request, res: Response) {
        try {
            let { valid, errors } = super.validate(req.body, Service.validations);
            if (!valid) return res.send(errors)

            let service = await Service.query.findById(req.params.id);
            if (!service) return res.status(404).send(formatRes(0, "Service Not found", null))

            let deletedService = await Service.query.findByIdAndUpdate(req.params.id, req.body, { new: true })

            return res.send(deletedService);
        } catch ( e ) {
            return res.status(500).send(formatRes(0, "Failed to Update a service", e))
        }
    }

    async delete (req: Request, res: Response) {
        try {
            let service = await Service.query.findById(req.params.id);
            if (!service) return res.status(404).send(formatRes(0, "Service Not found", null))

            let deletedService = await Service.query.findByIdAndDelete(req.params.id)

            return res.send(deletedService);
        } catch ( e ) {
            return res.status(500).send(formatRes(0, "Failed to delete a service", e))
        }
    }
}

export { ServiceController }