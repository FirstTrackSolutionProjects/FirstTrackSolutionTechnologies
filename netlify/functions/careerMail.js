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
        to: `${process.env.CAREER_EMAIL},${process.env.ADMIN_EMAIL}`, 
        subject: 'Career Form Submission', 
        text: `First Name : ${firstName} \n
              Last Name : ${lastName} \n
              Email : ${email} \n
              Phone : ${phone} \n
              Description : ${description}\n
              Street Address : ${streetAddress}\n
              City : ${city}\n
              Postal Code : ${postalCode}\n
              Country : ${country}\n
              Qualification : ${qualification}\
              Course : ${course}\n
              Resume : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${cvKey}`
      };
      try{
        await transporter.sendMail(mailOptions)
        return {statusCode: 200, body: JSON.stringify({message : 'Form submitted successfully'})};
      } catch(e){ 
        return {statusCode: 500, body: JSON.stringify({message : 'Failed to send email. Please try again.'})};
      }

}