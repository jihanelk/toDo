import { Injectable } from '@angular/core';
import { TESTDATA } from './test-data';
import { dataInterface } from './dataInterface';


@Injectable({
  providedIn: 'root'
})
export class DataService {
testdata=TESTDATA;
newObject: dataInterface[] = [];
  constructor() {

   }

    public getTasks(data: typeof TESTDATA , resultArray: dataInterface[] ) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].done === false) { //to-dos component.ts (false) und task-done(true)
          resultArray.push(data[i]);
        }
      }
    }

    public postData(name: string, text: string, department: string, done:boolean=false){
      let id:number = this.getId()
      let createObject: dataInterface = {} as dataInterface
      this.newObject.push({
        idInt:id,
        name: name,
        text: text,
        department: department ,
        done: done
        
      })
      console.log('objekt in service', this.newObject)
      /*let createObject: dataInterface = {id, name, text, department, done} as datInterface*/
    }

    public getId(){
      let id:number = this.testdata.length ++;
      return id;
    }

   public onSelect(){

  }

    public onChange(data: typeof TESTDATA, newValue: boolean, id: number) {
      let i: number = 0
      i = this.getobjById(data, id);
      newValue = data[i].done;
      console.log(data[i].done);//klappt!!
      //this.reloadCurrentPage()
    }

    private getobjById(data: typeof TESTDATA, id: number) {
      let index: number = 0;
        for (let i = 0; i < data.length; i++) {
          if (id == data[i].idInt) {
            i = index;
          }
        }
      return index;
    }
    
    public changeBoolValue(){
    }
 
}
