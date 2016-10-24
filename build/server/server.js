"use strict";
var express = require("express");
var mongoose = require('mongoose');
var path = require('path');
var app = express();
// let mongoose = require('mongoose'); 
var router = require('./routes');
// let routes = new router();
// mongoose.connect('mongodb://localhost/pickthebike', {}, function(){
// console.log(router.e().showRoutes());
// });
// app.get('/', function (req, res) {
//     let documents = [];
//     mongoose.connection.db.listCollections().toArray(function(err, names) {
//         if (err) {
//             console.log(err);
//         }
//         else {
//             names.forEach(function(e,i,a) {
//                 documents.push(e.name)
//             });
//         }
//         res.send(documents)
//     });  
// });
mongoose.Promise = global.Promise;
// connect to MongoDB
mongoose.connect('mongodb://localhost/pickthebike')
    .then(function () { return console.log('connection succesful'); })
    .catch(function (err) { return console.error(err); });
app.use('/', router);
app.use('/scripts', express.static(path.join(__dirname, '/../../', 'node_modules/')));
app.use(express.static(path.join(__dirname, '/../', 'public/')));
// app.set('views', __dirname + '/views');  
// app.set('view engine', 'pug');
// app.use(express.static(__dirname + '/../public'));
// app.get('*', function (req, res){
//   res.render('index')
// })
app.listen(3000, function () {
    console.log('Pick The Bike started on port 3000!');
    console.log(__dirname);
});
