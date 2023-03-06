import Joi from "joi";
export const createTransactionSchema = Joi.object({
    transactionAmount: Joi.string().required() || Joi.number().required(),
    walletId: Joi.string().required(),
    refID:Joi.string(),
    transactionType:Joi.valid('Credit', 'Debit').required(),
    date: Joi.date(),
    status:Joi.valid('Success','Failed')
});

export const getTransactionsSchema = Joi.object({
    page:Joi.string().required(),
    
});
export const getTransactionsByWalletSchema = Joi.object({
    page:Joi.number().required(),
    walletId:Joi.string().required()
    
});
export const getTransactionByIdSchema = Joi.object({
    id:Joi.string().required()
})

