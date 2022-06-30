import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestScheduler } from 'rxjs/testing';
import { DataService } from '../data.service';
import { dataInterface } from '../dataInterface';
import { TESTDATA } from '../test-data';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})

export class ToDosComponent implements OnInit {
  id: number = 0;
  selectedId!: dataInterface["idInt"];
  name: string = '';
  department: string = '';
  text: string = '';
  toDos: dataInterface[] = [];
  testdata = TESTDATA;
  displayComponent:any = true;
  data: dataInterface = {
    idInt: 100, name: 'testuser', text: 'abc', department:'D345', done: false
  };

  constructor(private router: Router, private _dataService: DataService) {
    this.getTasks();
  }

  onSelect(id: dataInterface["idInt"]): void { //try put property as array
    this._dataService.onSelect()
    this.selectedId = id;
    // this.router.navigate('/task-detail')
  }

  public getTasks() {
   this._dataService.getTasks(this.testdata, this.toDos);
  }

  public onChange(newValue: boolean, id: number) {
  this._dataService.onChange(this.testdata, newValue, id);
  }

  public reloadCurrentPage() {
    window.location.reload();
  }

  ngOnInit(): void {
  }
}

 //jsObjectn
 
//<app-task-detail [id]="selectedId"></app-task-detail> 