var mongoose =  require('mongoose');
var Schema = mongoose.Schema;
var deporteSchema = Schema({
    nombre: String
},{ collection : 'deportes'});
module.exports = mongoose.model('deporteModel', deporteSchema);