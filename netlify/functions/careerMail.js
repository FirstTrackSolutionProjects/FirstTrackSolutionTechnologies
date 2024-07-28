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
    const {formData, cvKey} = JSON.parse(event.body)
    const {firstName,lastName,email,phone,description,streetAddress,city,postalCode,country, qualification, course} = formData;
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: `${process.env.HR_EMAIL}`, 
        subject: 'Career Form Submission', 
        text: `This is a career form submission mail \n${firstName} \n${lastName} \n${email} \n${phone} \n${description}\n${streetAddress}\n${city}\n${postalCode}\n${country}\n${qualification}\n${course}\nhttps://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${cvKey}`
      };
      try{
        await transporter.sendMail(mailOptions)
        return {statusCode: 200, body: JSON.stringify({message : cvKey})};
      } catch(e){ 
        return {statusCode: 500, body: JSON.stringify({message : 'Failed to send email. Please try again.'})};
      }

}