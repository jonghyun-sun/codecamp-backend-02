import mongoose from 'mongoose'

const phoneSchema = new mongoose.Schema({
    token:String,
    phone:String,
    isAuth:Boolean


})
export const Tokens = mongoose.model("Tokens", phoneSchema)