import { Schema, SchemaDefinition, Types } from "mongoose";

const vendorSchema: SchemaDefinition = {
    user_id: {
        type: Types.ObjectId,
        ref: "User",
        required: true
    },
    services: [{
        type: Types.ObjectId,
        ref: "Service",
        required: true,
    }],
    locations: [{
        type: Types.ObjectId,
        ref: "Location",
        required: true,
    }]
};

export const VendorSchema = new Schema(vendorSchema)