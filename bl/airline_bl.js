 airlines_dao= require('../dao/airline_dao')
 
 // airlines_dao calls
 deleteAirlineCascade = async(_country_id) => {
    try {
        const res = await airlines_dao.delete_airline_cascade(_country_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

deleteAndResetAirlines = async() => {
    try {
        const res = await airlines_dao.delete_and_reset_airlines()
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

airlineById = async(_id) => {
    try {
        const res = await airlines_dao.get_airline_by_id(_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

airlineByUsername = async(_user_name) => {
    try {
        const res = await airlines_dao.get_airline_by_username(_user_name)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

allAirlinesJoin = async() => {
    try {
        const res = await airlines_dao.get_all_airlines_join()
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

updateAirlines = async(params) => {
    const {_id , _name , _country_id , _user_id} = params
    try {
        const res = await airlines_dao.update_airlines(_id , _name , _country_id , _user_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

upsertAirlines = async(params) => {
    const {_name , _country_id , _user_id} = params
    try {
        const res = await airlines_dao.upsert_airlines(_name , _country_id , _user_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {

deleteAirlineCascade,
deleteAndResetAirlines,
airlineById,
airlineByUsername,
allAirlinesJoin,
updateAirlines,
upsertAirlines
}