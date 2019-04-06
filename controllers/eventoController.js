var Evento = require('../models/eventoModel');

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'correosportmates@gmail.com',
        pass: 'Sportmates92*'
    },
});

exports.getEventos = function (request, response) {
    var id = request.query.id;
    var provincia = request.query.provincia;
    var localidad = request.query.localidad;
    var deporte = request.query.deporte;
    var hoy = new Date()
    var mes = parseInt(hoy.getMonth());
    mes++;;
    var eventosValidos = [];
    if ((provincia) && (localidad) && (deporte)) {
        Evento.find({provincia:provincia,localidad:localidad,deporte:deporte},function (error, result) {
            if (error) throw error;
            if (result.length > 0) {
                result.map(function(ev){
                    var trocearFecha = ev.fecha.split("-");
                    if (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] >= mes) && (trocearFecha[0] > hoy.getDate())) || (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] > mes))) || (trocearFecha[2] > hoy.getFullYear())) {
                        if(ev.idUsuario!=id){
                            if(!ev.usuariosInscritos.includes(id)){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    eventosValidos.push(ev);
                                }
                            }
                        }
                    }
                });
                response.status(200).json({ codigo: "200", resultado: eventosValidos });
            } else {
                response.status(400).json({ codigo: 500, error: "No hay eventos disponibles" });
            }
        });
    } else if ((provincia) && (localidad)) {
        Evento.find({provincia:provincia,localidad:localidad},function (error, result) {
            if (error) throw error;
            if (result.length > 0) {
                result.map(function(ev){
                    var trocearFecha = ev.fecha.split("-");
                    if (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] >= mes) && (trocearFecha[0] > hoy.getDate())) || (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] > mes))) || (trocearFecha[2] > hoy.getFullYear())) {
                        if(ev.idUsuario!=id){
                            if(!ev.usuariosInscritos.includes(id)){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    eventosValidos.push(ev);
                                }
                            }
                        }
                    }
                });
                response.status(200).json({ codigo: "200", resultado: eventosValidos });
            } else {
                response.status(400).json({ codigo: 500, error: "No hay eventos disponibles" });
            }
        });
    } else if ((provincia) && (deporte)) {
        Evento.find({provincia:provincia,deporte:deporte},function (error, result) {
            if (error) throw error;
            if (result.length > 0) {
                result.map(function(ev){
                    var trocearFecha = ev.fecha.split("-");
                    if (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] >= mes) && (trocearFecha[0] > hoy.getDate())) || (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] > mes))) || (trocearFecha[2] > hoy.getFullYear())) {
                        if(ev.idUsuario!=id){
                            if(!ev.usuariosInscritos.includes(id)){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    eventosValidos.push(ev);
                                }
                            }
                        }
                    }
                });
                response.status(200).json({ codigo: "200", resultado: eventosValidos });
            } else {
                response.status(400).json({ codigo: 500, error: "No hay eventos disponibles" });
            }
        });
    } else if (provincia) {
        Evento.find({provincia:provincia},function (error, result) {
            if (error) throw error;
            if (result.length > 0) {
                result.map(function(ev){
                    var trocearFecha = ev.fecha.split("-");
                    if (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] >= mes) && (trocearFecha[0] > hoy.getDate())) || (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] > mes))) || (trocearFecha[2] > hoy.getFullYear())) {
                        if(ev.idUsuario!=id){
                            if(!ev.usuariosInscritos.includes(id)){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    eventosValidos.push(ev);
                                }
                            }
                        }
                    }
                });
                response.status(200).json({ codigo: "200", resultado: eventosValidos });
            } else {
                response.status(400).json({ codigo: 500, error: "No hay eventos disponibles" });
            }
        });
    } else if (deporte) {
        Evento.find({deporte:deporte},function (error, result) {
            if (error) throw error;
            if (result.length > 0) {
                result.map(function(ev){
                    var trocearFecha = ev.fecha.split("-");
                    if (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] >= mes) && (trocearFecha[0] > hoy.getDate())) || (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] > mes))) || (trocearFecha[2] > hoy.getFullYear())) {
                        if(ev.idUsuario!=id){
                            if(!ev.usuariosInscritos.includes(id)){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    eventosValidos.push(ev);
                                }
                            }
                        }
                    }
                });
                response.status(200).json({ codigo: "200", resultado: eventosValidos });
            } else {
                response.status(400).json({ codigo: 500, error: "No hay eventos disponibles" });
            }
        });
    } else {
        Evento.find({},function (error, result) {
            if (error) throw error;
            if (result.length > 0) {
                result.map(function(ev){
                    var trocearFecha = ev.fecha.split("-");
                    if (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] >= mes) && (trocearFecha[0] > hoy.getDate())) || (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] > mes))) || (trocearFecha[2] > hoy.getFullYear())) {
                        if(ev.idUsuario!=id){
                            if(!ev.usuariosInscritos.includes(id)){
                                eventosValidos.push(ev);
                            }
                        }
                    }
                });
                response.status(200).json({ codigo: "200", resultado: eventosValidos });
            } else {
                response.status(400).json({ codigo: 500, error: "No hay eventos disponibles" });
            }
        });
    }
};

