import { Schema } from "mongoose";
import { Todo } from "../../../interfaces/Todo";

const todoSchema = {
    name: {
        required: true,
        type: String,
        minlength: 4
    },
    description: {
        type: String,
        minlength: 10
    },
};

export const TodoSchema = new Schema<Todo>(todoSchema)