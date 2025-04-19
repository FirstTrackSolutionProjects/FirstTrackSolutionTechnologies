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
    const {firstName,lastName,email,phone,description,streetAddress,city,postalCode,country, qualification, course, gender, dob} = formData;
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: `${process.env.CAREER_EMAIL},${process.env.ADMIN_EMAIL}`,
        subject: 'Career Form Submission',
        html: `
          <h2>New Career Application</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Gender:</strong> ${gender}</p>
          <p><strong>Date of Birth:</strong> ${dob}</p>
          <p><strong>Street Address:</strong> ${streetAddress}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Postal Code:</strong> ${postalCode}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Qualification:</strong> ${qualification}</p>
          <p><strong>Position Applied For:</strong> ${course}</p>
          <p><strong>Description:</strong> ${description}</p>
          <p><strong>Resume:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${cvKey}">View Resume</a></p>
        `
    };
      try{
        await transporter.sendMail(mailOptions)
        return {statusCode: 200, body: JSON.stringify({message : 'Form submitted successfully'})};
      } catch(e){ 
        console.error('Error sending email:', e);
        return {statusCode: 500, body: JSON.stringify({message : 'Failed to send email. Please try again.'})};
      }

}