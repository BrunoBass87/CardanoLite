// Cardano Api
const Blockfrost = require("@blockfrost/blockfrost-js");

//create instace for blockfrost
const API = new Blockfrost.BlockFrostAPI({
    projectId: "mainnetOE4cMTfbMhgVwZvG5Zq8jVORaWMi3WZy",
  });


//Ctosi address = 
//Ctosi = 

class CardanoExplorer {

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

      async getassetsTransactions(token) {        
        try {                 
                let j_son =  await API.assetsTransactions(token,{ page: 1, count: 10, order: "desc" });                      
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }

      async getHealth() {        
        try {                 
                let health =  await API.health(); 
                return health;                                     
            }
        catch (err) {
                return err;
          }
      }      

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

      async getstakeHistory(idstake) {        
        try {             
                console.log("asdas");
                let j_son =  await API.accountsHistory(idstake,{ page: 1, count: 20, order: "desc" });                                      
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }

      async getstakeRewards(idstake) {        
        try {           
                let j_son =  await API.accountsRewards(idstake,{ page: 1, count: 20, order: "desc" });                                      
                return j_son;                                     
            }
        catch (err) {
                return err;
          }
      }

      async getstakeWithdrawals(idstake) {        
        try {            
                let j_son =  await API.accountsWithdrawals(idstake,{ page: 1, count: 20, order: "desc" });                                      
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

 

  
  