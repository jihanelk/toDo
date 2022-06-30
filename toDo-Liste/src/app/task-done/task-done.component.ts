import { Component, OnInit } from '@angular/core';
import { ToDosComponent } from '../to-dos/to-dos.component';
import { dataInterface } from '../dataInterface';
import {TESTDATA} from '../test-data';
import { DataService } from '../data.service';

//Komponente um fertiggestellte Tasks zu Sammeln und gezielt anzeigen zu lassen

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {
testdata:ToDosComponent["testdata"] = TESTDATA;
donetasks: dataInterface[] = [];

  constructor(private dataService: DataService) { 
this.getResults()
}
getFinishedTasks(){
for(let i = 0; i < this.testdata.length; i++){
  if(this.testdata[i].done === true){  
    this.donetasks.push(this.testdata[i]);  
  }
}
}
getResults(){
  this.getFinishedTasks();
  for(let i = 0; i <this.donetasks.length; i++){
    console.log("done",this.donetasks[i]);
  }
}
  ngOnInit(): void {
  }

}
