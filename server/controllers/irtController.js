// To collect the designated data from the database 
const Irt = require('../models/irt');

const getIrt = async(req,res) => {

    try {
       
        const query = {
            sensor_number: req.params.id
        };
        const irt = await Irt.findOne(query);
        // send the user data to the front end if found
        if (irt) {

            
            res.send({
                irt: irt.toObject(),
            });
        }
        
    } catch (error) {
        res.status(400);
        return res.send("Database query failed")
        }
        
    }


    module.exports = {
        getIrt
    }