tickets_dao= require('../dao/tickets_dao')
 
 // tickets_dao calls  
 deleteAndResetTickets = async() => {
    try {
        const res = await tickets_dao.delete_and_reset_tickets()
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

deleteTicket = async(_id) => {
    try {
        const res = await tickets_dao.delete_ticket(_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

allTickets = async() => {
    try {
        const res = await tickets_dao.get_all_tickets()
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

allTicketsJoin = async() => {
    try {
        const res = await tickets_dao.get_all_tickets_join()
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

ticketByCustomer = async(_customer_id) => {
    try {
        const res = await tickets_dao.get_ticket_by_customer(_customer_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

ticketById = async(_id) => {
    try {
        const res = await tickets_dao.get_ticket_by_id(_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

updateTickets = async(params) => {
    const {_id, _flight_id, _customer_id} = params
    try {
        const res = await tickets_dao.update_tickets(_id, _flight_id, _customer_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

upsertTickets = async(params) => {
    const {_flight_id, _customer_id} = params
    try {
        const res = await tickets_dao.upsert_tickets(_flight_id, _customer_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {

    deleteAndResetTickets,
    deleteTicket,
    allTickets,
    allTicketsJoin,
    ticketByCustomer,
    ticketById,
    updateTickets,
    upsertTickets
}