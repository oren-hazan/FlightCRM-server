 users_dao = require('../dao/users_dao')
 
 //users_dao calls
 deleteAndResetUsers = async() => {
    try {
        const res = await users_dao.delete_and_reset_users()
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

deleteUsers = async(_id) => {
    try {
        const res = await users_dao.delete_users(_id)
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

allUsers = async() => {
    try {
        const res = await users_dao.get_all_users()
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

userById = async(_id) => {
    try {
        const res = await users_dao.get_user_by_id(_id)
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

userByUsername = async(_username) => {
    try {
        const res = await users_dao.get_user_by_username(_username)
        return res;
    } catch (e) {
        console.log(e.message)
        return new Error('username not exists')
    }
    }

updateUsers = async(params) => {
    const {_id, _username, _password, _email, _rule} = params
    try {
        const res = await users_dao.update_users(_id, _username, _password, _email, _rule)
        console.log(res.rows)
        return res.rows;
    } catch (e) {
        console.log(e.message)
    }
    }

insertUsers = async(params) => {
    const {_username, _password, _email, _rule} = params
    try {
        const res = await users_dao.insert_users(_username, _password, _email, _rule)
        return res;
    } catch (e) {
        console.log(e.message)
    }
    }

    signupUser = async(params) => {
        const {_username, _password, _email} = params
        try {
            const res = await users_dao.signup_user(_username, _password, _email)
            return res;
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
        insertUsers, 
        signupUser
    }