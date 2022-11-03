import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from "../../../database/connect"
import {getUser, putUser, deleteUser} from "../../../database/controller"
import { Data } from '../../utils'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    connectMongo().catch(()=>res.status(405).json({error: "Error connecting to database"})) 
    
    const {method} = req
    switch(method){
        case 'GET':
            await getUser(req,res);
            break;
        case 'PUT':
            await putUser(req,res)
            break;
        case 'DELETE':
            await deleteUser(req,res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
  }
        
}