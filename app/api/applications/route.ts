import { NextResponse } from "next/server"

export const GET = async (req: Request, res : Response) => {
    const apps = [{
        name :"LinkedIn",
        details:"Jobs & Business News",
        image :"https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=s52"
    },{
        name :"Instagram",
        details:"Bringing you closer to the people and things you love. — Instagram from Meta",
        image :"https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s52"
    },{
        name:"WhatsApp",
        image:"https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s52",
        details:"WhatsApp from Meta is a FREE messaging and video calling app.",

    }]
    return NextResponse.json({apps: apps, status: 200})
    
}


export const PATCH = async (req: Request, res : Response) => {
    return NextResponse.json({message: "update existing user via {req.id}"})
}