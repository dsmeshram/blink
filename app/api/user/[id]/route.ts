import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken';

const { GRAPHCMS_URL, GRAPHCMS_PERMANENTAUTH_TOKEN, JWT_SECRET, JWT_EXPIRES_IN } = process.env;
const KEY = process.env.JWT_KEY;

export const GET = async (req: Request, res : Response) => {
    const token =  req.headers.get("Authorization") 
    console.log("token", token)
    const user = jwt.verify(token, JWT_SECRET)
    return NextResponse.json({message: "get user via {req.id}",email : user.email})
    
}
