import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatButtonModule, MatInputModule, MatListModule} from '@angular/material';
import { WebStorageModule } from 'ngx-store';
import { TasksComponent } from './Pages/tasks/tasks.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { MyModuleRoutingModule } from './my-module/my-module-routing.module';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskClearComponent } from './components/task-clear/task-clear.component';
import { TaskCountComponent } from './components/task-count/task-count.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskListComponent,
    TaskFormComponent,
    TaskClearComponent,
    TaskCountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    WebStorageModule,
    MyModuleRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
