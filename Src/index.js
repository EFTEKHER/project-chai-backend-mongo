import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
dotenv.config({
    path:'./env'
})

import connectDB from "./db/index.js";
import { app } from "./app.js";


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

connectDB().then(()=>{
 app.listen(process.env.PORT || 8000,()=>{
    console.log(`app listening on ${process.env.PORT}`);
 })   
}).catch((err)=>{console.log('MongoDb connection failed:',err)});

