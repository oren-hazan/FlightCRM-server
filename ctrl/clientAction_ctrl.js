const {get_all_transactions}=require('../utils/transactionKeeper');

module.exports.get_all_transactions = async (req, res) => {
    try { 
        var result = await get_all_transactions();
        if(result instanceof Error) {  
            res.status(500).json(result.message)
         }
          res.status(200).json(result);
    }
    catch (e) {
        res.status(400).json({e});
    }

}