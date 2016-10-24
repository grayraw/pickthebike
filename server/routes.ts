"use strict";

var path = require('path');
let expressRouter = require("express").Router();
// let mongoose = require('mongoose');
let Bikes = require("./models/bikes");


expressRouter.get('/', function(req, res){
    let indexPath = path.join(__dirname, '../', '/public/views/index.html');
    res.sendFile(indexPath) 
});

expressRouter.get('/bikes', function(req, res){
    Bikes.find((err, bikes)=>{
        if (err) return console.log(err)
        res.send(bikes)
    })
});
expressRouter.get('/admin', function(req, res){
    res.send('Admin Panel')
});
expressRouter.get('/bike', function(req, res){
    res.send('Bike Page')
});        
        

module.exports = expressRouter;
