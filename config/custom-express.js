const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser')

module.exports = function(){
  const app = express();

  consign()
   .include('controllers')
   .then('persistencia')
   .into(app);

  return app;
}
