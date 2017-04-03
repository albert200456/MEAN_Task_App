import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../../Comment';
import { FormGroup, FormControl} from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'comments',
  templateUrl: 'comments.component.html' 
})

export class CommentsComponent {
	comments: Comment[];
	name: string;
	company: string;
	phone: string;
	email: string;

	constructor(private commentService: CommentService){
		this.commentService.getComments()
			.subscribe(comments => {
				console.log(comments);
				this.comments = comments;
			});
	}


	addComment(){
		event.preventDefault();
		var newComment = {
			name: this.name,
			company: this.company,
			phone: this.phone,
			email: this.email
		}

		this.commentService.addComment(newComment)
			.subscribe(comment => {
				this.comments.push(comment);
				this.name = '';
				this.company = '';
				this.phone = '';
				this.email = '';
			})
	}

	deleteComment(id){
		var comments = this.comments;
		this.commentService.deleteComment(id).subscribe(data => {
			if(data){
				for(var i = 0; i < comments.length; i++){
					if(comments[i]._id == id){
						comments.splice(i, 1);
					}
				}
			}
		});
	}
}


