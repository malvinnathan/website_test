// A function that define the routes to the targeted data in the database and collect the designated data from the controller
const express = require('express');
const drawbarRouter = express.Router();
const drawbarController = require('../controllers/drawbarController');

// get the data from drawbarController 
drawbarRouter.get("/getdrawbar/:id", (req,res) => drawbarController.getDrawbar(req,res));


module.exports = drawbarRouter;



