const assert = require('assert'); // for the testing capabilites
const expect = require('chai').expect; // for chai syntax
anonymous = require('../dao/flights_dao');

describe('FlightsTest_suite', function() {
    it('test all flights', async ()=> {
        let res = await anonymous.get_all_flights();
        let actual_result = res.rows[0]._id;
        let expected_result = '1'

    expect(actual_result).to.eql(expected_result)
    })

    it('test flightById', async ()=> {
        let res = await anonymous.get_flight_by_id(1);
        let actual_result = res.rows[0].id;
        let expected_result = '1'
    expect(actual_result).to.eql(expected_result)
    })
})
    
   

