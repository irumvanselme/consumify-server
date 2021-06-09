import { Types } from "mongoose"

export interface Service {
    _id: Types.ObjectId,
    name: String,
    description: String
}