import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/task.service'
import { Task } from '../../interface/task';
import { LocalStorage } from 'ngx-store';
import { Color } from '../../interface/color';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  @LocalStorage() tasks: Task[] = [];
  @LocalStorage() count: number = 0;
  @LocalStorage() colorChange: string = 'red';
  @LocalStorage() isEmpty: boolean = false;
  id: number;
  itemData: string;
  dataColor: Color;


  constructor(private task: TaskService) { }

  ngOnInit() {
    this.task.getDataColor().subscribe((res) => {
      this.dataColor = res;
    });
  }

  add(item) {
    this.tasks.push({
      id: this.id,
      data: item.itemData
    });
    this.tasks.reverse();
    this.count++;
    this.addEmpty();
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
    this.count--;
    if(!this.tasks || 0 == this.tasks.length) {
      this.clearEmpty();
    }
  }

  clear() {
    this.tasks.splice(0);
    this.count = 0;
    this.clearEmpty();
  }

  colorChangeItems() {
    return {
      'background': this.colorChange
    }
  }

  addEmpty() {
    this.isEmpty = this.isEmpty ? this.isEmpty : !this.isEmpty;
  }
  clearEmpty() {
    this.isEmpty = this.isEmpty ? !this.isEmpty : this.isEmpty;
  }
}
