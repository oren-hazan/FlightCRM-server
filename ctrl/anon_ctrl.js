const flight_bl = require('../bl/flights_bl')
const airline_bl = require('../bl/airline_bl')
const country_bl = require('../bl/countries_bl')
const customer_bl = require('../bl/customers_bl')
const {trx_keeper}=require('../utils/transactionKeeper');
const logger=require('../utils/logger');


get_all_airlines_join = async (req, res) => {
    try {
        const result = await airline_bl.allAirlinesJoin();
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

get_airline_by_id = async (req, res) => {
    try {
        _id = req.query
        const result = await airline_bl.airlineById(_id);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

upsert_customer = async (req, res) => {
    try {
        params = req.query
        const result = await customer_bl.upsertCustomer(params);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

get_flights_by_id = async (req, res) => {
    try {
        _id = req.query
        const result = await flight_bl.flightById(_id);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

get_flight_by_airline_id  = async (req, res) => {
    try {
        _id = req.query
        const result = await flight_bl.airlineById('_id');
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

get_flights_by_parameters = async (req, res) => {
    try {
        params = req.query
        const result = await flight_bl.flightsByParameters(params);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

get_arrival_flights = async (req, res) => {
    try {
        _country_id = req.query
        const result = await flight_bl.arrivalFlights(_country_id);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

get_departure_flights = async (req, res) => {
    try {
        _country_id = req.query
        const result = await flight_bl.departureFlights(_country_id);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

get_all_countries = async (req, res) => {
    try {
        const result = await country_bl.allCountries();
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
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
    upsert_customer,
    get_all_countries,
    get_flight_by_airline_id,
    get_flights_by_id,
    get_departure_flights,
    get_arrival_flights
}