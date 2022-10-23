import type { NextApiRequest, NextApiResponse } from 'next'
import Users from '../model/user'
import { Data } from '../pages/utils'
/* controller.ts */


//get : http://localhost:3000/api/users
export async function getUsers(
    req: NextApiRequest,
    res: NextApiResponse<Data>) {
    try{
        const users:any = await Users.find({})
        if(!users) return res.status(404).json({error: "No data found"})

        res.status(200).json(users);

  }catch(err){
    res.status(404).json({error: "Error fetching data"})
  }
}
//getSolo : http://localhost:3000/api/users

export async function getUser(
    req: NextApiRequest,
    res: NextApiResponse<Data>){
    try{
        const user:any = await Users.findById(req.query.userId)
        if(!user) return res.status(404).json({error: "No user selected"})

        res.status(200).json(user);

  }catch(err){
    res.status(404).json({error: "Cannot reach user"})
  }
}


//post : http://localhost:3000/api/users

export async function postUser(
    req: NextApiRequest,
    res: NextApiResponse<Data>){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({error: "No data found"})

        const user = await Users.create(formData, function(err:any, data:any){
            return  res.status(200).json(data);
        })}
    catch(err){
        res.status(404).json({error: "Error creating user"})
    }
}

//put : http://localhost:3000/api/users/:id

export async function putUser(
    req: NextApiRequest,
    res: NextApiResponse<Data>){
    try{
       const {userId} = req.query;
         const formData = req.body;

        if(userId && formData){
           const user = await Users.findByIdAndUpdate(userId, formData, {new: true})
            return  res.status(200).json(user);            
        }
        res.status(404).json({error: "No USER selected"})
       }
    catch(err){
        res.status(404).json({error: "Error updating user"})
    }
}

//delete : http://localhost:3000/api/users/:id

export async function deleteUser(
    req: NextApiRequest,
    res: NextApiResponse<Data>){
    try{
       const {userId} = req.query;
        if(userId){
           const user = await Users.findByIdAndDelete(userId)
            return  res.status(200).json({deleted: user["name"]})            
        }
        res.status(404).json({error: "USER not selected"})
       }
    catch(err){
        res.status(404).json({error: "Error deleting user"})
    }
}
