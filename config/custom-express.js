const express = require ('express');
const consign = require ('consign');
const bodyParser = require ('body-parser');

module.exports = function (){
 const app = express();

 app.use(bodyParser.urlencoded{extendend:true}());
 app.use(bodyParser.json());

 consign ()
 .include('controllers')
 .into(app);

 return app;


}