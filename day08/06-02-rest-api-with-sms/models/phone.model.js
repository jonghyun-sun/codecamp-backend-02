import mongoose from 'mongoose'

const PhoneSchema = new mongoose.Schema({
    id:String,
    token:String,
    phone:String,
    isAuth:Boolean,
    v:Number


})
export const Phone = mongoose.model("Phone", PhoneSchema)