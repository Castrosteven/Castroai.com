import type { NextApiRequest, NextApiResponse } from "next";
require("dotenv").config({ path: "./.env.local" });

import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
  secure: true,
});
const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  const { body } = req;

  const mailData = {
    from: `${body.email}`,
    to: "hello@castroai.com",
    subject: `Message From COMPANY:${body.company} - NAME: ${body.name} - PHONE: ${body.phone}`,
    text: req.body.message,
    html: `<div>${body.message} + EMAIL:${body.email}  </div>`,
  };

  try {
    const answer = await transporter.sendMail(mailData);
    console.log(answer);
    res.status(200);
    res.end();
  } catch (error) {
    console.log(error);
    res.status(400);
    res.end();
  }
};

export default contact;
