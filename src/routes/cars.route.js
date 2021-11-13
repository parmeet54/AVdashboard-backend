const express = require('express');
const router = express.Router();

const carController = require('../controllers/cars.controller');

// get all cars
/**
 * GET /cars
 */
router.get('/',carController.getCarsList);

// get car by ID
/**
 * GET /cars/{car_id}
 */
router.get('/:car_id', carController.getCar);

// create new car
/**
 * POST /cars
 */
router.post('/', carController.createCar);

// delete car by car_id
/**
 * DELETE /cars/{car_id}
 */
router.delete('/:car_id', carController.deleteCar);

// update car by car_id
/**
 * PUT /cars/(car_id)
 */
router.put('/:car_id', carController.updateCar);


module.exports = router;