var restify = require('restify');
var axios = require('axios');

var server = restify.createServer();
server.get('/service/:name', respond);
server.head('/service/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});

//**
// Replace with business logic
//**

function respond(req, res, next) {
  res.send('response');
  next();
}