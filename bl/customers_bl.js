customers_dao = require('../dao/customers_dao')

deleteAndResetCustomers = async() => {
    try {
        const res = await customers_dao.delete_and_reset_customers()
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

deleteCustomersCascade = async(_user_id) => {
    try {
        const res = await customers_dao.delete_customers_cascade(_user_id)
        console.log(res)
        return res;
    } catch (e) {
        console.log(e.message)
    }
    }

allCustomers = async() => {
    try {
        const res = await customers_dao.get_all_customers()
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

allCustomersJoin = async() => { 
    try {
        const res = await customers_dao.get_all_customers_join()
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

customerById = async(_id) => {
    try {
        const res = await customers_dao.get_customer_by_id(_id)
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

customerByUsername = async(_user_name) => {
    try {
        const res = await customers_dao.get_customer_by_username(_user_name)
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

customerByUsernameSetoffAirline = async(_id) => {
    try {
        const res = await customers_dao.get_customer_by_username_setoff_airline(_id)
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

updateCustomers = async(params) => {
    const {_id, _first_name, _last_name, _address, _phone_no, _credit_card_no, _user_id} = params
    try {
        const res = await customers_dao.update_customers(_id, _first_name, _last_name, _address, _phone_no, _credit_card_no, _user_id)
        console.log(res)
        return res;
    } catch (e) {
        console.log(e.message)
    }
    }

insertCustomers = async(params) => {
    const {_first_name, _last_name, _address, _phone_no, _credit_card_no, _user_id} = params
    try {
        const res = await customers_dao.insert_customer(_first_name, _last_name, _address, _phone_no, _credit_card_no, _user_id)
        console.log(res)
        return res;
    } catch (e) {
        console.log(e.message)
    }
    }

    module.exports = {

        deleteAndResetCustomers,
        deleteCustomersCascade,
        allCustomers,
        allCustomersJoin,
        customerById,
        customerByUsername,
        customerByUsernameSetoffAirline,
        updateCustomers,
        insertCustomers
    }