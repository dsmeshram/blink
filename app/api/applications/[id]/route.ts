import { NextResponse } from "next/server"

export const GET = async (req: Request, res : Response) => {
    return NextResponse.json({message: "get all event of via {req.id}"})
    
}


export const PATCH = async (req: Request, res : Response) => {
    return NextResponse.json({message: "update existing user via {req.id}"})
}