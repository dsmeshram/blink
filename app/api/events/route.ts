import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken';



export const POST = async (req: Request, res : Response) => {
    const {name, email} = await req.json()
    try{

        const token = jwt.sign({email}, process.env.JWT_SECRET,  { expiresIn:  process.env.JWT_EXPIRES_IN });
        
        return NextResponse.json({status: 200, token : token})
    } catch(err){
        return NextResponse.json({status: 400})
    }
}



export const GET = async (req: Request, res : Response) => {
    const {name, email} = await req.json()
    try{

        const token = jwt.sign({email}, process.env.JWT_SECRET,  { expiresIn:  process.env.JWT_EXPIRES_IN });
        
        return NextResponse.json({status: 200, token : token})
    } catch(err){
        return NextResponse.json({status: 400})
    }
}