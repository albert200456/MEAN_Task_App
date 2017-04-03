import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {CommentsComponent} from './components/comments/comments.component';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, TasksComponent, CommentsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }