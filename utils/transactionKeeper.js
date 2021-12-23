const CreateAction = require("../data/clientAction");


const trx_keeper=async (url,fnName,params)=>{

  const action = await CreateAction.create({url,fnName,params, timestamp: new Date()});
  return action;
  
};

const get_all_transactions=async () => {

  const actions=await CreateAction.find({});
  return actions

}

module.exports={
  trx_keeper,
  get_all_transactions
}
