import { Schema, SchemaDefinition } from "mongoose";
import { user_types } from "../enums/user_types";
import { User } from "../../../interfaces/User";

const userSchema: SchemaDefinition = {
    full_names: {
        required: true,
        type: String,
        minlength: 4
    },
    username: {
        required: true,
        type: String,
        unique: true,
        minlength: 4
    },
    email: {
        required: true,
        type: String,
        unique: true,
        minlength: 4
    },
    phone: {
        required: true,
        type: String,
        unique: true,
        minlength: 4
    },
    title: {
        required: true,
        type: String,
        minlength: 4
    },
    bio: {
        required: true,
        type: String,
        minlength: 4
    },
    profile_image: {
        type: String,
        minlength: 4
    },
    user_type: {
        type: user_types,
        enum: user_types,
        required: true
    },
    password: {
        type: String,
        required: true
    }
};

export const UserSchema = new Schema<User>(userSchema)