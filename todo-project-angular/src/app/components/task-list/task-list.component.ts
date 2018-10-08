import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LocalStorage } from 'ngx-store';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input('TasksList') item: {data: string};
  @Output() getRemove = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  removeValue() {
    this.getRemove.emit();
  }
}
