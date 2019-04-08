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
    var condicionInscrito = true;
    if ((provincia) && (localidad) && (deporte)) {
        Evento.find({provincia:provincia,localidad:localidad,deporte:deporte},function (error, result) {
            if (error) throw error;
            if (result.length > 0) {
                result.map(function(ev){
                    var trocearFecha = ev.fecha.split("-");
                    if (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] >= mes) && (trocearFecha[0] > hoy.getDate())) || (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] > mes))) || (trocearFecha[2] > hoy.getFullYear())) {
                        if(ev.usuarioCreador[0].id!=id){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    if(ev.usuariosActuales<ev.usuariosMaximos){
                                        ev.usuariosInscritos.map(function(user){
                                            if(user.id==id){
                                                condicionInscrito = false;
                                            }
                                        })
                                        if(condicionInscrito==true){
                                            eventosValidos.push(ev);
                                        }                                  
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
                        if(ev.usuarioCreador[0].id!=id){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    if(ev.usuariosActuales<ev.usuariosMaximos){
                                        ev.usuariosInscritos.map(function(user){
                                            if(user.id==id){
                                                condicionInscrito = false;
                                            }
                                        })
                                        if(condicionInscrito==true){
                                            eventosValidos.push(ev);
                                        }                                  
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
                        if(ev.usuarioCreador[0].id!=id){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    if(ev.usuariosActuales<ev.usuariosMaximos){
                                        ev.usuariosInscritos.map(function(user){
                                            if(user.id==id){
                                                condicionInscrito = false;
                                            }
                                        })
                                        if(condicionInscrito==true){
                                            eventosValidos.push(ev);
                                        }                                  
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
                        if(ev.usuarioCreador[0].id!=id){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    if(ev.usuariosActuales<ev.usuariosMaximos){
                                        ev.usuariosInscritos.map(function(user){
                                            if(user.id==id){
                                                condicionInscrito = false;
                                            }
                                        })
                                        if(condicionInscrito==true){
                                            eventosValidos.push(ev);
                                        }                                  
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
                        if(ev.usuarioCreador[0].id!=id){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    if(ev.usuariosActuales<ev.usuariosMaximos){
                                        ev.usuariosInscritos.map(function(user){
                                            if(user.id==id){
                                                condicionInscrito = false;
                                            }
                                        })
                                        if(condicionInscrito==true){
                                            eventosValidos.push(ev);
                                        }                                  
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
                        if(ev.usuarioCreador[0].id!=id){
                                if(ev.usuariosActuales<ev.usuariosMaximos){
                                    if(ev.usuariosActuales<ev.usuariosMaximos){
                                        ev.usuariosInscritos.map(function(user){
                                            if(user.id==id){
                                                condicionInscrito = false;
                                            }
                                        })
                                        if(condicionInscrito==true){
                                            eventosValidos.push(ev);
                                        }                                  
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
    }
};

exports.eventosCreados = function (request, response) {
    var id = request.query.id;
    var hoy = new Date();
    var mes = parseInt(hoy.getMonth());
    mes++;
    var eventosValidos = [];
    Evento.find({},function (error, result) {
        if (error) throw error;
        if (result.length > 0) {
            result.map(function(ev){
                var trocearFecha = ev.fecha.split("-");
                if (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] >= mes) && (trocearFecha[0] > hoy.getDate())) || (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] > mes))) || (trocearFecha[2] > hoy.getFullYear())) {
                    if(ev.usuarioCreador[0].id==id){
                        eventosValidos.push(ev);
                     }
                }
            });
            response.status(200).json({ codigo: "200", resultado: eventosValidos });
        } else {
            response.status(400).json({ codigo: 500, error: "No hay eventos disponibles" });
        }
    });
}

exports.eliminarEvento = function (request, response) {
    
    var id = request.query.id;
    var idUsuario = request.query.idUsuario; 
    var hoy = new Date();
    var mes = parseInt(hoy.getMonth());
    mes++;
    var eventosValidos = [];
    Evento.find({_id:id},function (error, result) {
        result.map(function(ev){
            ev.usuariosInscritos.map(function(user){
                var mailOptions = {
                    from: 'correosportmates@gmail.com',
                    to: user.email,
                    subject: 'Evento eliminado',
                    text: 'Hola, lamentamos informarte de que han eliminado el siguiente evento al que estabas inscrito, deporte: ' + result[0].deporte + ', localidad: ' + result[0].localidad + ',provincia: ' + result[0].provincia + ', fecha: ' + result[0].fecha + ', hora: ' + result[0].hora
                };
                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) throw error;
                });
            });
        });
    Evento.findByIdAndDelete({_id:id}, function(error,result){
        Evento.find({},function (error, result) {
            if (error) throw error;
            if (result.length > 0) {
                result.map(function(ev){
                    var trocearFecha = ev.fecha.split("-");
                    if (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] >= mes) && (trocearFecha[0] > hoy.getDate())) || (((trocearFecha[2] >= hoy.getFullYear()) && (trocearFecha[1] > mes))) || (trocearFecha[2] > hoy.getFullYear())) {
                        if(ev.usuarioCreador[0].id==idUsuario){
                            eventosValidos.push(ev);
                         }
                    }
                });
                response.status(200).json({ codigo: 200, resultado: eventosValidos });
            } 
        });
    });
});
}

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
                    var insertarEvento = new Evento({usuarioCreador:{id:idUsuario,email:email},localidad:localidad,provincia:provincia,descripcion:descripcion,deporte:deporte,fecha:fecha,hora:hora,usuariosActuales:1,usuariosMaximos:participantes,latitud:latitud,longitud:longitud,usuariosInscritos:[]}).save(function(error,result){
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


exports.inscribirseEvento = function (request, response) {
    var idEvento = request.body.idEvento;
    var idUsuario = request.body.idUsuario;
    var email = request.body.email;
    var user = { id: idUsuario, email: email};
        Evento.findByIdAndUpdate({ _id: idEvento }, { $push: { "usuariosInscritos": user}}, function (error, result) {
            if (error) throw error;
            Evento.findByIdAndUpdate({ _id: idEvento }, { $inc: { "usuariosActuales": 1}}, function (error, result) {
                Evento.find({_id:idEvento},function (error, result) {
                    if (error) throw error;
                    if (result.length > 0){
                        var mailOptions = {
                            from: 'correosportmates@gmail.com',
                            to: email,
                            subject: 'Inscripción a evento',
                            text: 'Hola te informamos de que te has inscrito correctamente a un evento, te recordamos los datos, localidad: ' + result[0].localidad + ', provincia: ' + result[0].provincia + ', fecha: ' + result[0].fecha + ', hora: ' + result[0].hora + ', deporte: ' + result[0].deporte
                        };
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) throw error;
                        });
                        var mailOptions = {
                            from: 'correosportmates@gmail.com',
                            to: result[0].usuarioCreador[0].email,
                            subject: 'Inscripción a tu evento',
                            text: 'Hola te informamos de una inscripción en tu evento. Actualmente hay inscritos ' + result[0].usuariosActuales + ' de un máximo de ' + result[0].usuariosMaximos
                        };
                        transporter.sendMail(mailOptions, function (error, info) {
                            if (error) throw error;
                        });
                        response.status(200).json({ codigo: "200", mensaje: "Inscrito correctamente" });
                    }
                
                    });
            });
        });
};