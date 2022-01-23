// for nodemail since sendgrid sucks
const nodeMailer = require("nodemailer");

exports.sendEmailWithNodemailer = async (req, res, emailData) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: `${process.env.GMAIL_APP_EMAIL}`, // gmail
      pass: `${process.env.GMAIL_APP_PASS}`, // app-specific password for gmail
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  try {
    const info = await transporter.sendMail(emailData);
    console.log(`Message sent: ${info.response}`);
  } catch (err) {
    return console.log(`Problem sending email: ${err}`);
  }
};
