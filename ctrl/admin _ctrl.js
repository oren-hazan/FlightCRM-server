const airline_bl = require('../bl/airline_bl')
const customer_bl = require('../bl/customers_bl')
const user_bl = require('../bl/users_bl')
const {trx_keeper}=require('../utils/transactionKeeper');
const logger=require('../utils/logger');
const { get_user_by_username } = require('../dao/users_dao');

insert_airlines = async (req, res) => {
    try {
        params = req.body;
        paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'insert_airlines', paramsAr);
        if (action) {
            console.log(params)
            const result = await airline_bl.insertAirlines(params);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error upsert_airlines : ${e.message}`
        })
    }
}

update_airlines = async (req, res) => {
    try {
        params = req.body;
        console.log(params)
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
            message: `error update_airlines : ${e.message}`
        })
    }
}

delete_airline_cascade = async (req, res) => {
    try {
        _country_id = req.body._country_id;
        paramsAr = Object.values(_country_id)
        const action = await trx_keeper(req.url, 'delete_airline_cascade', paramsAr);
        if (action) {
            const result = await airline_bl.deleteAirlineCascade(_country_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error delete_airline_cascade : ${e.message}`
        })
    }
}

all_customers_join = async (req, res) => {
    try {
        const paramsAr = [];
        const action = await trx_keeper(req.url, 'all_customers_join', paramsAr)
        if(action) {
            const result = await customer_bl.allCustomersJoin();
            if(result instanceof Error){
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error all_customers_join: ${e.message}`
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
            message: `error update_customers : ${e.message}`
        })
    }
}

delete_customers_cascade = async (req, res) => {
    try {
        _user_id = req.body._user_id;
        paramsAr = Object.values(_user_id)
        const action = await trx_keeper(req.url, 'delete_customers_cascade', paramsAr);
        if (action) {
            const result = await customer_bl.deleteCustomersCascade(_user_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error delete_customers_cascade : ${e.message}`
        })
    }
}

get_all_users = async (req, res) => {
    try {
        const paramsAr = [];
        const action = await trx_keeper(req.url, 'get_all_users', paramsAr)
        if(action) {
            const result = await user_bl.allUsers();
            if(result instanceof Error){
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error get_all_users: ${e.message}`
        })
    }
}

user_by_id = async (req, res) => {
    try {
        _id = req.query.id;
        paramsAr = Object.values(_id)
        const action = await trx_keeper(req.url, 'user_by_id', paramsAr);
        if (action) {
            const result = await user_bl.userById(_id);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error user_by_id : ${e.message}`
        })
    }
}

user_by_username = async (req, res) => {
    try {
        params = req.body._username
        paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'user_by_username', paramsAr);
        if(action) {
            const result = await user_bl.userByUsername(params);
            if (result instanceof Error) {
                res.status(500).json(result.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error user_by_username : ${e.message}`
        })
    }
}

insert_users = async (req, res) => {
    try {
        params = req.body
        const paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'insertUser', paramsAr);
        if(action) { 
            const result = await user_bl.insertUsers(params)
            if (result instanceof Error) {
                res.status(500).json(e.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error upsert users : ${e.message}`
        })
    }
}

signup_user = async (req, res) => {
    try {
        params = req.body
        const paramsAr = Object.values(params)
        const action = await trx_keeper(req.url, 'signupUser', paramsAr);
        if(action) { 
            const result = await user_bl.signupUser(params)
            if (result instanceof Error) {
                res.status(500).json(e.message)
            }
            res.status(200).json(result);
        }
    } catch (e) {
        console.log(e.message)
        logger.log({
            level: 'error',
            message: `error upsert users : ${e.message}`
        })
    }
}

module.exports = {
    insert_airlines,
    update_airlines,
    delete_airline_cascade,
    all_customers_join,
    update_customers,
    delete_customers_cascade,
    get_all_users,
    user_by_id,
    user_by_username,
    insert_users, 
    signup_user
}