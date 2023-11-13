import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken';
const { GRAPHCMS_URL, GRAPHCMS_PERMANENTAUTH_TOKEN, JWT_SECRET, JWT_EXPIRES_IN } = process.env;
const KEY = process.env.JWT_KEY;

type user = {
    username:string,
    useremail:string,
}


export const POST = async (req: Request, res : Response) => {
    const {name, email} = await req.json()
    try{

        const token = jwt.sign({email}, JWT_SECRET,  { expiresIn: JWT_EXPIRES_IN });
        
        return NextResponse.json({status: 200, token : token})
    } catch(err){
        return NextResponse.json({status: 400})
    }
}