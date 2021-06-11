import { Validator } from "../config/validator";

export class Controller {
    validate (data: any, validations: any) {
        let validate = new Validator(data, validations)
        return { valid: validate.passes(), errors: validate.errors.all() }
    }
}