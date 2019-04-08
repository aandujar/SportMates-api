var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var eventoSchema = Schema({
    id: String,
    usuarioCreador: Array,
    localidad: String,
    provincia: String,
    fecha: String,
    hora :String,
    usuariosActuales: Number,
    usuariosMaximos: Number,
    deporte: String,
    descripcion: String,
    latitud: String,
    longitud: String,
    usuariosInscritos: Array
},{ collection : 'eventos'});
module.exports = mongoose.model('eventoModel', eventoSchema);