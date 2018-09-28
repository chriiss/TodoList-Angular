import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { TodoService } from '../../shared/todo.service';
import { Item } from '../../interface/item';
import { LocalStorage } from 'ngx-store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('todoList') form: NgForm;

  @LocalStorage() todos: Item[] = [];
  description: string;
  @LocalStorage() count: number = 0;
  @LocalStorage() isNight: boolean = false;

  constructor(private todoservice: TodoService) {
  }

  ngOnInit() {
  }

  Add() {
    this.todos.push({
      description: this.description,
      isCheck: false
    });
    this.description = null;
    this.count++;
  }

  Remove(index: number) {
    this.todos.splice(index, 1);
    this.count--;
  }

  Clear(){
    this.todos.splice(0);
    this.count = 0;
  }

  Night() {
    this.isNight = !this.isNight;
  }

  isNightStyle() {
    return {
      'background' : this.isNight ? 'black' : 'blue'
    }
  }

  formValidator() {
    this.form.controls['item'].setValidators(
      [Validators.required, Validators.maxLength(30)]
    )
  }

}
