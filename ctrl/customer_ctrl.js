const customer_bl = require('../bl/customers_bl')
const ticket_bl = require('../bl/tickets_bl');
const logger = require('../utils/logger');const {trx_keeper}=require('../utils/transactionKeeper');

get_customer_by_id = async (req, res) => {
    try {
        _id = req.query.id;
        paramsAr = Object.values(_id)
        const action = await trx_keeper(req.url, 'get_customer_by_id', paramsAr);
        if (action) {
            const result = await customer_bl.customerById(_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error get_customer_by_id: ${e.message}`
        })
    }
}

update_customers = async (req, res) => {
    try {
        params = req.body;
        paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'update_customers', paramsAr);
        if (action) {
            const result = await customer_bl.updateCustomers(params);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error update_customers: ${e.message}`
        })
    }
}

ticket_by_customer = async (req, res) => {
    try {
        _customer_id = req.query.customer_id;
        paramsAr = Object.values(_customer_id)
        const action = await trx_keeper(req.url, 'ticket_by_customer', paramsAr);
        if (action) {
            const result = await ticket_bl.ticketByCustomer(_customer_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error ticket_by_customer: ${e.message}`
        })
    }
}

insert_tickets = async (req, res) => {
    try {
        params = req.body;
        paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'insert_tickets', paramsAr);
        if (action) {
            const result = await ticket_bl.insertTickets(params);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error upsert_tickets: ${e.message}`
        })
    }
}

delete_ticket = async (req, res) => {
    try {
        _id = req.body._id;
        paramsAr = Object.values(_id)
        const action = await trx_keeper(req.url, 'delete_ticket', paramsAr);
        if (action) {
            const result = await ticket_bl.deleteTicket(_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error delete_ticket: ${e.message}`
        })
    }
}

module.exports = {
    get_customer_by_id,
    update_customers,
    ticket_by_customer,
    insert_tickets,
    delete_ticket
}