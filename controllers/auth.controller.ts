import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import { Request, Response } from "express";

import User from "../models/user.model"

import { Controller } from "./index";

class AuthController extends Controller {
    login_validations = {
        login: "required|string|min:3",
        password: "required|string|min:3"
    }

    async register (req: Request, res: Response) {
        let { valid, errors } = super.validate(req.body, User.validations);
        if (!valid) return res.status(400).send(errors)

        let newTodo = await User.create(req.body)
    }

    async login (req: Request, res: Response) {
        try {
            let { valid, errors } = super.validate(req.body, this.login_validations);
            if (!valid) return res.status(400).send(errors)

            const user = await User.query.findOne().or([
                { email: req.body.login },
                { username: req.body.login },
                { phone: req.body.login },
            ]);

            if (user && (await bcrypt.compareSync(req.body.password, user.password))) {
                const token = jwt.sign(user, process.env.JWT_KEY as string);
                return res.send({ user, token });
            } else {
                return res
                    .status(404)
                    .send({ message: "Invalid email or password" });
            }
        } catch ( e ) {
            return res.status(500).send(e);
        }
    }

    async profile (req: Request, res: Response) {

    }

    async email_available (req: Request, res: Response) {

    }

    async username_available (req: Request, res: Response) {

    }
}

export { AuthController };