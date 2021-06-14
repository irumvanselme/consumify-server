import { Model } from "./model"
import { Vendor } from "../interfaces/Vendor";
import { VendorSchema } from "../config/database/schemas/vendor.schema";

class VendorModel extends Model<Vendor> {
    validations = {
        user_id: "required|string|min:24",
        locations: "required|array",
        services: "required|array",
    }

    constructor () {
        super("Vendor", VendorSchema);
    }
}

export default new VendorModel()
// TODO: Click me here


// ! Don't do this my friend