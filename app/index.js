// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');


//process.env.NODE_ENV = "development"; //set to production for live
var config = require('config');
var middlewares = require('./middlewares/index');
var index_route = require('./core/routes/index.route');

mongoose.connect(config.get('app.connectionString'), {useNewUrlParser:true});

// TODO : use session for security
app.set('trust proxy', 1) // trust first proxy
app.use(middlewares.sessions.session);
//app.use(middlewares.cors.cors);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = config.get('app.port');        // set our port

app.use(middlewares.handlers.session_invalid);
app.use('/api', index_route); //TODO : BEWARE COMMENT THIS CODE BEFORE GOING LIVE
//app.use('/api',middlewares.auth.isAuthenticated, index_route);

//Test
const server = app.listen(8181);

if(process.argv.length > 2) {
	switch(process.argv[2]){
		case "build":
			console.log('success');
			server.close(() => {
				//console.log('build Closed out remaining connections');
				process.exit(0);
			});
			break;
		default:
			console.log('success');
			server.close(() => {
				//console.log('default Closed out remaining connections');
				process.exit(0);
			});
			break;
	}
}

// START THE SERVER
// =============================================================================
console.log('Server is running on port '+ port);

// Since this is the last non-error-handling
// middleware used, we assume 404, as nothing else
// responded.
app.use(middlewares.handlers.page_not_found);
app.use(middlewares.handlers.page_error);
