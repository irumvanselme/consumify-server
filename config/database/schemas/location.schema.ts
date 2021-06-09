import { Schema, SchemaDefinition } from "mongoose";

const locationSchema: SchemaDefinition = {
    name: {
        required: true,
        type: String,
        minlength: 4
    }
};

export const LocationSchema = new Schema(locationSchema)