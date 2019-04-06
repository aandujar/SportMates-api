var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var usuarioSchema = Schema({
    id: String,
    usuario: String,
    password: String,
    nombre: String,
    apellidos: String,
    email: String
},{ collection : 'usuarios'});
module.exports = mongoose.model('usuarioModel', usuarioSchema);