exports.crearEvento = function (request, response) {
    var idUsuario = request.body.id;
    var email = request.body.email;
    var localidad = request.body.localidad;
    var provincia = request.body.provincia;
    var descripcion = request.body.descripcion;
    var deporte = request.body.deporte;
    var fecha = request.body.fecha;
    var hora = request.body.hora;
    var participantes = request.body.participantes;
    var latitud;
    var longitud;
    

    var trocearFecha = fecha.split("-");
    var hoy = new Date();
    var mes = hoy.getMonth();
    mes++;
    var hour = hora.split(":");

    if ((deporte.toString().length > 0) && (deporte.toString().length < 21) && (localidad.toString().length > 0) && (localidad.toString().length < 31) && (provincia.toString().length > 0) && (provincia.toString().length < 31) && (descripcion.toString().length > 0) && (descripcion.toString().length < 41) && (hour.length == 2) && (!isNaN(hour[0])) && (hour[0] < 24) && (hour[0] > 0) && (hour[0].length == 2) && (!isNaN(hour[1])) && (hour[1] < 60) && (hour[1] >= 0) && (hour[1].length == 2) && (!isNaN(participantes)) && (participantes > 1) && (participantes < 101)) {
        if (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] >= mes) && (trocearFecha[0] > hoy.getDate())) || (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] > mes))) || (trocearFecha[2] > hoy.getFullYear())) {
            var Localidad = require('../models/localidadModel');
            Localidad.find({nombre:localidad},function (error, result) {
                if (result.length > 0){
                if (error) throw error;
                    longitud = result[0].longitud;
                    latitud = result[0].latitud;
                    var insertarEvento = new Evento({idUsuario:idUsuario,localidad:localidad,provincia:provincia,descripcion:descripcion,deporte:deporte,fecha:fecha,hora:hora,usuariosActuales:1,usuariosMaximos:participantes,latitud:latitud,longitud:longitud,usuariosInscritos:[]}).save(function(error,result){
                        if (error) throw error;
                        if (result != {}) {
                            var mailOptions = {
                                from: 'correosportmates@gmail.com',
                                to: email,
                                subject: 'Has creado un evento',
                                text: 'Hola, te informamos de que acabas de crear un evento, te recordamos los datos Localidad: ' + localidad + " provincia: " + provincia + " fecha: " + fecha + " hora: " + hora + " deporte: " + deporte
                            };
                            transporter.sendMail(mailOptions, function (error, info) {
                                if (error) throw error;
                            });
                            response.status(200).json({ codigo: 200, mensaje: "Evento insertado correctamente" });
                        } else {
                            response.status(500).json({ codigo: 500, error: "Ha ocurrido un error" });
                        }
                    });
            }else{
                response.status(500).json({ codigo: 500, error: "Ha ocurrido un error" });
            }
            });
        } else {
            response.status(401).json({ codigo: 401, error: "Datos incorrectos" });
        }
    } else {
        response.status(401).json({ codigo: 401, error: "Datos incorrectos" });
    }
};