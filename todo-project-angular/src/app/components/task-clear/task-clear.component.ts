import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-clear',
  templateUrl: './task-clear.component.html',
  styleUrls: ['./task-clear.component.css']
})
export class TaskClearComponent implements OnInit {

  @Output() getClear = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clearValue() {
    this.getClear.emit();
  }

}
