var express = require( 'express' );
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require( './middleware' );

app.use( middleware.logger );

app.get( '/about', middleware.requireAthuntication,  function( req, res ){
	res.send( 'About Us' );
});

app.get( '/contact', function( res, res ){
	res.send( 'contact Us' );
});

app.use( express.static( __dirname + '/public' ) );

console.log( __dirname );

app.listen( PORT, function(){
	console.log( 'Express Server Started at port: ' + PORT );
});

