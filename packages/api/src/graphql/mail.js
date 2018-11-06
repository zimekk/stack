// https://github.com/nodemailer/nodemailer/blob/master/examples/full.js
import { createTransport, getTestMessageUrl } from "nodemailer";

/*
mutation {
  Contact {
    notify(input: { subject: "Subject", message: "Example message" })
  }
}
*/

export default ({ subject, message: text }) =>
  new Promise((resolve, reject) =>
    createTransport(process.env.SMTP_URL, {
      from: process.env.MAIL_FROM
    }).sendMail(
      {
        to: process.env.MAIL_TO,
        subject,
        text
      },
      (error, info) => (error ? reject(error) : resolve(info))
    )
  );
