import { Types } from "mongoose"

export interface Vendor {
    _id: Types.ObjectId,
    user_id: Types.ObjectId,
    locations: Array<Types.ObjectId>
}