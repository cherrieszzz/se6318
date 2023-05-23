import mongoose, {Schema, model, models} from "mongoose";

const TodoSchema = new Schema({
    user:{type:mongoose.Types.ObjectId},
    name:{type:String, require},
    deadline:{type:String},
    directions:{type:String}
});

const Todo = models.Todo || model("Todo", TodoSchema);

export default Todo;