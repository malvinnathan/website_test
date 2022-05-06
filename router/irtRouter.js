// A function that define the routes to the targeted data in the database and collect the designated data from the controller
const express = require('express');
const irtRouter = express.Router();
const irtController = require('../controllers/irtController');

// get the data from irtController 
irtRouter.get("/getirt/:id", (req,res) => irtController.getIrt(req,res));


module.exports = irtRouter;



