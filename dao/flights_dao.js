const rawRepo = require('../data/raw-repo');

// get all flights
const get_all_flights = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_all_flights()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// delete and reset flights
const delete_and_reset_flights = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_and_reset_flights()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// delete flight
const delete_flight = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_flight(${_id})`)
        return result.rows[0].sp_delete_flight;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get arrival flights
const get_arrival_flights = async (_country_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_arrival_flights(${_country_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get departure flights
const get_departure_flights = async (_country_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_departure_flights(${_country_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get flight by id
const get_flight_by_id = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_flight_by_id(${_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get flights by airline id
const get_flight_by_airline_id = async (_airline_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_flights_by_airline_id(${_airline_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get flight by parameters
const get_flights_by_parameters = async (_origin_country_id, _destination_country_id, _date) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_flights_by_parameters('${_origin_country_id}', '${_destination_country_id}', '${_date}')`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// update flights
const update_flights = async (_id, _airline_id, _origin_country_id, _destination_country_id, _departure_time, _landing_time, _remaining_tickets) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_update_flights(${_id}, ${_airline_id}, ${_origin_country_id}, ${_destination_country_id}, '${_departure_time}', '${_landing_time}', ${_remaining_tickets})`)
        return result.rows[0].sp_update_flights;
    }   catch (e) {
        console.log(e.message);
    }
   }

// insert flights
const insert_flights = async (_airline_id, _origin_country_id, _destination_country_id, _departure_time, _landing_time, _remaining_tickets) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_insert_flights(${_airline_id}, ${_origin_country_id}, ${_destination_country_id}, '${_departure_time}', '${_landing_time}', ${_remaining_tickets})`)
        return result.rows[0].sp_insert_flights;
    }   catch (e) {
        console.log(e.message);
    }
   }

   module.exports = {
    get_all_flights,
    delete_and_reset_flights,
    delete_flight,
    get_arrival_flights,
    get_departure_flights,
    get_flight_by_airline_id,
    get_flight_by_id,
    get_flights_by_parameters, 
    update_flights,
    insert_flights
   }