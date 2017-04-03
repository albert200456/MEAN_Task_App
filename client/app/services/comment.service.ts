import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CommentService{
	constructor(private http:Http){
		console.log('Comment Service Initialized...');
	}

	getComments(){
		return this.http.get('/api/comments')
			.map(res => res.json());
	}

	addComment(newComment){
		console.log('add: ' + newComment);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/comment', JSON.stringify(newComment), {headers: headers})
			.map(res => res.json());
	}

	deleteComment(id){
		console.log('delete: ' + id);
		return this.http.delete('/api/comment/' + id)
			.map(res => res.json());
	}

	// updateStatus(comment){
	// 	var headers = new Headers();
	// 	headers.append('Content-Type', 'application/json');
	// 	return this.http.put('/api/comment/' + comment._id, JSON.stringify(comment), {headers: headers})
	// 		.map(res => res.json());
	// }
}

