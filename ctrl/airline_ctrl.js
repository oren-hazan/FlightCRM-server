airline_bl = require('../bl/airline_bl')
flight_bl = require('../bl/flights_bl')
const {trx_keeper}=require('../utils/transactionKeeper');
const logger=require('../utils/logger');


update_airlines = async (req, res) => {
    try {
        params = req.body;
        paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'update_airlines', paramsAr);
        if (action) {
            const result = await airline_bl.updateAirlines(params);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error update_airlines: ${e.message}`
        })
    }
} 

insert_flights = async (req, res) => {
    try {
        params = req.body;
        paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'insert_flights', paramsAr);
        if(action) {
            const result = await flight_bl.insertFlights(params);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error insert_flights : ${e.message}`
        })
    }
}

update_flights = async (req, res) => {
    try {
        params = req.body;
        paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'update_flights', paramsAr);
        if(action) {
            const result = await flight_bl.updateFlights(params);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error update_flights : ${e.message}`
        })
    }
}

delete_flight_by_id = async (req, res) => {
    try {
        _id = req.body._id;
        paramsAr = Object.values(_id)
        const action = await trx_keeper(req.url, 'delete_flight_by_id', paramsAr);
        if(action) {
            const result = await flight_bl.deleteFlightById(_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch(e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error delete_flight_by_id : ${e.message}`
        })
    }
}

module.exports = {
    update_airlines,
    insert_flights,
    update_flights,
    delete_flight_by_id
}