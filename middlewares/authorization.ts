import jwt from "jsonwebtoken"
import { User } from "../interfaces/User";

import type { NextFunction, Response } from "express";
import type { RequestWithUser } from "../interfaces/RequestWithUser";

export function authorizationMiddleware(req: RequestWithUser, res: Response, next: NextFunction){
    const token = req.header('x-auth-token')
    if(!token) return res.send('token missing..').status(401)

    try {
        req.user = jwt.verify(token, process.env.JWT_KEY as string) as User
        next()
    } catch (err) {
        return  res.send('invalid token').status(403)
    }
}