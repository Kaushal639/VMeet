if (process.env.NODE_ENV !== "production") {
    const dotenv = await import("dotenv");
    dotenv.config();
  }
  
  
import express from "express";
import {createServer} from "node:http"
import { Server } from "socket.io";
import mongoose from "mongoose"
import cors from "cors"
import { create } from "node:domain";
import { connectToSocket } from "./controllers/socketManager.js";

import userRoutes from "./routes/users.routes.js"

const app = express();
const server = createServer(app)
const io = connectToSocket(server)



app.use(cors())
app.use(express.json({limit: "45kb"}))
app.use(express.urlencoded({limit: "45kb", extended: true}))


app.set("port", (process.env.PORT || 5000))


app.use("/api/v1/users", userRoutes)
const dburl = process.env.MONGODB_URL;
 
const start = async()=>{
    // const connectionDb = await mongoose.connect(dburl)
   
    server.listen(app.get("port"), ()=>{
        console.log("app is listening on port 5000")
    })
}

start()