const rawRepo = require('../data/raw-repo');

// delete and reset countries
const delete_and_reset_countries = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_and_reset_countries()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// delete country
const delete_country = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_country(${_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get all countries
const get_all_countries = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_all_countries()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get country by id
const get_country_by_id = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_country_by_id(${_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// update countries
const update_countries = async (_id, _name) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_update_countries(${_id}, '${_name}')`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

   module.exports = {
       delete_and_reset_countries,
       delete_country,
       get_all_countries, 
       get_country_by_id, 
       update_countries
   }
