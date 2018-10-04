import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from '../Pages/tasks/tasks.component';
import { TaskListComponent } from '../components/task-list/task-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: '/tasks', component: TasksComponent},
  {path: 'list', children: [
    {path: 'tasklist', component: TaskListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }
