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
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
  }

}
