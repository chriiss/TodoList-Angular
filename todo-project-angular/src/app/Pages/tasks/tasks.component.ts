import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/task.service'
import { Task } from '../../interface/task';
import { LocalStorage } from 'ngx-store';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @LocalStorage() tasks: Task[] = [];
  @LocalStorage() count: number = 0;
  id: number;
  itemData: string;

  constructor(private task: TaskService) { }

  ngOnInit() {
  }

  add(item) {
    this.tasks.push({
      id: this.id,
      data: item.itemData
    });
    this.count++;
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
    this.count--;
  }

  clear() {
    this.tasks.splice(0);
    this.count = 0;
  }
}
