// To collect the designated data from the database 
const Steer = require('../models/steer');

const getSteer = async(req,res) => {

    try {
       
        const query = {
            sensor_number: req.params.id
        };
        const steer = await Steer.findOne(query);
        // send the user data to the front end if found
        if (steer) {

            
            res.send({
                steer: steer.toObject(),
            });
        }
        
    } catch (error) {
        res.status(400);
        return res.send("Database query failed")
        }
        
    }


    module.exports = {
        getSteer
    }