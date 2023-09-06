import { authConfig } from "@/lib/config";
import { pusher } from "@/lib/services";
import { DbUser } from "@/lib/types";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

export default async function handler(req:NextApiRequest,res:NextApiResponse) {
    if(req.method==="POST"){
        const {socket_id,channel_name} = req.body
        const session=await getServerSession(req,res,authConfig)
        if(!session || !session.user){
            return res.status(403).json({message:"Access Denied"})
        }
        const user=session.user as DbUser
        const presenceData={
            user_id:user.id,
            user_info:user
        }
        const authResponse= pusher.authorizeChannel(socket_id,channel_name,presenceData)
        return res.send(authResponse)
    }
    return res.status(404).json({message:"Not Found"})
}