import { Schema, SchemaDefinition, Types } from "mongoose";

const consumerSchema: SchemaDefinition = {
    user_id: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    location: {
        type: Types.ObjectId,
        ref: "Location",
        required: true,
    }
};

export const ConsumerSchema = new Schema(consumerSchema)