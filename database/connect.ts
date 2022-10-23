import mongoose from 'mongoose'

const connectMongo = async () => {

try {
   const {connection}:any = mongoose.connect(process.env.MONGO_URI)

   if (connection.readyState == 1) {
      console.log('MongoDB Connected')
   }

}catch(err){
    return Promise.reject(err)
}
}
export default connectMongo;