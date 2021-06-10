import { Model } from "./model"
import { User } from "../interfaces/User";
import { UserSchema } from "../config/database/schemas/user.schema";

class UserModel extends Model<User> {
    validations = {
        full_names: "required|string|min:5",
        username: "required|string|min:4",
        email: "string|email|min:4",
        phone: "required|string|min:9",
        title: "string|min:4",
        bio: "string|min:4",
        profile_image: "string|min:4",
        user_type: "required|string|in:CUSTOMER,VENDOR",
        password: "required|string|min:3"
    }

    constructor () {
        super("User", UserSchema);
    }
}

export default new UserModel()