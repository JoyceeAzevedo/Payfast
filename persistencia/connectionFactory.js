const mysql = require('mysql');

function createDBConnection(){
  return mysql.createDBConnection({
   host: 'localhost',
   user: 'root',
   password:'',
   database: 'payfast'

  });

}

module,exports = function (){
  return createDBConnection;

}

