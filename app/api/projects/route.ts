import { NextResponse } from "next/server"

export const GET = async (req: Request, res : Response) => {
    return NextResponse.json({message: "get all app fof user"})
    
}


export const POST = async (req: Request, res : Response) => {
    const {token, type} = await req.json()
    try{
        
        return NextResponse.json({status: 200, user : token})
    } catch(err){
        return NextResponse.json({status: 400})
    }
}