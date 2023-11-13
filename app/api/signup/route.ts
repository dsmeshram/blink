import { NextResponse } from "next/server"
import jwt from 'jsonwebtoken';
import { Resend } from 'resend';
import { EmailTemplate } from "@/app/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request, res : Response) => {
    // Get user Email, name and password 
const {email, name , passord} =  await req.json()

try {


  const data = await resend.emails.send({
    from: "no-replay@blink.com",
    to: ["damomeshram@gmail.com"],
    subject: `${name} has a message!`,
    text :"helow",
  });


  return NextResponse.json({status: data})
    
  } catch (error) {
    return NextResponse.json({status: 400})
  }
}
