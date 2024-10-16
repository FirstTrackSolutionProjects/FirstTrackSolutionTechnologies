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
        text: `This is a joining submission mail \n
                ${firstName} \n
                ${lastName} \n
                ${email} \n
                ${phone} \n
                ${description}\n
                ${streetAddress}\n
                ${city}\n
                ${state}\n
                ${postalCode}\n
                ${qualification}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${tenthDocument}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${twelfthDocument}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${graduationDocument}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${postGraduationDocument}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${pan}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${aadhar}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${passbook}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${letter}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${salary}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${photo}\n
                https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${resume}\n
                `
                
      };
      try{
        await transporter.sendMail(mailOptions)
        return {statusCode: 200, body: JSON.stringify({message : "Application form submitted successfully"})};
      } finally{}
}