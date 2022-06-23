import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './to-dos/to-dos.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    FormComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
