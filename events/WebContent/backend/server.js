var http = require("http");
var server = http.createServer(function(req, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE 'html'>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hello World!");
  response.write("</body>");
  response.write("</html>");
  response.end();
  alert(req);
});

server.listen(8081);


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12121991',
  database : 'sapui5_events'
});

connection.connect();
var sLoginAuth = false;
connection.query('SELECT *	FROM `users` ', function(err, rows, fields) {
  if (err) throw err;	
console.log('The solutinnn is: ', rows)
if(rows.length > 0)
	  sLoginAuth = true;

})
return sLoginAuth;

