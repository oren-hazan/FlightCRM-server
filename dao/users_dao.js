const rawRepo = require('../data/raw-repo');

// delete and reset users
const delete_and_reset_users = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_and_reset_users()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// delete users
const delete_users = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_delete_users(${_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get all users
const get_all_users = async () => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_all_users()`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get user by id
const get_user_by_id = async (_id) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_user_by_id(${_id})`)
        return result;
    }   catch (e) {
        console.log(e.message);
    }
   }

// get user by username
const get_user_by_username = async (_username) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_get_user_by_username('${_username}')`)
        return result.rows[0];
    }   catch (e) {
        console.log(e.message);
    }
   }

// update users
const update_users = async (_id, _username, _password, _email) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_update_users(${_id}, '${_username}', '${_password}', '${_email}')`)
        return result.rows[0].sp_update_users;
    }   catch (e) {
        console.log(e.message);
    }
   }

// insert users
const insert_users = async (_username, _password, _email, _rule) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_insert_user('${_username}', '${_password}', '${_email}', '${_rule}')`);
        return result.rows[0].sp_insert_user;
    }   catch (e) {
        console.log(e.message);
    }
   }

   // signup users
const signup_user = async (_username, _password, _email) => {
    try {
        const result = await rawRepo.getRowResult(`select * from sp_signup_user('${_username}', '${_password}', '${_email}')`);
        return result.rows[0].sp_signup_user;
    }   catch (e) {
        console.log(e.message);
    }
   }

   module.exports = {
       delete_and_reset_users,
       delete_users,
       get_all_users,
       get_user_by_id,
       get_user_by_username,
       update_users,
       insert_users,
       signup_user
   }