 import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() getAdd = new EventEmitter<{itemData: string}>();
  newItem: string;

  constructor() { }

  ngOnInit() {
  }

  addValue() {
    this.getAdd.emit({itemData: this.newItem});
  }

}
