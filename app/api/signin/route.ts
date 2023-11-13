import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken';
import addUser from "./add";


export const GET = async (req: Request, res : Response) => {
    return NextResponse.json({message: "OK"})
    
}


export const POST = async (req: Request, res : Response) => {
    const {name, email} = await req.json()
    try{
        var user = await addUser(name, email);
        const token = jwt.sign({email,user}, process.env.JWT_SECRET,  { expiresIn: "1 day" });
        return NextResponse.json({status: 200, token : token})
    } catch(err){
        console.log(err)
        return NextResponse.json({status: 400})
    }
}
