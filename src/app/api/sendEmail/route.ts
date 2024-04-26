import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/render";
import WelcomeTemplate from "@/components/custom-components/EmailTemplate";
import { EmailPayload, sendEmail } from "@/lib/email";
import EmailTemplate from "@/components/custom-components/EmailTemplate";

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();

  const mail: EmailPayload = {
    from: email,
    to: process.env.NODEMAILER_EMAIL || "",
    subject: "Feedback for FoodieSpot",
    html: render(EmailTemplate(email, message)),
  };

  await sendEmail(mail)
    .then(() => {
      console.log("mail sent");
    })
    .catch((err) => {
      console.error("error : ", err);
      return NextResponse.json(
        { message: "Error while sending mail", error: err },
        { status: 500 }
      );
    });

  return NextResponse.json(
    { message: "mail sent successfully", mail: mail },
    { status: 200 }
  );
}
