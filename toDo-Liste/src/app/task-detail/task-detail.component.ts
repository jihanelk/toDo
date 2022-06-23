import { Component, OnInit } from '@angular/core';
import { toDoData } from '../dataInterface';
import { ToDosComponent } from '../to-dos/to-dos.component';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})

export class TaskDetailComponent implements OnInit {

 //@Input() idInt ?: toDoData;
 
  constructor() { }
  ngOnInit(): void {
  }
}
