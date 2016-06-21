var express = require('express');
var bodyParser = require('body-parser');
var initial_cities = require('./initial_cities');

var port = process.env.PORT || 3000;

var app = express();

var apiRouter = express.Router();
apiRouter.get('/', handleGet);

app.use('/', express.static('./server/public'));
app.use('/api/cities', apiRouter);

function handleGet(req, res, _) {
    console.log('handleGet');
    res.json(initial_cities);
}

app.listen(port, function () {
    console.log('Listening on port %d', port);
});
