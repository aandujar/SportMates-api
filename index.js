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
app.post('/crearEvento', routes);

app.get('/login', routes);
app.post('/registro', routes);












/*

app.post('/inscribirse', (request, response) => {
    var idEvento = request.body.idEvento;
    var idUsuario = request.body.idUsuario;
    var email = request.body.email;

    if (!isNaN(idEvento) && (!isNaN(idUsuario))) {
        pool.query('INSERT INTO lineaevento SET idEvento=?,idUsuarioInscrito=?', [idEvento, idUsuario], (error, result) => {
            if (error) throw error;
            if (result.affectedRows > 0) {
                pool.query('SELECT * FROM evento WHERE id = ?', idEvento, (error, result) => {
                    if (error) throw error;
                    var idUsuarioCreador = result[0].idUsuario;
                    var localidad = result[0].localidad;
                    var provincia = result[0].provincia;
                    var fecha = result[0].fecha;
                    var hora = result[0].hora;
                    var deporte = result[0].deporte;
                    var inscritos = result[0].usuariosActuales;
                    if (result.length > 0) {
                        var mailOptions = {
                            from: 'correosportmates@gmail.com',
                            to: email,
                            subject: 'Inscripción a evento',
                            text: 'Hola te informamos de que te has inscrito correctamente a un evento, te recordamos los datos, localidad: ' + localidad + ', provincia: ' + provincia + ', fecha: ' + fecha + ', hora: ' + hora + ', deporte: ' + deporte
                        };
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) throw error;
                        });
                        pool.query('SELECT correo FROM usuarios WHERE id = ?', idUsuarioCreador, (error, result) => {
                            if (error) throw error;
                            if (result.length > 0) {
                                var mailOptions = {
                                    from: 'correosportmates@gmail.com',
                                    to: result[0].correo,
                                    subject: 'Inscripción a evento',
                                    text: 'Hola te informamos de de que un usuario se ha inscrito correctamente a tu evento, te recordamos los datos, localidad: ' + localidad + ', provincia: ' + provincia + ', fecha: ' + fecha + ', hora: ' + hora + ', deporte: ' + deporte + ', inscritos: ' + inscritos
                                };
                                transporter.sendMail(mailOptions, function (error, info) {
                                    if (error) throw error;
                                });
                            }
                        });
                        pool.query('UPDATE evento SET usuariosActuales = usuariosActuales + 1 where id = ?', idEvento, (error, result) => {
                            if (error) throw error;
                        });

                        response.status(200).json({ codigo: "200", mensaje: "Inscrito correctamente" });

                    }
                });

            }

        });
    } else {
        response.status(401).json({ codigo: "401", error: "Datos incorrectos" });
    }
});

app.put('/cambiarPassword', (request, response) => {
    var id = request.body.id;
    var password = request.body.password;
    if ((password.toString().length > 7) && (password.toString().length < 17)) {
        bcrypt.hash(password, 12)
            .then(function (passwordEncriptado) {
                pool.query('UPDATE usuarios SET password = ? WHERE id = ?', [passwordEncriptado, id], (error, result) => {
                    if (error) throw error;
                    if (result.affectedRows > 0) {
                        response.status(200).json({ codigo: "200", mensaje: "Password cambiado" });
                    } else {
                        response.status(400).json({ codigo: "400", mensaje: "Error al cambiar el password" });
                    }
                });
            })
            .catch(function (error) {
                response.status(500).json({ codigo: 500, error: "Ha ocurrido un error" });
                next();
            });
    }else{
        response.status(401).json({ codigo: 500, error: "Datos incorrectos" });
    }
})*/
