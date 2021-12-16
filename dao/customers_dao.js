const rawRepo = require('../data/raw-repo');

// delete and reset customers
const delete_and_reset_customers = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_and_reset_customers()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// delete customers cascade
const delete_customers_cascade = async (_user_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_customers_cascade(${_user_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get all customers
const get_all_customers = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_all_customers()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get all customers join
const get_all_customers_join = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_all_customers_join()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get customer by id
const get_customer_by_id = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_customer_by_id()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get customer by username SETOFF airline
const get_customer_by_username_setoff_airline = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_customer_by_username(${_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get customer by username
const get_customer_by_username = async (_user_name) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_customer_by_username(${_user_name})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// update customers
const update_customers = async (_id, _first_name, _last_name, _address, _phone_no, _credit_card_no, _user_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_update_customers(${_id}, ${_first_name}, ${_last_name}, ${_address}, ${_phone_no}, ${_credit_card_no}, ${_user_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// upsert customer
const upsert_customer = async (_first_name, _last_name, _address, _phone_no, _credit_card_no, _user_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_upsert_customer(${_first_name}, ${_last_name}, ${_address}, ${_phone_no},${_address}, ${_phone_no}, ${_credit_card_no}, ${_user_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

   module.exports = {
delete_and_reset_customers,
delete_customers_cascade,
get_all_customers,
get_all_customers_join,
get_customer_by_id,
get_customer_by_username,
get_customer_by_username_setoff_airline,
update_customers,
upsert_customer
   }

