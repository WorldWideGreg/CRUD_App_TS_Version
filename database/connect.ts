const mongoose = require('mongoose')
require('dotenv').config()

const connectMongo = async () => {

   try {
      const Connection = mongoose.connect(process.env.MONGO_URI)

      if (Connection.readyState == 1) {
         console.log('MongoDB Connected')
      }

   }catch(err){
      return Promise.reject(err)
   }
}
export default connectMongo;