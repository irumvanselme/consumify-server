import { Model } from "./model"
import { Vendor } from "../interfaces/Vendor";
import { VendorSchema } from "../config/database/schemas/vendor.schema";

class VendorModel extends Model<Vendor> {
    constructor () {
        super("Vendor", VendorSchema);
    }
}

export default new VendorModel()