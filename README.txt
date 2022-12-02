<npm i> to install modules
-------------------------------------------
example
ctosi address   = a8a1dccea2e378081f2d500d98d022dd3c0bd77afd9dbc7b55a9d21b63544f5349
cneta address   = b34b3ea80060ace9427bda98690a73d33840e27aaa8d6edb7f0c757a634e455441
pool aneta 1    = f5f50f91a3d0da560380ec4e1a612530261c2aaed74a51dfffc485f9
pool aneta 1    = a5cc5b8b27e7f1076b3ec673f12839da911e170a2b819ae602b5e019
-------------------------------------------
-------------------------------------------
-------------------------------------------
-------------------------------------------
===========================================
BACKEND get JSON information
===========================================


/health (blockchain health)
get {
    is_healthy =  true or false
    }

/tokeninfo = token id + hexname
get {
    name,
    description,
    image,
    symbol,
    totalSupply
    }

/historyinfo = token id + hexname 
get {
    tx_has,
    action,
    amount
    }

/assetstransactions = token id + hexname (show the last 10)
get{
    tx_hash,
    tx_index,
    block_height,
    block_time
   } 

/pool = pool id

get {
  pool_id,
  hex,
  vrf_key,
  blocks_minted,
  blocks_epoch,
  live_stake,
  live_size,
  live_saturation,
  live_delegators,
  active_stake,
  active_size,
  declared_pledge,
  live_pledge,
  margin_cost,
  fixed_cost,
  reward_account, *** with this data you can verify the withdrwar and available rewards
  owners:,
  registration,
  retirement    
 }

 /pooldelegators = pool id

 {
   address,
   live_stake 
  }

/stake  =  stake address account (reward account in a pool)
{
  stake_address,
  active,
  active_epoch,
  controlled_amount,
  rewards_sum,
  withdrawals_sum,
  reserves_sum,
  treasury_sum,
  withdrawable_amount, 
  pool_id
 }

/stakehistory = stake address account (the last 20 epoch)
{
    active_epoch,
    amount,
    pool_id
  }

/stakerewards = stake address account (the last 20 epoch)
{
    epoch,
    amount,
    pool_id,
    type
  }

/stakewithdrawals = stake address account (the last 20 epoch)
{
   tx_hash,
   amount     
  }  
  
/walletinfo = wallet address (unit will contain the id of the token, to find out the name you must use the function /tokeninfo to get the name)
{
  address,
    amount: 
        {
            "unit": "lovelace",
            "quantity": "3779870"
        },
  stake_address,
  type,
  script
}       

/holders = tokenid (the las 5 holders (this function its too slow, some time give time out)
 {
        address,
        quantity
    }
