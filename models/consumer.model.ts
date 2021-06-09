import { ConsumerSchema } from "../config/database/schemas/consumer.schema";
import { Model } from "./model";
import { Consumer } from "../interfaces/Consumer";

class ConsumerModel extends Model<Consumer> {
    validations = {
        user_id: "required|string|min:24|max:24",
        location_id: "required|string|min:24|max:24",
    }

    constructor () {
        super("Consumer", ConsumerSchema);
    }
}

export default new ConsumerModel()