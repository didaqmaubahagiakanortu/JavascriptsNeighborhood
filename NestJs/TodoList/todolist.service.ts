import { Injectable } from '@nestjs/common';
import { TodoList } from './todolist.interface';

@Injectable()
export class TodolistService {

    private list: TodoList[] = [
        {id: 1, title: 'Belajar Nestjs', status: 'Pending'},
        {id: 2 , title: 'Tugas Bu Whyna', status: 'Done'}
    ];

    private listAdded: TodoList[] = [
        {id: 3, title: 'Dapat Pacar', status: 'Impossible'}
    ]

    findAll() {
        return this.list;
    }

    findById(id) {
        return this.list.find((x) => x.id === id);
    }

    create() {
        this.list.push(this.listAdded[0]);
        return this.list;
    }

    update(id) {
        let index = this.list.findLastIndex((x) => x.id === id) * -1;
        this.list.splice(index, 1, this.listAdded[0]);
        return this.list;
    }

    delete(id) {
        let index = this.list.findLastIndex((x) => x.id === id) * -1;
        this.list.splice(index, 1)
        return this.list;
    }

}
