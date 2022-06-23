import { Component, OnInit } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';
import { toDoData } from '../dataInterface';
import {TESTDATA} from '../test-data';


@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})

export class ToDosComponent implements OnInit {
  id: number = 0;
  selectedId!: toDoData["idInt"];
  surname: string = '';
  lastname: string = '';
  text: string = '';
  toDos: JSON[] = []; 
  testdata = TESTDATA;
  data:toDoData = {
idInt:100, name: 'testuser', text: 'abc', done: false
  };
 
  constructor() { }
  onSelect(id: toDoData["idInt"]): void { //try put property as array
    this.selectedId = id;
  }
  
  public getName() {
    let fullName = this.surname + ' ' + this.lastname;
    return fullName
  }
  public saveData() {
    //this.toDos.push(toDoData);
  }
  ngOnInit(): void {
  }
}

 //jsObjectn