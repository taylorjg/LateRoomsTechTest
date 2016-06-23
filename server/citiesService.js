var initial_cities = require('./initial_cities');
var nextId = 0;
var cities = initial_cities.map(function (city) {
    city.Visited = city.City.length < 8;
    city.Id = nextId++;
    return city;
});

function getAll(req, res, _) {
    console.log('citiesService.getAll');
    cities.forEach(city => {
        console.log('\t%s', JSON.stringify(city));
    });
    res.json(cities);
}

function create(req, res, _) {
    var city = strip$$Properties(req.body);
    city.Id = nextId++;
    console.log('citiesService.create: %s', JSON.stringify(city));
    cities.push(city);
    res.status(201);
    res.json(city);
}

function update(req, res, _) {
    var city = strip$$Properties(req.body);
    console.log('citiesService.update: %s', JSON.stringify(city));
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

module.exports = {
    getAll: getAll,
    create: create,
    update: update
};
