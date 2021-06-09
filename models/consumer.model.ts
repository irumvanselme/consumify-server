import { ConsumerSchema } from "../config/database/schemas/consumer.schema";
import { Model } from "./model";
import { Consumer } from "../interfaces/Consumer";

class ConsumerModel extends Model<Consumer> {
    constructor () {
        super("Consumer", ConsumerSchema);
    }
}

export default new ConsumerModel()