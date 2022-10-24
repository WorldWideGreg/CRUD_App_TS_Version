import mongoose from 'mongoose'
require('dotenv').config()

const connectMongo = async () => {

   try {
      const connection = mongoose.createConnection(process.env.MONGO_URI)

      if (connection.readyState == 1) {
         console.log('MongoDB Connected')
      }

   }catch(err){
      return Promise.reject(err)
   }
}
export default connectMongo;