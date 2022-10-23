import connectMongo from "../../../database/connect"
import type { NextApiRequest, NextApiResponse } from 'next'
import {getUsers} from "../../../database/controller"
import { Data } from '../../../pages/utils'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    connectMongo().catch(()=>res.status(405).json({error: "Error connecting to database"}))

    const {method} = req

    switch(method){
        case 'GET':
            getUsers(req,res)
            break;
        case 'POST':
            res.status(200).json({method, name:"POST Request"});
            break;
        case 'PUT':
            res.status(200).json({method, name:"PUT Request"});
            break;
        case 'DELETE':
            res.status(200).json({method, name:"DELETE Request"});
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
            break;
    }
  }
  