// library package
var mongoose = require('mongoose');

// spring schema that stores all user informations
var springSchema = new mongoose.Schema({
        id: String,
        sensor_number: {type:String, required: true},
        vehicle_id: {type: String, required: true},
        manufacture_date: {type: Date, required: true},
        calibration_date: {type: Date, required: true},
        installation_date: {type: Date, required: true},
        status: {type: String, required: true},
    },
    );


var Spring = mongoose.model("spring",springSchema, "spring");



module.exports = Spring;