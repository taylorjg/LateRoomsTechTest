var express = require('express');
var bodyParser = require('body-parser');
var initial_cities = require('./initial_cities');

var nextId = 0;
var cities = initial_cities.map(function (city) {
    city.Visited = city.City.length < 8;
    city.Id = nextId++;
    return city;
});

var port = process.env.PORT || 3000;

var apiRouter = express.Router();
apiRouter.get('/', handleGetAll);
apiRouter.post('/', handleCreate);
apiRouter.post('/:id', handleUpdate);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('./server/public'));
app.use('/api/cities', apiRouter);

function handleGetAll(req, res, _) {
    console.log('handleGetAll');
    cities.forEach(city => {
        console.log('\t%s', JSON.stringify(city));
    });
    res.json(cities);
}

function handleCreate(req, res, _) {
    var city = strip$$Properties(req.body);
    city.Id = nextId++;
    console.log('handleCreate: %s', JSON.stringify(city));
    cities.push(city);
    res.status(201);
    res.json(city);
}

function handleUpdate(req, res, _) {
    var city = strip$$Properties(req.body);
    console.log('handleUpdate: %s', JSON.stringify(city));
    var index = cities.findIndex(c => c.Id === city.Id);
    if (index < 0) {
        res.sendStatus(404);
        res.end();
        return;
    }
    cities[index] = city;
    res.json(city);
}

function strip$$Properties(obj) {
    Object.keys(obj)
        .filter(k => k.indexOf('$$') === 0)
        .forEach(k => delete obj[k]);
    return obj;
}

app.listen(port, function () {
    console.log('Listening on port %d', port);
});
