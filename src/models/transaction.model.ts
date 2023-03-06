
import mongoose, { Schema, Document } from "mongoose";

export interface ITransaction extends Document {
  transactionType: string;
  refID:string;
  walletId:string;
  transactionAmount: string | number;
  date:Date;
  status:string;
}

const TransactionSchema: Schema = new Schema({
    transactionType: { type: String, required: true },
    transactionAmount: { type: Number || String, required: true },
    refID:{type:String},
    status:{type:String},
    walletId:{type:String, required: true},
    date:{type:Date,required:true}
});

export default mongoose.model<ITransaction>('Transaction', TransactionSchema);