import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { dataInterface } from '../dataInterface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newData:dataInterface[]= [];
name: dataInterface["name"]='';
text: dataInterface["text"]='';
department: dataInterface["department"]= '';

  constructor(private _dataService: DataService) { 
  }

postData(){
  console.log('method postdata works and is called')
console.log('input is',this.name, this.text, this.department)
this._dataService.postData(this.name, this.text,this.department)
}

  ngOnInit(): void {
  }

}
