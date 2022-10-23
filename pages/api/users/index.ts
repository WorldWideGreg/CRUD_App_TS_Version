import connectMongo from "../../../database/connect"
import type { NextApiRequest, NextApiResponse } from 'next'
import {getUsers, postUser} from "../../../database/controler"
import { Data } from '../../../pages/utils'


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    {/* connectMongo().catch(()=>res.status(405).json({error: "Error connecting to database"}))  */}   

    const {method} = req

    switch(method){
        case 'GET':
            await getUsers(req,res)
            break;
        case 'POST':
            await postUser(req,res)
            break;        
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
        
    }
  }
  