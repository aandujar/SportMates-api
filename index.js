let express = require('express')
let app = express();
var port = process.env.PORT || 3002;
let bodyParser = require('body-parser');
app.listen(port, function () {
     console.log("Running SportMates on port " + port);
});
let mongoose = require('mongoose');
app.use(bodyParser.urlencoded({
    useNewUrlParser: true,
    extended: true
 }));
 app.use(bodyParser.json());
 mongoose.connect('mongodb://localhost/sportmates',{ useNewUrlParser: true });
var db = mongoose.connection;

/*
const port = 3002;
const cors = require('cors');
const fs = require('fs');*/
let routes = require("./routes");


/*var nodemailer = require('nodemailer');

mongoose.connect('mongodb://user:user@127.0.0.1:27017/sportmates');*/
/*app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});



var bcrypt = require('bcrypt');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'correosportmates@gmail.com',
        pass: 'Sportmates92*'
    },
});

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});*/

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
app.post('/crearEvento', routes);
app.post('/inscripcionEvento', routes);
app.delete('/eliminarEvento', routes);

app.get('/login', routes);
app.post('/registro', routes);
app.put('/cambiarPassword', routes);









