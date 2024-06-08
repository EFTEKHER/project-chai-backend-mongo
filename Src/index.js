import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})
import express from "express";
import connectDB from "./db/index.js";
const app= express();

// (async()=>{
//      try{
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//       app.on('error',(error)=>{
//         console.log("Error :",error);
//         throw error;
//       })
//       app.listen(process.env.PORT,()=>{
//         console.log(`listening on port ${process.env.PORT}`)
//       })

//      }
//      catch(e){
//         console.log("Error:",e);
//         throw e;
//      }
// })()

connectDB();

