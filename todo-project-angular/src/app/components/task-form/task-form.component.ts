 import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Output() getAdd = new EventEmitter<{itemData: string}>();
  newItem: string;
  formAdd: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formAdd = this.fb.group({
      newItem: ['', [Validators.required, Validators.maxLength(45)]]
    })
  }

  addValue() {
    this.getAdd.emit({itemData: this.newItem});
  }

}
