var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var localidadSchema = Schema({
    nombre: String,
    provincia: String,
    latitud: Number,
    longitud: Number
},{ collection : 'localidades'});
module.exports = mongoose.model('localidadModel', localidadSchema);