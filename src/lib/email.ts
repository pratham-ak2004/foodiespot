import nodemailer from "nodemailer";

export type EmailPayload = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

const smtpOptions = {
  host: "foodiespot-amber.vercel.app",
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PW,
  },
};

const transporter = nodemailer.createTransport({
  ...smtpOptions,
});

export const sendEmail = async (data: EmailPayload) => {
  return await transporter.sendMail({
    ...data,
  });
};
