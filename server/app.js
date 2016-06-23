var express = require('express');
var bodyParser = require('body-parser');
var citiesService = require('./citiesService');

var port = process.env.PORT || 3000;

var apiRouter = express.Router();
apiRouter.get('/', citiesService.getAll);
apiRouter.post('/', citiesService.create);
apiRouter.post('/:id', citiesService.update);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('./server/public'));
app.use('/api/cities', apiRouter);

app.listen(port, function () {
    console.log('Listening on port %d', port);
});
