import mongoose from "mongoose"

const connectDB = async()=>{
  try {
mongoose.connection.on('connected',()=>console.log("DataBase connected"))
await mongoose.connect(`${process.env.MONGODB_URL}/tourly`);
  }
  catch(error){
    console.log(error.message)

  }

}
export default connectDB