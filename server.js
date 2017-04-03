require('./db');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var index = require('./routes/index');
var tasks = require('./routes/tasks');
var comments = require('./routes/comments'); // added for comment

var port = 3000;
var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(methodOverride('_method'));

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/api', tasks);
app.use('/api', comments); // added for comment
app.listen(port, function(){
	console.log('Server started on port: ' + port)
});