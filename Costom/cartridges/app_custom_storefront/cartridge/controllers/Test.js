'use strict';

var server = require('server');
var Transaction = require('dw/system/Transaction');
var ArrayList = require('dw/util/ArrayList');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');

server.get('Data',function (req, res, next) {
   var Array = new ArrayList();
   for (var i=0; i<=2000;i++)
   {
    Array.add(i);
   }
res.render('home/homePage', {Array:Array});
    
next();
});

module.exports = server.exports();
