import * as mongoose from 'mongoose'

export const TodoSchema = new mongoose.Schema({
    name : String,
    status : String
});

export interface Todo  {
    id:string,
    name:string,
    status:string
}