// To collect the designated data from the database 
const Drawbar = require('../models/drawbar');

const getDrawbar = async(req,res) => {

    try {
       
        const query = {
            sensor_number: req.params.id
        };
        const drawbar = await Drawbar.findOne(query);

        console.log(drawbar);
        // send the user data to the front end if found
        if (drawbar) {

            
            res.send({
                drawbar: drawbar.toObject(),
            });
        }
        
    } catch (error) {
        res.status(400);
        return res.send("Database query failed")
        }
        
    }


    module.exports = {
        getDrawbar
    }