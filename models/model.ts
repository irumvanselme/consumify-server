import mongoose from "mongoose";

export class Model<Type> {
    validations = {}

    private readonly _model: mongoose.Model<any>;

    get query (): mongoose.Model<any> {
        return this._model;
    }

    constructor (name: string, schema: mongoose.Schema<Type>) {
        this._model = mongoose.model<Type>(name, schema)
    }

    public all () {
        return this.query.find();
    }

    public async create (data: Type) {
        let element = new this._model(data)
        return await element.save()
    }
}