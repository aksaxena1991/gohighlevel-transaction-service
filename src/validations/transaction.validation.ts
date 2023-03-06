
import { createTransactionSchema, getTransactionByIdSchema, getTransactionsByWalletSchema, getTransactionsSchema,  } from "../schema/transaction.schema";
export function validateCreateTransaction(req:any, res:any,next:any) {
    const { error, value } = createTransactionSchema.validate(req.body);
  if (error) {
     return res.status(400).json({message:error.details[0].message})
    } else {
      req.body = value;
      next();
    }
  }
  export function validateAllTransactions(req:any, res:any,next:any) {
    const { error, value } = getTransactionsSchema.validate(req.query);
  if (error) {
     return res.status(400).json({message:error.details[0].message})
    } else {
        
      req.body = value;
      next();
    }
  }
  export function validateAllTransactionByWallet(req:any, res:any,next:any) {
    
    const { error, value } = getTransactionsByWalletSchema.validate(req.params);
    
  if (error) {
     return res.status(400).json({message:error.details[0].message})
    } else {
        
      req.body = value;
      next();
    }
  }
  export function validateGetTransactionById(req:any, res:any,next:any){
    const { error, value } = getTransactionByIdSchema.validate(req.params || req.query);
  if (error) {
     return res.status(400).json({message:error.details[0].message})
    } else {
        
      req.body = value;
      next();
    }
  }
  