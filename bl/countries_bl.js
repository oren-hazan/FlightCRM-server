countries_dao= require('../dao/countries_dao')

   // countries_dao calls
   deleteAndResetCountries = async() => {
    try {
        const res = await countries_dao.delete_and_reset_countries()
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

deleteCountry = async(_id) => {
    try {
        const res = await countries_dao.delete_country(_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

allCountries = async() => {
    try {
        const res = await countries_dao.get_all_countries()
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

countryById = async(_id) => {
    try {
        const res = await countries_dao.get_country_by_id(_id)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

updateCountries = async(params) => {
    const {_id, _name} = params
    try {
        const res = await countries_dao.update_countries(_id, _name)
        console.log(res.rows)
    } catch (e) {
        console.log(e.message)
    }
}

module.exports = {
    deleteAndResetCountries,
    deleteCountry,
    allCountries,
    countryById,
    updateCountries,
}