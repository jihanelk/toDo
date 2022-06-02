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
  surname: string = '';
  lastname: string = '';
  text: string = '';
  toDos: JSON[] = [];
  data:toDoData = {
id:100, name: 'testuser', text: 'abc', done: false
  }
  constructor() { }
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