// library package
var mongoose = require('mongoose');

// irt schema that stores all user informations
var irtSchema = new mongoose.Schema({
        id: String,
        sensor_number: {type:String, required: true},
        vehicle_id: {type: String, required: true},
        manufacture_date: {type: Date, required: true},
        calibration_date: {type: Date, required: true},
        installation_date: {type: Date, required: true},
        status: {type: String, required: true},
    },
    );


var Irt = mongoose.model("irt",irtSchema, "irt");



module.exports = Irt;