import { Todo } from './todo.model';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable()
export class TodoService{
    constructor(@InjectModel('Todo') private readonly todoModel:Model<Todo>){}

   async createTodo(name:string,status:string) {
        const newTodo = new this.todoModel({
            name:name,
            status:status
        })
        const res = await newTodo.save()
        console.log(res)
    }

    async getAllData() {
        const res = await this.todoModel.find()
        return res
    }

    async deleteTodo(todoId:string) {
        const res = await this.todoModel.deleteOne({_id:todoId});
        console.log(res)
    }

    async updateTodo(id:string,name:string) {
        let todo = await this.todoModel.findById(id)
        todo.name = name;
        todo.save()
        console.log(todo)
    }

    async completeTodo(id:string) {
        let todo = await this.todoModel.findById(id)
        todo.status = "completed"
        todo.save()
        console.log(todo)

    }   
}