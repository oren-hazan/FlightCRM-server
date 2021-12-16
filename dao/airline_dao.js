const rawRepo = require('../data/raw-repo');

// delete airline cascade
const delete_airline_cascade = async (_country_id) => {
 try {
     const result = await rawRepo.getRowResult(`select * from sp_delete_airline_cascade(${_country_id})`)
     return result;
 }   catch (e) {
     console.log(e.message);
 }
}

// delete and reset airlines
const delete_and_reset_airlines = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_and_reset_airlines()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get airline by username
const get_airline_by_username = async (_user_name) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_airline_by_username(${_user_name})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get airline by id
const get_airline_by_id = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_airline_by_id(${_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get all airlines join
const get_all_airlines_join = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_all_airlines_join()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// update airlines
const update_airlines = async (_id , _name , _country_id , _user_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_update_airlines(${_id} ,${_name} , ${_country_id} , ${_user_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// upsert airlines
const upsert_airlines = async (_name , _country_id , _user_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_upsert_airlines(${_name} , ${_country_id} , ${_user_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

   module.exports = {
       delete_airline_cascade,
       delete_and_reset_airlines,
       get_airline_by_id,
       get_airline_by_username,
       get_all_airlines_join,
       update_airlines,
       upsert_airlines
    }
