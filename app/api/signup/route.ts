import { NextResponse } from "next/server"
import { Resend } from 'resend';
import  { signup_user } from "../signin/add";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request, res : Response) => {
    // Get user Email, name and password 
const {email, name , password} =  await req.json()

try {

  var user = await signup_user(name, email, password, 3);
  if (user == null){
    return NextResponse.json({status: 404,message:"User already exist"})
  }
  console.log("register user on DB", user)
  if (user != null){
    const {data, error} = await resend.emails.send({
      from: "no-replay@blink.com",
      to: ["damomeshram@gmail.com"],
      subject: `${name} has a message!`,
      text :"helow",
    });
    if (error){
      return NextResponse.json({status: 402})
    }
    console.log(data)
    return NextResponse.json({status: data})
  }
    
  } catch (error) {
    return NextResponse.json({status: 400})
  }
}
