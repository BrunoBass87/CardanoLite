// Cardano Api
const Blockfrost = require("@blockfrost/blockfrost-js");

//create instace for blockfrost
const API = new Blockfrost.BlockFrostAPI({
    projectId: "mainnetOE4cMTfbMhgVwZvG5Zq8jVORaWMi3WZy", // please use your api key
  });


class CardanoExplorer {
    //token info
    async getdataToken(token) {
        const datason = {  }
        try {                 
                let j_son =  await API.assetsById(token);                
                datason["name"] = j_son.onchain_metadata["name"];
                datason["image"] = j_son.onchain_metadata["image"];
                datason["symbol"] = j_son.onchain_metadata["symbol"];
                datason["description"] = j_son.onchain_metadata["description"];
                datason["totalSupply"] = j_son.onchain_metadata["totalSupply"];                  
                return datason;

            }
        catch (err) {
                return err;
          }
      }

      //token history tx
      async gethistoryToken(token) {
        const datason = {  }
        try {                 
                let j_son =  await API.assetsHistory(token);      
                datason["tx_hash"] = j_son[0].tx_hash;
                datason["action"] = j_son[0].action;
                datason["amount"] = j_son[0].amount;                
                return datason;                                     
            }
        catch (err) {
                return err;
          }
      }

      //get token last transactions 
      async getassetsTransactions(token) {        
        try {                 
                let j_son =  await API.assetsTransactions(token,{ page: 1, count: 10, order: "desc" });                      
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }
      // network health
      async getHealth() {        
        try {                 
                let health =  await API.health(); 
                return health;                                     
            }
        catch (err) {
                return err;
          }
      }      
      
      // get pool information
      async getpoolInfo(idpool) {
        const datason = {  }
        try {                 
                let j_son =  await API.poolsById(idpool);               
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }
     // get last 30 delegator pool 
     async getpoolDelegators(idpool) {
        const datason = {  }
        try {                 
                let j_son =  await API.poolsByIdDelegators(idpool,{ page: 1, count: 30, order: "desc" });               
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }      

      // get stake information
      async getstakeInfo(idstake) {        
        const datason = {  }
        try {                 
                let j_son =  await API.accounts(idstake);
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }

      // get stake hitory by epoch
      async getstakeHistory(idstake) {        
        try {            
                let j_son =  await API.accountsHistory(idstake,{ page: 1, count: 20, order: "desc" });                                      
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }
      // get rewards from stake
      async getstakeRewards(idstake) {        
        try {           
                let j_son =  await API.accountsRewards(idstake,{ page: 1, count: 20, order: "desc" });                                      
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }

      //get withdrawals from stake
      async getstakeWithdrawals(idstake) {        
        try {            
                let j_son =  await API.accountsWithdrawals(idstake,{ page: 1, count: 20, order: "desc" });                                      
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }      
      
      //get wallet information  
      async getsaccountInfo(walletid) {        
        try {            
                let j_son =  await API.addresses(walletid);                                      
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }      

      //get holders from a specific token (too slow!)
      async getHolders(token) {        
        try {                
                let j_son =  await API.assetsAddresses(token,{ page: 1, count: 5, order: "desc" });                                      
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }            
      


}


module.exports = {
"API": new CardanoExplorer() 
}

 

  
  
