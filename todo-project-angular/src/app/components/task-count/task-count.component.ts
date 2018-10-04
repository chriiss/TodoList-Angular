import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrls: ['./task-count.component.css']
})
export class TaskCountComponent implements OnInit {

  @Input() TasksCount;

  constructor() { }

  ngOnInit() {
  }

}
