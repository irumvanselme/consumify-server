import { Schema, SchemaDefinition } from "mongoose";
import { Service } from "../../../interfaces/Service";

const serviceSchema: SchemaDefinition = {
    name: {
        required: true,
        type: String,
        minlength: 4
    },
    description: {
        type: String,
        minlength: 10
    },
};

export const ServiceSchema = new Schema<Service>(serviceSchema)