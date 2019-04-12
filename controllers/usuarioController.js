var Usuario = require('../models/usuarioModel');

var bcrypt = require('bcrypt');
/*var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'correosportmates@gmail.com',
        pass: 'Sportmates92*'
    },
});*/

exports.login = function (request, response) {
    var usuario = request.query.usuario;
    var password = request.query.password;
    if ((usuario.toString().length > 0) && (usuario.toString().length < 21) && (password.toString().length > 7) && (password.toString().length < 17)) {
       Usuario.find({usuario:usuario},function (error, result) {
            if (error) throw error;
            if ((result.length > 0) && (bcrypt.compareSync(password, result[0].password))) {
                response.status(200).json({ codigo: "200", resultado: result });
            } else {
                response.status(400).send('Usuario o contraseña incorrectos');
            }
        });
    } else {
        response.status(400).send('Usuario o contraseña incorrectos');
    }
};

exports.registro = function (request, response) {
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var email = request.body.email;
        var usuario = request.body.usuario;
        var nombre = request.body.nombre;
        var apellidos = request.body.apellidos;
        var password = request.body.password;
    if ((emailRegexp.test(email)) && (usuario.toString().length > 0) && (usuario.toString().length < 21) && (password.toString().length > 7) && (password.toString().length < 17)) {
        Usuario.find({usuario:usuario},function (error, result) {
            if (error) throw error;
            if (result.length > 0) {
                response.status(400).json({ codigo: 400, error: "El nombre de usuario ya está registrado" });
            } else {
                Usuario.find({email:email},function (error, result) {
                    if (error) throw error;
                    if (result.length > 0) {
                        response.status(400).json({ codigo: 400, error: "El email ya está registrado" });
                    } else {
                        if (nombre.toString().length > 0 && nombre.toString().length < 21 && apellidos.toString().length > 0 && apellidos.toString().length < 41) {
                            bcrypt.hash(password, 12)
                                .then(function (passwordEncriptado) {
                                    var registrarUsuario = new Usuario({usuario:usuario,password:passwordEncriptado,nombre:nombre,apellidos:apellidos,email:email}).save(function(error,result){
                                        if (error) throw error;
                                        var id = result._id;
                                        if (result != {}) {
                                            /*var mailOptions = {
                                                from: 'correosportmates@gmail.com',
                                                to: email,
                                                subject: 'Bienvenido a SportMates',
                                                text: 'Hola ' + usuario + ', bienvenido a SportMates, te informamos de que tu usuario ya ha sido dado de alta y puedes utilizar nuestra web. Bienvenido!'
                                            };
                                            transporter.sendMail(mailOptions, function (error, info) {
                                                if (error) throw error;
                                            });*/
                                            response.status(200).json({ codigo: 200, _id: id, usuario: usuario, correo: email });
                                        } else {
                                            response.status(500).json({ codigo: 500, error: "Ha ocurrido un error" });
                                        }
                                    });
                                })
                                .catch(function (error) {
                                    response.status(500).json({ codigo: 400, error: "Ha ocurrido un error" });
                                });

                        }
                    }
                });
            }
        });
    } else {
        response.status(400).json({ codigo: 400, error: "Datos incorrectos" });
    }
};

exports.cambiarPassword = function (request, response) {
    var id = request.body.id;
    var password = request.body.password;
    if ((password.toString().length > 7) && (password.toString().length < 17)) {
        bcrypt.hash(password, 12)
            .then(function (passwordEncriptado) {
                Usuario.findByIdAndUpdate({ _id: id }, { $set: { "password": passwordEncriptado}}, function (error, result) {
                if (error) throw error;
                    response.status(200).json({ codigo: "200", mensaje: "Password cambiado" });
                });
            })
            .catch(function (error) {
                response.status(500).json({ codigo: 500, error: "Ha ocurrido un error" });
                next();
            });
    }else{
        response.status(401).json({ codigo: 500, error: "Datos incorrectos" });
    }
};