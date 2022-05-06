// A function that define the routes to the targeted data in the database and collect the designated data from the controller
const express = require('express');
const springRouter = express.Router();
const springController = require('../controllers/springController');

// get the data from springController 
springRouter.get("/getspring/:id", (req,res) => springController.getSpring(req,res));


module.exports = springRouter;



