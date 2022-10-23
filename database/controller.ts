import type { NextApiRequest, NextApiResponse } from 'next'
import Users from '../model/user'
import { Data } from '../pages/utils'
/* controller.ts */


export async function getUsers(
    req: NextApiRequest,
    res: NextApiResponse<Data>) {
    

  try{
    const users = await Users.find({})
    if(!users) return res.status(404).json({error: "No users found"})

    res.status(200).json({users});

  }catch(err){
    res.status(404).json({error: "Error fetching data"})
  }
}