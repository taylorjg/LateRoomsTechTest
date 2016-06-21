var express = require('express');
var bodyParser = require('body-parser');
var initial_cities = require('./initial_cities');

var cities = initial_cities.map(function(city) {
    city.Visited = city.City.length < 8;
    return city;
});

var port = process.env.PORT || 3000;

var app = express();

var apiRouter = express.Router();
apiRouter.get('/', handleGet);

app.use('/', express.static('./server/public'));
app.use('/api/cities', apiRouter);

function handleGet(req, res, _) {
    console.log('handleGet');
    res.json(cities);
}

app.listen(port, function () {
    console.log('Listening on port %d', port);
});
