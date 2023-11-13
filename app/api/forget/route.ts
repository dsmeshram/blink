import { NextResponse } from "next/server"
import { is_email_exist, signup_user } from "../signin/add";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: Request, res: Response) => {
    try {
        const { email } = await req.json()

        var email_exist = await is_email_exist(email);
        if (!email_exist) {
            return NextResponse.json({ status: 404, message: "Provided email not exist, please try again with valid email" })
        }
        const {data, error} = await resend.emails.send({
            from: "no-replay@blink.com",
            to: ["damomeshram@gmail.com"],
            subject: `Forget has a message!`,
            text :"helow",
          });
          if (error){
            return NextResponse.json({status: 402,message: "email server has problem"})
          }
        return NextResponse.json({ status: data })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ status: 400 })
    }
}
