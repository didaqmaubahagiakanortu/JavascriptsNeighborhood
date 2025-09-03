import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { TodolistService } from './todolist.service';

@Controller('todolist')
export class TodolistController {

    constructor(private TodoListService: TodolistService) {}

    @Get()
    findAll(@Req() request: Request) {
        return this.TodoListService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.TodoListService.findById(parseInt(id, 10));
    }

    @Post()
    create() {
        return this.TodoListService.create();
    }

    @Put(`:id`)
    update(@Param(`id`) id: string) {
        return this.TodoListService.update(parseInt(id, 10))
    }

    @Delete(':id')
    delete(@Param(`id`) id: string) {
        return this.TodoListService.delete(parseInt(id, 10))
    }

}
