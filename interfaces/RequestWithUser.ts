import { User } from "./User";

import type { Request } from "express"

export interface RequestWithUser extends Request {
    user: User
}