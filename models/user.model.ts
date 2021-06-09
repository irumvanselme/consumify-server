import { Model } from "./model"
import { User } from "../interfaces/User";
import { UserSchema } from "../config/database/schemas/user.schema";

class UserModel extends Model<User> {
    constructor () {
        super("User", UserSchema);
    }
}

export default new UserModel()