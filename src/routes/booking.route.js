const express = require('express');
const router = express.Router();

const bookingController = require('../controllers/booking.controller');

// get all bookings
/**
 * GET /bookings
 */
router.get('/',bookingController.getBookingsList);

// get booking by booking_id
/**
 * GET /bookings/{booking_id}
 */
router.get('/:booking_id', bookingController.getBooking);

// create new booking
/**
 * POST /bookings
 */
router.post('/', bookingController.createBooking);

// delete booking by booking_id
/**
 * DELETE /bookings/{booking_id}
 */
 router.delete('/:booking_id', bookingController.deleteBooking);


 // update booking by booking_id
/**
 * PUT /bookings/(booking_id)
 */
router.put('/:booking_id', bookingController.updateBooking);

module.exports = router;