#BLOCKCHAIN POC
> A simple implementation of a POW blockchain which demonstrates mining
> pools of transactions

###SETUP
In order to opperate this application you will need to run 2 instances in
seperate terminals.

The first can be run normally with 'npm run dev'
The second will need different parameters, the following should work
'HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev'

Once both instances are running, an appliation like Postman is required to
interact with each instance.


An example in Postman is as follows:

Send a GET request to localhost:3002/public-key
The response will contain that instances public wallet address which can be used
by the other instance to send tokens to that address.

Copy that address and crate a new POST request to localhost:3001/transact
Under the Body tab select RAW, JSON the craft a message as follows:

{
   "recipient": "the address you copied earlier",
   "amount": 50
}


Once sent, the transaction can be seen in either peers transaction pool by
sending a GET request to localhost:3001/transactions  (alternatively
localhost:3002)


Now that the transaction is in the transaction pool, it can be mined into a
block for a reward. Either peer can mine the block, for example:

Send a GET request to localhost:3001/mine-transactions

The response should contain the mined block which will contain the prior
transactions. The peer that mined the block should also have recieved a reward
credited to their balance. This can be confirmed by viewing the response from:




