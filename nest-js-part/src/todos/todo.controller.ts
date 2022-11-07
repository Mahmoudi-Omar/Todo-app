import { TodoService } from './todo.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('todo')
export class TodoController{
    constructor(private readonly todoService:TodoService){}
    @Post()
    addTodo(@Body() data:any){
        this.todoService.createTodo(data.name,data.status);
    }

    @Get()
    getAll() {
        return this.todoService.getAllData()
    }

    @Post(':id')
    removeTodo(@Param('id') todoId:string) {
        return this.todoService.deleteTodo(todoId);
    }

    @Put('update')
    updateTodo(@Body() data:any) {
        return this.todoService.updateTodo(data.id,data.name)
    }
    @Post('complete/:id')
    completeTodo(@Param('id') todoId:string, @Body() data:any) {
        return this.todoService.completeTodo(todoId)
    }
}