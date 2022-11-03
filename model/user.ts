import { Schema, models, model} from "mongoose";



const UserSchema = new Schema({   
    firstName: String,
    lastName: String,
    avatar: String,
    email: String,
    phone: String,
    date: String,
    status: String,
})

const  Users = models.user || model("user", UserSchema)

export default Users;