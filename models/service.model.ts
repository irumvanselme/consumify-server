import { Model } from "./model"
import { Service } from "../interfaces/Service";
import { ServiceSchema } from "../config/database/schemas/services.schema";

class ServiceModel extends Model<Service> {
    constructor () {
        super("Service", ServiceSchema);
    }
}

export default new ServiceModel()