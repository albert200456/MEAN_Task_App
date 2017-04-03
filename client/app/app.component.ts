import { Component } from '@angular/core';
import {TaskService} from './services/task.service';
import {CommentService} from './services/comment.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers: [TaskService, CommentService]
})

export class AppComponent { }