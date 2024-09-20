const nodemailer = require("nodemailer");
const config = require("../config/index.js");

const sendEmail = async (to, html, subject) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: config.NODE_ENV === "production", // true for 465, false for other ports
    auth: {
      user: config.email_sender.email,
      pass: config.email_sender.app_password,
    },
  });

  await transporter.sendMail({
    from: config.email_sender.email, // sender address
    to, // list of receivers
    subject, // Subject line
    text: "Verification Process within 10 mins Maximum", // plain text body
    html, // html body
  });
};

module.exports = { sendEmail };
