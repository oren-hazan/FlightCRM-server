flights_dao = require('../dao/flights_dao')

 // flights_dao calls
 allFlights = async() => {
    try {
        const res = await flights_dao.get_all_flights()
        console.log(res.rows)
    return res.rows;
    } catch (e) {
        console.log(e.message)
    }
}

deleteAndResetFlights = async() => {
    try {
        const res = await flights_dao.delete_and_reset_flights()
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

deleteFlightById = async(_id) => {
    try {
        const res = await flights_dao.delete_flight(_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

arrivalFlights = async(_country_id) => {
    try {
        const res = await flights_dao.get_arrival_flights(_country_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

departureFlights = async(_country_id) => {
    try {
        const res = await flights_dao.get_departure_flights(_country_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

flightByAirlineId = async(_airline_id) => {
    try {
        const res = await flights_dao.get_flight_by_airline_id(_airline_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

flightById = async(_id) => {
    try {
        const res = await flights_dao.get_flight_by_id(_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

flightsByParameters = async(params) => {
    const {_origin_country_id, _destination_country_id, _date} = params
    try {
        const res = await flights_dao.get_flights_by_parameters(_origin_country_id, _destination_country_id, _date)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

updateFlights = async(params) => {
    const {_id, _airline_id, _origin_country_id, _destination_country_id, _departure_time, _landing_time, _remaining_tickets} = params
    try {
        const res = await flights_dao.update_flights(_id, _airline_id, _origin_country_id, _destination_country_id, _departure_time, _landing_time, _remaining_tickets)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

upsertFlights = async(params) => {
    const {_airline_id, _origin_country_id, _destination_country_id, _departure_time, _landing_time, _remaining_tickets} = params
    try {
        const res = await flights_dao.upsert_flights(_airline_id, _origin_country_id, _destination_country_id, _departure_time, _landing_time, _remaining_tickets)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}


module.exports = {
    allFlights,
    deleteAndResetFlights,
    deleteFlightById,
    arrivalFlights,
    departureFlights,
    flightByAirlineId,
    flightById,
    flightsByParameters,
    updateFlights,
    upsertFlights
}