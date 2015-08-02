// get the http and filesystem modules
var http = require('http'),
  fs = require('fs');
  // create our server using the http module
  http.createServer(function(req,res){
    // write to our server. set configuration for the response
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin' : '*'
    });
    // grab the index.html file using fs
    var readStream = fs.createReadStream(__dirname + '/index.html');
    // send the index.html file to our user
    readStream.pipe(res);

  }).listen(1337);
// tell ourselves what's happening
  console.log('Vist me at http://localhost:1337');

//   We are using the http module to create a server and the fs module to grab an index file and send it in our response to the user.//