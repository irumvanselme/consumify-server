import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import { Request, Response } from "express";

import User from "../models/user.model"

import { Controller } from "./index";

class AuthController extends Controller {
    async register (req: Request, res: Response) {
        return res.send("Register here")
    }

    async login (req: Request, res: Response) {
        try {
            const user = await User.query.findOne().or([
                { email: req.body.email },
                { username: req.body.username },
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
}

export { AuthController };