# Go High Level Transaction Microservice 

This is a simple transaction microservice built with Node.js, Express.js, MongoDB, and services are authorized with JSON Web Token (JWT).
Transaction service is authorized with shared session with auth microservice.

### Requirements
- Node.js and npm
- MongoDB

### Installation
- Clone repository
git clone https://github.com/aksaxena1991/gohighlevel-transaction-service.git

- Install dependencies
cd gohighlevel-transaction-service
npm install

- Create a [.env] file in the root directory of the project, and add the following environment variables:
PORT=3002
MONGODB_URI=mongodb://localhost:27017/transactionService
JWT_SECRET=goHighLevel

- Start server
npm run start

### Usage
- Create Transaction
Navigate to http://localhost:3001/transaction/createTransaction.
Enter the transaction amount.
Click the "Submit" button.
Transaction will be added with respect to the user and its walletId

- Get Wallet Transactions
Navigate to http://localhost:3001/transaction/getTransactions.
List of all successful and unsuccessful transactions with respect to the walletId with pagination.
Click the "Submit" button.

### Features
The customer transaction application has the following features:

- Create Transaction: Users can create their single wallet.
- List of All Transactions: If wallet is created and it has some transactions so you can view all transactions.
