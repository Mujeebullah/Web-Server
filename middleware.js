// user module.exports to expose the middleware
module.exports = {
	requireAthuntication: function( req, res, next ){
		console.log( 'Private route hit!' );
		next();
	},
	logger: function( req, res, next ){
		console.log( 'Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl );
		next();
	}
};