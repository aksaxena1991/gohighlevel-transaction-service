import { Request, Response, NextFunction } from 'express';
import TransactionModel from "../models/transaction.model";
import crypto from "crypto";
import axios from 'axios';

class TransactionController {
  async getAllTransactions(req: Request, res: Response, next: NextFunction) {
    try {
      const { page } = req.params || req.query;

      const limit = 10;
      await TransactionModel.find().skip((+limit * +page) - +limit).limit(+limit).exec((err_1, data) => {

        if (err_1) {
          return res.status(200).json({
            message: err_1,
            code: 200,
            data: data,
          });
        } else {
          TransactionModel.count().exec((err_2, count) => {
            const totalPages = Math.ceil(count / limit);
            if (err_2) return res.status(500).json({
              message: err_2,
              code: 500
            })
            else if (data.length > 0) {

              return res.status(200).json({
                message: "List of all transactions!",
                code: 200,
                data: data,
                currentPage: page,
                totalPages: totalPages,
                totalRecords: count
              });
            }
          })
        }
      })
    } catch (err) {
      next(err);
    }
  }

  async getAllTransactionsByWalletId(req: Request, res: Response, next: NextFunction) {
    try {

      const { page, walletId } = req.params;
      const limit = 10;

      await TransactionModel.find({ walletId: walletId }).skip((+limit * +page) - +limit).limit(+limit).exec((err_1, data) => {

        if (err_1) {
          return res.status(200).json({
            message: err_1,
            code: 200,
            data: data,
          });
        } else {
          TransactionModel.find({ walletId: walletId }).count().exec((err_2, count) => {
            const totalPages = Math.ceil(count / limit);
            if (err_2) return res.status(500).json({
              message: err_2,
              code: 500
            })
            else if (data.length > 0) {
              return res.status(200).json({
                message: "List of all transactions in a wallet!",
                code: 200,
                data: data,
                currentPage: page,
                totalPages: totalPages,
                totalRecords: count
              });
            }
          })
        }
      })
    } catch (err) {
      next(err);
    }
  }
  async createTransaction(req: Request, res: Response, next: NextFunction) {
    try {
      const { transactionAmount,
        walletId,
        
        transactionType
      } = req.body;
      
      const transaction = await TransactionModel.create({
        transactionType,
        
        walletId,
        transactionAmount,
        date: new Date()
      });
      const referenceId = crypto.randomBytes(16).toString('hex');
      const trasactionId = (transaction?._id).toString()
      let transactionStatus = "";
      if (transaction) {
        transactionStatus = "Success"
      } else {
        transactionStatus = "Failed"
      }
      
      TransactionModel.findOneAndUpdate({ _id: trasactionId }, { $set: { status: transactionStatus, refID: referenceId } }).then(async (data: any) => {
        if (data) {
          const updatedTransaction = await TransactionModel.findById(trasactionId )
  res.status(200).json({
            message: "Transaction Done!",
            code: 200,
            data: updatedTransaction
          });
        } else {
          res.json({
            message: "Not able to complete a transaction!",
            code: 201,
          })
        }
      })

    } catch (err) {
      next(err);
    }
  }

  async getTransactionById(req: Request, res: Response, next: NextFunction) {
    try {

      const { id } = req.params || req.query;
      await TransactionModel.findById(id).exec((err_1, data) => {
        if (err_1) {
          return res.status(200).json({
            message: err_1,
            code: 200,
          })
        }
        else {
          return res.status(200).json({
            code: 200,
            message: "Transaction found!",
            data: data
          })
        }
      })

    }
    catch (err) {
      next(err)
    }
  }
}
export default TransactionController