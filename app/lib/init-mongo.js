'use strict';

var MongoClient = require('mongodb').MongoClient;
//mongob://192.168.11.232 is current virtual machine ip
var mongoUrl = 'mongodb://192.168.11.232/' + process.env.DBNAME;
var initialized = false;

exports.connect = function(req, res, next){
  if(!initialized){
    initialized = true;
    exports.db(next);
  }else{
    next();
  }
};

exports.db = function(fn){
  MongoClient.connect(mongoUrl, function(err, db) {
    if(err){throw err;}
    global.nss = {};
    global.nss.db = db;
    console.log('Connected to MongoDB');
    fn();
  });
};
