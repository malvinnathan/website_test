// A function that define the routes to the targeted data in the database and collect the designated data from the controller
const express = require('express');
const steerRouter = express.Router();
const steerController = require('../controllers/steerController');

// get the data from irtController 
steerRouter.get("/getsteer/:id", (req,res) => steerController.getSteer(req,res));


module.exports = steerRouter;



