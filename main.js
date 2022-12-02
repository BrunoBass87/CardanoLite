const express = require('express');
const Cardano = require('./modules/cardanoApi');
const app = express();


// App setting
app.set('appName','AnetaApi');
app.set('port',2300);
//enable Json 
app.use(express.json());

//get token information
app.get('/tokeninfo/:tokenId', (req, res) => {                      
        Cardano.API.getdataToken(req.params.tokenId).then(val => res.json(val));        
       }
);
//get token history 
app.get('/historyinfo/:tokenId', (req, res) => {                      
    Cardano.API.gethistoryToken(req.params.tokenId).then(val => res.json(val));        
   }
);
//get assets transactions (last 10)
app.get('/assetstransactions/:tokenId', (req, res) => {                      
    Cardano.API.getassetsTransactions(req.params.tokenId).then(val => res.json(val));        
   }
);
// get blockchain health
app.get('/health', (req, res) => {                      
    Cardano.API.getHealth().then(val => res.json(val));        
   }
);
// get pool information
 app.get('/pool/:poolId', (req, res) => {                      
    Cardano.API.getpoolInfo(req.params.poolId).then(val => res.json(val));        
   }
);
// get pool delegator, last 30.
app.get('/pooldelegators/:poolId', (req, res) => {                      
    Cardano.API.getpoolDelegators(req.params.poolId).then(val => res.json(val));        
   }
);

// get stake information
app.get('/stake/:stakeId', (req, res) => {                      
    Cardano.API.getstakeInfo(req.params.stakeId).then(val => res.json(val));        
   }
);
// get the last 20 accounts in a stakeid
app.get('/stakehistory/:stakeId', (req, res) => {                      
    Cardano.API.getstakeHistory(req.params.stakeId).then(val => res.json(val));        
   }
);
// get the last 10 rewards in a stakeid
app.get('/stakerewards/:stakeId', (req, res) => {                      
    Cardano.API.getstakeRewards(req.params.stakeId).then(val => res.json(val));        
   }
);
// get the last 10 withdrawals in a stakeid
app.get('/stakewithdrawals/:stakeId', (req, res) => {                      
    Cardano.API.getstakeWithdrawals(req.params.stakeId).then(val => res.json(val));        
   }
);
// get wallet information
app.get('/walletinfo/:walletId', (req, res) => {                      
    Cardano.API.getsaccountInfo(req.params.walletId).then(val => res.json(val));        
   }
); 
// get last 5 holders
app.get('/holders/:tokeninfo', (req, res) => {                      
    Cardano.API.getHolders(req.params.tokeninfo).then(val => res.json(val));        
   }
); 




//start server 
app.listen(app.get('port'), () =>{
    console.log('listening on port',app.get('port'));
});