import { Model } from "./model"
import { Service } from "../interfaces/Service";
import { ServiceSchema } from "../config/database/schemas/services.schema";

class ServiceModel extends Model<Service> {
    validations = {
        name: "string|required|min:3",
        description: "string|required|min:3",
        icon: "string|required|min:5"
    }

    constructor () {
        super("Service", ServiceSchema);
    }
}

export default new ServiceModel()