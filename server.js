// load the express package and create our app
var express = require('express'),
    app     = express(),
    path    = require('path');
// send our index.html file to the user for the home page
app.get('/',function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
//CREATE ROUTES FOR THE ADMIN SECTION?//   
//*1. get an instance of the router
var adminRouter = express.Router();

//*2. admin main page. the dashboard (http://localhost:1337/admin)
adminRouter.get('/',function(req, res) {
        res.send('I am the dashboard');
});
//*3. users page (http://localhost:1337/admin/users)
adminRouter.get('/users', function(req, res) {
        res.send('I Show all the users!');
});
//*4 posts page (http://localhost:1337/admin/posts)
adminRouter.get('/posts', function(req, res) {
        res.send('I show all the post');
});
//*5 apply the routes to our application
app.use('/admin', adminRouter);

// start the server
app.listen(1337);
console.log('1337 is the magic port!');








// // get the http and filesystem modules
// var http = require('http'),
//   fs = require('fs');
//   // create our server using the http module
//   http.createServer(function(req,res){
//     // write to our server. set configuration for the response
//     res.writeHead(200, {
//       'Content-Type': 'text/html',
//       'Access-Control-Allow-Origin' : '*'
//     });
//     // grab the index.html file using fs
//     var readStream = fs.createReadStream(__dirname + '/index.html');
//     // send the index.html file to our user
//     readStream.pipe(res);

//   }).listen(1337);
// // tell ourselves what's happening
//   console.log('Vist me at http://localhost:1337');

// //   We are using the http module to create a server and the fs module to grab an index file and send it in our response to the user.//