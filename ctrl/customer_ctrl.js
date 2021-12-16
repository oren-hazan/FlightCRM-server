const customer_bl = require('../bl/customers_bl')
const ticket_bl = require('../bl/tickets_bl')

get_customer_by_id = async (req, res) => {
    try {
        _id = req.query;
        const result = await customer_bl.customerById(_id);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

update_customers = async (req, res) => {
    try {
        params = req.query;
        const result = await customer_bl.updateCustomers(params);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

ticket_by_customer = async (req, res) => {
    try {
        _customer_id = req.query;
        const result = await ticket_bl.ticketByCustomer(_customer_id);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

upsert_tickets = async (req, res) => {
    try {
        params = req.query;
        const result = await ticket_bl.upsertTickets(params);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

delete_ticket = async (req, res) => {
    try {
        _id = req.query;
        const result = await ticket_bl.deleteTicket(_id);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    get_customer_by_id,
    update_customers,
    ticket_by_customer,
    upsert_tickets,
    delete_ticket
}