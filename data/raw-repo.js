const connectedKnex=require('./knex-connector');


const getRowResult=(raw_query)=>connectedKnex.raw(raw_query);

module.exports={
    getRowResult
}   