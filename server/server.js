import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./configs/db.js"
import router from "./routes/userRoutes.js"
import tourRoute from "./routes/tourRoutes.js"

connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/users", router)
app.use("/api/tours/",tourRoute)
app.get('/',(req,res)=>res.send("API is working fine"))
const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`server is workin on ${port}`))