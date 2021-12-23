const users_bl = require('../bl/users_bl');
const jwt = require('jsonwebtoken');
const config = require('config');

const tryLogin = async (params) => {
    let = token = null;
    let = userData = null;
    try {
        const user = await users_bl.userByUsername(params._username)
        console.log(params)
        if(user) {
            if(user.password===params._password && user.email===params._email) {
                userData = user;
                token = createToken(user.id)
            }
            else {
                throw Error('incorrect password')
            }
        }
        else {
            throw Error('incorrect user')
        }
        return {userData, token}
    } catch (e) {
        throw e;
    }
}

const trySignup = async (params) => {
    let token = null;
    let = userData = null;
    try {
        const user = await users_bl.userByUsername(params._username)
        if(user) {
            throw Error('user exist')
        }
        else {
            const id = await users_bl.signupUser(params);
            if(id) {
                const new_user = await users_bl.userByUsername(params._username);
                token = createToken(new_user.id)
                userData = new_user
            }
            else {
                throw Error('error insertUser')
            }
        }
    return {userData, token}
    } catch (e) {
       throw e
    }
}

const createToken = (_id) => {
    return jwt.sign({_id}, config.get('privateKey'), {expiresIn: config.get('ttl')});
}

module.exports = {
    tryLogin, 
    trySignup
}