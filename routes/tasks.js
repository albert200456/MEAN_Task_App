var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = mongoose.model('tasks');


//Get All Tasks
router.get('/tasks', function(req, res, next){
	Task.find(function(err, tasks){
		if(err){
			res.send(err);
		}
		res.json(tasks);
	});
});

//Get Single Task
router.get('/task/:id', function(req, res, next){
	var id = req.params.id;
	var query = {"_id": id};
	Task.findOne(query, function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});

//Save Task
router.post('/task', function(req, res, next){
	var task = req.body;
	if(!task.title || !(task.isDone + '')) {
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	}
	else {
		new Task(task).save(function(err, task){
			if(err){
				res.send(err);
			}
			res.json(task);
		});
	}
})

//Delete Task
router.delete('/task/:id', function(req, res, next){
	var id = req.params.id;
	var query = {"_id": id};
	Task.findOneAndRemove(query, function(err, task){
		if(err){
			res.send(err);
		}
		res.json(task);
	});
});

//Update Task
router.put('/task/:id', function(req, res, next){
	var id = req.params.id;
	var query = {"_id": id};
	var task = req.body;
	var updatedTask = {};

	if(task.isDone){
		updatedTask.isDone = true;
	}

	else {
		updatedTask.isDone = false;
	}

	if(task.title){
		updatedTask.title = task.title;
	}

	if(!updatedTask){
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	}
	else {
		Task.findOneAndUpdate(query, updatedTask, function(err, task){
			if(err){
				res.send(err);
			}
			res.json(task);
		});
	}
});

module.exports = router;