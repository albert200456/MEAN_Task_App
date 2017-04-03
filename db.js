var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Task = new Schema ({
	title: String,
	isDone: Boolean
});

var Comment = new Schema ({
	name: String,
	company: String,
	phone: String,
	email: String
});   //added for comment

mongoose.model('tasks', Task);
mongoose.model('comments', Comment); // added for comment

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/profile');