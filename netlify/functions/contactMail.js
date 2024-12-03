const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, 
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

exports.handler = async (event) => {
    const {firstName,lastName,email,phone,description} = JSON.parse(event.body);
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: `${process.env.CONTACT_EMAIL}`, 
        subject: 'Contact Submission', 
        text: `This is a contact submission mail \n${firstName} \n${lastName} \n${email} \n${phone} \n${description}`
      };
      try{
        await transporter.sendMail(mailOptions)
        return {statusCode: 200, body: JSON.stringify({message : 'Email sent successfully!'})};
      } catch(e){ 
        return {statusCode: 500, body: JSON.stringify({message : 'Failed to send email. Please try again.'})};
      }

}