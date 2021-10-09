const express = require('express');
const app = express();

const port = 3000;
var cors = require('cors');

app.use(cors());

const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'utec',
  password : '1234567890',
  database : 'restaurant'
});

app.get('/menu', getMenu);

function getMenu(req, res){

  
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'utec',
        password : '1234567890',
        database : 'restaurant'
  });

    connection.connect();

    const myQuery = "SELECT menu_id, menu_name, "+ 
                     "menu_price, created_date, " +
                     "modified_date FROM menu; ";

    connection.query(myQuery, function (error, results, fields) {
    
    res.send(results);
                    
    
    connection.end();
    });
}


app.listen(port, function(){
  })
