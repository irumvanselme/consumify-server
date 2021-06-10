import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"

export function authorizationMiddleware(req: Request, res: Response, next: NextFunction){
    const token = req.header('x-auth-token')
    if(!token) return res.send('token missing..').status(401)

    try {
        req.user = jwt.verify(token, process.env.JWT_KEY as string)
        next()
    } catch (err) {
        return  res.send('invalid token').status(403)
    }
}