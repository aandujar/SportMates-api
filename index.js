let express = require('express')
let app = express();
var port = process.env.PORT || 3002;
let bodyParser = require('body-parser');
app.listen(port, function () {
     console.log("Running SportMates on port " + port);
});
let mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
app.use(bodyParser.urlencoded({
    useNewUrlParser: true,
    extended: true
 }));
 app.use(bodyParser.json());
 mongoose.connect('mongodb://localhost/sportmates',{ useNewUrlParser: true });
var db = mongoose.connection;


let routes = require("./routes");

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,  DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});


app.use(express.static('public'));

app.get('/', routes);

app.get('/provincias', routes);
app.get('/localidades', routes);
app.get('/deportes', routes);

app.get('/eventos', routes);
app.get('/eventosCreados', routes);
app.get('/eventosInscrito', routes);
app.post('/crearEvento', routes);
app.post('/inscripcionEvento', routes);
app.delete('/eliminarEvento', routes);
app.delete('/abandonarEvento', routes);

app.get('/login', routes);
app.post('/registro', routes);
app.put('/cambiarPassword', routes);









