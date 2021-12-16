 users_dao = require('../dao/users_dao')
 
 //users_dao calls
 deleteAndResetUsers = async() => {
    try {
        const res = await users_dao.delete_and_reset_users()
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
    }

deleteUsers = async(_id) => {
    try {
        const res = await users_dao.delete_users(_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
    }

allUsers = async() => {
    try {
        const res = await users_dao.get_all_users()
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
    }

userById = async(_id) => {
    try {
        const res = await users_dao.get_user_by_id(_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
    }

userByUsername = async(_username) => {
    try {
        const res = await users_dao.get_user_by_username(_username)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
    }

updateUsers = async(params) => {
    const {_id, _username, _password, _email} = params
    try {
        const res = await users_dao.update_users(_id, _username, _password, _email)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
    }

upsertUsers = async(params) => {
    const {_username, _password, _email} = params
    try {
        const res = await users_dao.upsert_users(_username, _password, _email)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
    }

    module.exports = {
        deleteAndResetUsers,
        deleteUsers,
        allUsers,
        userById,
        userByUsername,
        updateUsers,
        upsertUsers
    }