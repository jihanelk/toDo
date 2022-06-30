import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { FormsModule } from '@angular/forms';// <-- NgModel lives here (in FormsModule)
import { FormComponent } from './form/form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TestComponent } from './test/test.component'; 
import { RouterModule } from '@angular/router';
import { TaskDoneComponent } from './task-done/task-done.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    FormComponent,
    TaskDetailComponent,
    TestComponent,
    TaskDoneComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'app-to-dos', component: ToDosComponent},
      {path: 'form', component: FormComponent},
      {path: 'task-done', component: TaskDoneComponent},


    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
