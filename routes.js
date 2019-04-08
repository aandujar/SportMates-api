
let router = require('express').Router();

var provincias = require('./controllers/provinciaController');
var localidades = require('./controllers/localidadController');
var deportes = require('./controllers/deporteController');
var eventos = require('./controllers/eventoController');
var usuarios = require('./controllers/usuarioController');



router.get('/provincias',provincias.getProvincias);
router.get('/localidades',localidades.getLocalidades);
router.get('/deportes',deportes.getDeportes);

router.get('/eventos',eventos.getEventos);
router.get('/eventosCreados',eventos.eventosCreados);
router.post('/crearEvento',eventos.crearEvento);
router.post('/inscripcionEvento',eventos.inscribirseEvento);
router.delete('/eliminarEvento',eventos.eliminarEvento);

router.get('/login',usuarios.login);
router.post('/registro',usuarios.registro);
router.put('/cambiarPassword',usuarios.cambiarPassword);

module.exports = router;