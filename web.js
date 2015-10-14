var gzippo = require('gzippo');
  var express = require('express');
  var bodyParser = require('body-parser')
  var app = express();
 
app.use(express.bodyParser());
app.use(express.urlencoded());
app.use(express.json());
app.listen(process.env.PORT || 5000);
