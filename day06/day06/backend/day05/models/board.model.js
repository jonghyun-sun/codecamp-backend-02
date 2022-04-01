import mongoose from 'mongoose'

const boardSchema = new mongoose.schema({
    writer:String,
    title:String,
    contents:String
})

export const Board = mongoose.model("Board", boardSchema)