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
                First Name : ${firstName} \n
                Last Name : ${lastName} \n
                Email : ${email} \n
                Phone : ${phone} \n
                Description : ${description}\n
                Street Address : ${streetAddress}\n
                City : ${city}\n
                State : ${state}\n
                Postal Code : ${postalCode}\n
                Qualification : ${qualification}\n
                10th Document : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${tenthDocument}\n
                12th Document : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${twelfthDocument}\n
                Graduation Document : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${graduationDocument}\n
                Post Graduation Document : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${postGraduationDocument}\n
                PAN : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${pan}\n
                Aadhar : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${aadhar}\n
                Passbook : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${passbook}\n
                Letter : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${letter}\n
                Salary : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${salary}\n
                Photo : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${photo}\n
                Resume : https://firsttracksolution-docs.s3.ap-south-1.amazonaws.com/${resume}\n
                `
                
      };
      try{
        await transporter.sendMail(mailOptions)
        return {statusCode: 200, body: JSON.stringify({message : "Application form submitted successfully"})};
      } finally{}
}