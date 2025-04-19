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
    const {formData,docs} = JSON.parse(event.body)
    const {tenthDocument,
      twelfthDocument,
      graduationDocument,
      postGraduationDocument,
      pan,
      aadhar,
      passbook,
      letter,
      salary,
      photo,
      resume} = docs;
    const {firstName,lastName,email,phone,description,streetAddress,city,state,postalCode, qualification} = formData;
    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: `${process.env.HR_EMAIL}`, 
        subject: 'Joining Form Submission',
        html: `
          <h2>New Joining Form Submission</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Description:</strong> ${description}</p>
          <p><strong>Street Address:</strong> ${streetAddress}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>Postal Code:</strong> ${postalCode}</p>
          <p><strong>Qualification:</strong> ${qualification}</p>
          <h3>Documents:</h3>
          <p><strong>10th Document:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${tenthDocument}">View Document</a></p>
          <p><strong>12th Document:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${twelfthDocument}">View Document</a></p>
          <p><strong>Graduation Document:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${graduationDocument}">View Document</a></p>
          <p><strong>Post Graduation Document:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${postGraduationDocument}">View Document</a></p>
          <p><strong>PAN:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${pan}">View Document</a></p>
          <p><strong>Aadhar:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${aadhar}">View Document</a></p>
          <p><strong>Passbook:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${passbook}">View Document</a></p>
          <p><strong>Letter:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${letter}">View Document</a></p>
          <p><strong>Salary:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${salary}">View Document</a></p>
          <p><strong>Photo:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${photo}">View Document</a></p>
          <p><strong>Resume:</strong> <a href="https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${resume}">View Document</a></p>
        `
    };
      try{
        await transporter.sendMail(mailOptions)
        return {statusCode: 200, body: JSON.stringify({message : "Application form submitted successfully"})};
      } catch (error) {
        console.error('Error sending email:', error);
        return {statusCode: 500, body: JSON.stringify({message : "Failed to submit application. Please try again."})};
      }
}