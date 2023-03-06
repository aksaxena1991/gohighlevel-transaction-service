import { Router } from 'express';
import TransactionController from '../controllers/transaction.controller';
import {validateAllTransactionByWallet, validateAllTransactions, validateCreateTransaction, validateGetTransactionById} from '../validations/transaction.validation';

const transactionRoutes = Router();

const transactionController = new TransactionController();

transactionRoutes.get('/getTransaction/:page/:walletId',validateAllTransactionByWallet,transactionController.getAllTransactionsByWalletId);
transactionRoutes.get('/getTransaction/:id',validateGetTransactionById,transactionController.getTransactionById);
transactionRoutes.get('/getTransactions',validateAllTransactions, transactionController.getAllTransactions);
transactionRoutes.post('/createTransaction',validateCreateTransaction, transactionController.createTransaction);



export default transactionRoutes;