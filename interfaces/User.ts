import { user_types } from "../config/database/enums/user_types";

export interface User {
    full_names: String,
    username: String,
    email: String,
    phone: String,
    title: String,
    bio: String,
    profile_image: String,
    user_type: user_types,
    password: String
}