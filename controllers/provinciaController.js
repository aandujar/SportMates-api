var provincia = require('../models/provinciaModel');



exports.getProvincias = function (request, response) {
    provincia.find({},function (error, result) {
        if (error) return next(error);
        if (result.length > 0) {
            response.status(200).json({ codigo: "200", resultado: result });
        } else {
            response.status(500).json({ codigo:"500", error: "Ha ocurrido un error" });
        }
    })
};