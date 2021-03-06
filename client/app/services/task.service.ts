import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService{
	constructor(private http:Http){
		console.log('Task Service Initialized...');
	}

	getTasks(){
		return this.http.get('/api/tasks')
			.map(res => res.json());
	}

	addTask(newTask){
		console.log('add: ' + newTask);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
			.map(res => res.json());
	}

	deleteTask(id){
		console.log('delete: ' + id);
		return this.http.delete('/api/task/' + id)
			.map(res => res.json());
	}

	updateStatus(task){
		console.log('update: ' + task.isDone);

		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.put('/api/task/' + task._id, JSON.stringify(task), {headers: headers})
			.map(res => res.json());
	}
}

