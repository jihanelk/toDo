import { Component, OnInit } from '@angular/core';
import { dataInterface } from '../dataInterface';
import { ToDosComponent } from '../to-dos/to-dos.component';

//Komponente, um bei Auswahl die Details des ausgewählten Tasks anzeigen zu lassen

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})

export class TaskDetailComponent implements OnInit {
task: dataInterface | undefined;
toDoData: dataInterface[] = [];


 //@Input() idInt ?: dataInterface;
 
  constructor() { }
  ngOnInit(): void {
  }
}
