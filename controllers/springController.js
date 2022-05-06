// To collect the designated data from the database 
const Spring = require('../models/spring');

const getSpring = async(req,res) => {

    try {
       
        const query = {
            sensor_number: req.params.id
        };
        
        const spring = await Spring.findOne(query);
   
        // send the user data to the front end if found
        if (spring) {

            
            res.send({
                spring: spring.toObject(),
            });
        }
        
    } catch (error) {
        res.status(400);
        return res.send("Database query failed")
        }
        
    }


    module.exports = {
        getSpring
    }