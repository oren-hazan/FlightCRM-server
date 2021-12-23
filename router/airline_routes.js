const { Router } = require('express');
airline_ctrl = require('../ctrl/airline_ctrl');
const { requireAuth } = require('../middleware/authMiddleware')

const router = Router();

router.put('/updateAirline', requireAuth, airline_ctrl.update_airlines);
router.post('/addFlight', requireAuth, airline_ctrl.insert_flights);
router.put('/updateFlight', requireAuth, airline_ctrl.update_flights);
router.delete('/deleteFlightById', requireAuth, airline_ctrl.delete_flight_by_id);

module.exports = router;