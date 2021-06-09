import { Model } from "./model"
import { LocationSchema } from "../config/database/schemas/location.schema";
import { Location } from "../interfaces/Location";

class LocationModel extends Model<Location> {
    validations = {
        name: "string|required"
    }

    constructor () {
        super("Location", LocationSchema);
    }
}

export default new LocationModel()