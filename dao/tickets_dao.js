const rawRepo = require('../data/raw-repo');

// delete and reset tickets
const delete_and_reset_tickets = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_and_reset_tickets()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// delete ticket
const delete_ticket = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_ticket(${_id})`)
        return result.rows[0].sp_delete_ticket;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get all tickets
const get_all_tickets = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_all_tickets()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get_all_tickets_join
const get_all_tickets_join = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_all_tickets_join()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get ticket by id
const get_ticket_by_id = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_ticket_by_id(${_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get tickets by customer
const get_ticket_by_customer = async (_customer_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_tickets_by_customer(${_customer_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// update tickets
const update_tickets = async (_id, _flight_id, _customer_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_update_tickets(${_id}, ${_flight_id}, ${_customer_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// insert tickets
const insert_tickets = async (_flight_id, _customer_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_insert_ticket(${_flight_id}, ${_customer_id})`)
        return result.rows[0].sp_insert_ticket;
    }   catch (e) {
        console.log(e.message);
    }
   }

   module.exports = {
       delete_and_reset_tickets,
       delete_ticket,
       get_all_tickets,
       get_all_tickets_join,
       get_ticket_by_customer,
       get_ticket_by_id,
       update_tickets,
       insert_tickets
   }