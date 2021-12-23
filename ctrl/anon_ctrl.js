const flight_bl = require('../bl/flights_bl')
const airline_bl = require('../bl/airline_bl')
const country_bl = require('../bl/countries_bl')
const customer_bl = require('../bl/customers_bl')
const {trx_keeper}=require('../utils/transactionKeeper');
const logger=require('../utils/logger');


get_all_airlines_join = async (req, res) => {
    try {
        const paramsAr = [];
        const action = await trx_keeper(req.url, 'allAirlines', paramsAr)
        if(action) {
            const result = await airline_bl.allAirlinesJoin();
            if(result instanceof Error){
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error get_all_airlines: ${e.message}`
        })
    }
}

get_airline_by_id = async (req, res) => {
    try {
        _id = req.query.id
        paramsAr = Object.values(_id)
        const action = await trx_keeper(req.url, 'airlineById', paramsAr)
        if(action) {
             const result = await airline_bl.airlineById(_id);
             if (result instanceof Error) {
                 res.status(500),json(result.message);
             }
             res.status(200).json(result);
         }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error get_airline_by_id: ${e.message}`
        })
    }
}

insert_customer = async (req, res) => {
    try {
        params = req.body
        paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'insert_customer', paramsAr);
        if(action) {
            const result = await customer_bl.insertCustomers(params);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error upsert_customer: ${e.message}`
        })
    }
}

get_flights_by_id = async (req, res) => {
    try {
        _id = req.query.id
        paramsAr = Object.values(_id)
        const action = await trx_keeper(req.url, 'flightById', paramsAr);
        if(action) {
            const result = await flight_bl.flightById(_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error get_flights_by_id: ${e.message}`
        })
    }
}

get_flight_by_airline_id  = async (req, res) => {
    try {
        _airline_id = req.query.airline_id
        paramsAr = Object.values(_airline_id)
        const action = await trx_keeper(req.url, 'get_flight_by_airline_id', paramsAr);
        if(action) {
            const result = await flight_bl.flightByAirlineId(_airline_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error get_flight_by_airline_id: ${e.message}`
        })
    }
}

get_flights_by_parameters = async (req, res) => {
    try {
        params = req.query
        paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'get_flights_by_parameters', paramsAr);
        if(action) {
            const result = await flight_bl.flightsByParameters(params);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    7} catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error get_flights_by_parameters: ${e.message}`
        })
    }
}

get_arrival_flights = async (req, res) => {
    try {
        _country_id = req.query.country_id
        paramsAr = Object.values(_country_id)
        const action = await trx_keeper(req.url, 'get_arrival_flights', paramsAr);
        if (action) {
            const result = await flight_bl.arrivalFlights(_country_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error', 
            message: `error get_arrival_flight: ${e.message}`
        })
    }
}

get_departure_flights = async (req, res) => {
    try {
        _country_id = req.query.country_id
        paramsAr = Object.values(_country_id)
        const action = await trx_keeper(req.url, 'get_departure_flights', paramsAr);
        if (action) {
            const result = await flight_bl.departureFlights(_country_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error', 
            message: `error get_departure_flights: ${e.message}`
        })
    }
}

get_all_countries = async (req, res) => {
    try {
        const paramsAr = [];
        const action = await trx_keeper(req.url, 'allCountries', paramsAr)
        if (action) {
                const result = await country_bl.allCountries();
                if (result instanceof Error) {
                    res.status(500).json(result.message)
                }
                res.status(200).json(result);
          }
             } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error get_all_countries: ${e.message}`
        })
    }
}

get_all_flights = async (req, res) => {
    try {
        const paramsAr=[];
        const action= await trx_keeper(req.url,'allFlights', paramsAr);
        if(action) {
                const result = await flight_bl.allFlights();
                if(result instanceof Error) {  
                    res.status(500).json(result.message)
                }
                res.status(200).json(result);
            }
               } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error get_all_flights: ${e.message}`
        })
         }
    }    


module.exports= {
    get_all_flights,
    get_all_airlines_join,
    get_airline_by_id,
    get_flights_by_parameters,
    insert_customer,
    get_all_countries,
    get_flight_by_airline_id,
    get_flights_by_id,
    get_departure_flights,
    get_arrival_flights
}