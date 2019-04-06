var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var provinciaSchema = Schema({
    nombre: String
},{ collection : 'provincias'});
module.exports = mongoose.model('provinciaModel', provinciaSchema);