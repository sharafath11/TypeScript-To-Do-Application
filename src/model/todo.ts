import mongoose, { Document, Schema, model } from 'mongoose';

export interface ITodo extends Document {
  todo: string;
  completed: boolean;
}

const TodoSchema: Schema = new Schema<ITodo>(
  {
    todo:{
        type:String,
        required:true
    },
    completed: {
      type: Boolean,
      default: false, 
    },
  },
  {
    timestamps: true, 
  }
);
const TodoModel = model<ITodo>('Todo', TodoSchema);

export default TodoModel;
