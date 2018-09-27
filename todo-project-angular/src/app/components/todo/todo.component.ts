import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { TodoService } from '../../shared/todo.service';
import { Item } from '../../interface/item';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild('todoList') form: NgForm;

  todos: Item[] = [];
  description: string;
  isCheck: boolean = false;
  count: number = 0;

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

  Edit(i: number) {
    let description = this.todos[i].description;
    let result = prompt("Modifier votre description ?", description);
    if (result !== null && result !== ""){
      this.todos[i].description = result;
    }
  }

  Cancel(i: number){
    if (this.todos[i].isCheck){
      this.todos[i].isCheck = false;
      this.count++;
    }else{
      this.todos[i].isCheck  = true;
      this.count--;
    }
 }

 isCheckStyle() {
   return {
     'color': this.isCheck ? 'blue' : 'green'
   }
 }

  formValidator() {
    this.form.controls['item'].setValidators(
      [Validators.required, Validators.maxLength(30)]
    )
  }

}
