import { Controller } from ".";
import { Request, Response } from "express";
import Location from "../models/location.model";
import { formatRes } from "../utils/response";

class LocationsController extends Controller {
    async get_all (req: Request, res: Response) {
        try {
            let locations = await Location.all();
            res.send(locations)
        } catch ( e ) {
            return res.status(500).send(formatRes(0, "Failed to get all users", e))
        }
    }

    async create (req: Request, res: Response) {
        try {
            let { valid, errors } = super.validate(req.body, Location.validations);
            if (!valid) return res.status(400).send(errors)

            let newLocation = await Location.create(req.body)
            res.send(newLocation);
        } catch ( e ) {
            return res.status(500).send(formatRes(0, "Failed to create a user users", e))
        }
    }

    async update (req: Request, res: Response) {
        try {
            let { valid, errors } = super.validate(req.body, Location.validations)
            if (!valid) return res.status(400).send(errors)

            let location = await Location.query.findById(req.params.id);
            if (!location) res.status(404).send(formatRes(0, "Location with this id is not found", null))

            let newLocation = await Location.query.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.send(newLocation)
        } catch ( e ) {
            return res.status(500).send(formatRes(0, "Failed to update the user with a given id", e))
        }
    }

    async show (req: Request, res: Response) {
        try {
            let location = await Location.query.findById(req.params.id);
            if (location) return res.send(location)
            return res.status(404).send(formatRes(0, "Location with this id is not found", null))
        } catch ( e ) {
            return res.status(500).send(formatRes(0, "Failed to get the user with this id", e))
        }
    }
}

export { LocationsController }
