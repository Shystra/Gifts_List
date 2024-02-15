import mongoose from "mongoose";
// import { v4 as uuid } from 'uuid'

const userSchema = new mongoose.Schema({
    name: String,
    email: String, 
    password: String,
})
const Users = mongoose.model( "User", userSchema, "users" );

export  { Users }