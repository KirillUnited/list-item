var express = require('express');
var path = require('path');
const postRouter = require('./routes/post');
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
MongoClient.connect('mongodb://localhost:27017', function (err,db) {
  if(err){
    throw err;
  } else {
    console.log("Connected");
  }
})
// var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var tasks = require('./routes/tasks');
var clietnPath = path.join(__dirname);

var port = 3000;

var app = express();
app.use('/api/post', postRouter);
app.use(express.static(clietnPath))

app.listen(port, () => {
  console.log(`port ${port}`);
});
