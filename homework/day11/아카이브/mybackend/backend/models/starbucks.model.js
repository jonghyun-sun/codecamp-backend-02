import mongoose from 'mongoose'

const starbucksSchema = new mongoose.Schema({
    id:String,
    name:String,
    img:String

})
export const Tokens = mongoose.model("Tokens", phoneSchema)