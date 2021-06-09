import { Schema, SchemaDefinition } from "mongoose";
import { Location } from "../../../interfaces/Location";

const locationSchema: SchemaDefinition = {
    name: {
        required: true,
        type: String,
        minlength: 4
    }
};

export const LocationSchema = new Schema<Location>(locationSchema)