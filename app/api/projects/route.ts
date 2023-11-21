import { NextResponse } from "next/server"

export const GET = async (req: Request, res : Response) => {

    const projects = [{
        "name" :"Blink 1.0",
        "image" :"",
        "type": 1,
        "desc" :"Welcome to SO! can you share a little bit more code for Home componen"
    }]
    return NextResponse.json({status: 200, projects : projects})
}


export const POST = async (req: Request, res : Response) => {
    const {projectname, image} = await req.json()
    try{
        
        return NextResponse.json({status: 200})
    } catch(err){
        return NextResponse.json({status: 400})
    }
}


