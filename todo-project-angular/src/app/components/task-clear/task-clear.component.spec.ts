import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskClearComponent } from './task-clear.component';

describe('TaskClearComponent', () => {
  let component: TaskClearComponent;
  let fixture: ComponentFixture<TaskClearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskClearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
