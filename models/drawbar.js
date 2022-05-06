// library package
var mongoose = require('mongoose');

// drawbar schema that stores all user informations
var drawbarSchema = new mongoose.Schema({
        id: String,
        sensor_number: {type:String, required: true},
        vehicle_id: {type: String, required: true},
        manufacture_date: {type: Date, required: true},
        calibration_date: {type: Date, required: true},
        installation_date: {type: Date, required: true},
        status: {type: String, required: true},
    },
    );


var Drawbar = mongoose.model("drawbar",drawbarSchema, "drawbar");



module.exports = Drawbar;