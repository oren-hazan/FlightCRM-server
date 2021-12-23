const { Router } = require('express');
anon_ctrl = require('../ctrl/anon_ctrl');
const { requireAuth } = require('../middleware/authMiddleware')

const router = Router();

router.get('/allFlights', requireAuth, anon_ctrl.get_all_flights);
router.get('/allAirlines', requireAuth, anon_ctrl.get_all_airlines_join);
router.get('/airlineById', requireAuth, anon_ctrl.get_airline_by_id);
router.get('/flightsByParameters', requireAuth, anon_ctrl.get_flights_by_parameters);
router.post('/addCustomer', requireAuth, anon_ctrl.insert_customer);
router.get('/allCountries', requireAuth, anon_ctrl.get_all_countries);
router.get('/flightsByAirlineId', requireAuth, anon_ctrl.get_flight_by_airline_id);
router.get('/flightsById', requireAuth, anon_ctrl.get_flights_by_id);
router.get('/departureFlights', requireAuth, anon_ctrl.get_departure_flights);
router.get('/arrivalFlights', requireAuth, anon_ctrl.get_arrival_flights);

module.exports = router;