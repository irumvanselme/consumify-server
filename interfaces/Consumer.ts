import { Types } from "mongoose"

export interface Consumer {
    _id: Types.ObjectId,
    user_id: Types.ObjectId,
    location_id: Types.ObjectId
}