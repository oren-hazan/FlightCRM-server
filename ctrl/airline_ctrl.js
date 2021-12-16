airline_bl = require('../bl/airline_bl')
flight_bl = require('../bl/flights_bl')


update_airlines = async (req, res) => {
    try {
        params = req.query;
        const result = await airline_bl.updateAirlines(params);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
} 

upsert_flights = async (req, res) => {
    try {
        params = req.query;
        const result = await flight_bl.upsertFlights(params);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

update_flights = async (req, res) => {
    try {
        params = req.query;
        const result = await flight_bl.updateFlights(params);
        console.log(result)
        res.send(result);
    } catch(e) {
        console.log(e.message)
    }
}

delete_flight_by_id = async (req, res) => {
    try {
        _id = req.query;
        const result = await flight_bl.deleteFlightById(_id);
        console.log(result)
        res.send(result);
    } catch(e) {
        console.log(e.message)
    }
}

module.exports = {
    update_airlines,
    upsert_flights,
    update_flights,
    delete_flight_by_id
}