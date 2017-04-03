var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('comments');


//Get All Comments
router.get('/comments', function(req, res, next){
	Comment.find(function(err, comments){
		if(err){
			res.send(err);
		}
		res.json(comments);
	});
});

//Get Single Comments
router.get('/comment/:id', function(req, res, next){
	var id = req.params.id;
	var query = {"_id": id};
	Comment.findOne(query, function(err, comment){
		if(err){
			res.send(err);
		}
		res.json(comment);
	});
});

//Save Comment
router.post('/comment', function(req, res, next){
	var comment = req.body;
	if(!comment.name || !comment.company || !comment.phone || !comment.email) {
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	}
	else {
		new Comment(comment).save(function(err, comment){
			if(err){
				res.send(err);
			}
			res.json(comment);
		});
	}
})

//Delete Comment
router.delete('/comment/:id', function(req, res, next){
	var id = req.params.id;
	var query = {"_id": id};
	Comment.findOneAndRemove(query, function(err, comment){
		if(err){
			res.send(err);
		}
		res.json(comment);
	});
});

//Update Comment
router.put('/comment/:id', function(req, res, next){
	var id = req.params.id;
	var query = {"_id": id};
	var comment = req.body;
	var updatedComment = {};

	if(comment.name){
		updatedComment.name = comment.name;
	}

	if(comment.company){
		updatedComment.company = comment.company;
	}

	if(comment.phone){
		updatedComment.phone = comment.phone;
	}

	if(comment.eamil){
		updatedComment.email = comment.email;
	}

	if(!updatedComment){
		res.status(400);
		res.json({
			"error": "Bad Data"
		});
	}
	else {
		Comment.findOneAndUpdate(query, updatedComment, function(err, comment){
			if(err){
				res.send(err);
			}
			res.json(comment);
		});
	}
});

module.exports = router;