const airline_bl = require('../bl/airline_bl')
const customer_bl = require('../bl/customers_bl')
const user_bl = require('../bl/users_bl')

upsert_airlines = async (req, res) => {
    try {
        params = req.query;
        const result = await airline_bl.upsertAirlines(params);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

update_airlines = async (req, res) => {
    try {
        params = req.query;
        const result = await airline_bl.updateAirlines(params);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

delete_airline_cascade = async (req, res) => {
    try {
        _country_id = req.query;
        const result = await airline_bl.deleteAirlineCascade(_country_id);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

all_customers_join = async (req, res) => {
    try {
        const result = await customer_bl.allCustomersJoin();
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

delete_customers_cascade = async (req, res) => {
    try {
        _user_id = req.query;
        const result = await customer_bl.updateCustomers(_user_id);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

get_all_users = async (req, res) => {
    try {
        const result = await user_bl.allUsers();
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

user_by_id = async (req, res) => {
    try {
        _id = req.query;
        const result = await user_bl.userById(_id);
        console.log(result)
        res.send(result);
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    upsert_airlines,
    update_airlines,
    delete_airline_cascade,
    all_customers_join,
    update_customers,
    delete_customers_cascade,
    get_all_users,
    user_by_id
}