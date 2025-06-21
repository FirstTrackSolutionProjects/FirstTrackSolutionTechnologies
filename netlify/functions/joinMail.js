const nodemailer = require('nodemailer');
const db = require('./db');

const BUCKET_URL = process.env.S3_BUCKET_URL

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

    const {firstName,
      lastName,
      email,
      phone,
      streetAddress,
      city,
      state,
      postalCode,
      qualification,
      age,
      dob,
      gender,
      country,
      fathersName,
      mothersName,
      landmark,
      isPermanentAddressSame,
      permanentAddressLandmark,
      permanentStreetAddress,
      permanentAddressCity,
      permanentAddressState,
      permanentAddresstPostalCode,
      permanentAddressCountry} = formData;

    const connection = await db.getConnection();
    await connection.beginTransaction();
    const [joinUsRequests] = await connection.execute(
      `SELECT id FROM Join_Us_Requests
      WHERE
      email = ? AND
      status = "PENDING"`,
      [email]
    )
    if(!joinUsRequests.length){
       return {statusCode: 400, body: JSON.stringify({message : "Join Us application request not found"})};
    }
    const joinUsRequestId = joinUsRequests[0]?.id;
    await connection.execute(
      `INSERT INTO Join_Us_Submissions(
      join_us_request_id,
      street_address,
      landmark,
      city,
      state,
      postal_code,
      country,
      mothers_name,
      fathers_name,
      permanent_address_landmark,
      permanent_street_address,
      permanent_address_city,
      permanent_address_state,
      permanent_address_postal_code,
      permanent_address_country,
      is_permanent_address_same,
      qualification,
      tenth_doc,
      twelfth_doc,
      graduation_doc,
      post_graduation_doc,
      pan_doc,
      aadhaar_doc,
      passbook_doc,
      experience_letter,
      salary_receipt_doc,
      photo_doc,
      resume_doc,
      age,
      gender,
      date_of_birth
      ) VALUES 
      (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    )
    await connection.execute(`
      UPDATE Join_Us_Submission_Requests
      SET
      status = "SUBMITTED"
      action_at = ?
      WHERE
      id = ?`, [new Date(), joinUsRequestId]);
    let mailOptions = {
        from: process.env.EMAIL_USER,
        // to: `${process.env.HR_EMAIL}`, 
        to: `adityakumar5155@gmail.com`,
        subject: 'Joining Form Submission',
        html: `
          <h2>New Joining Form Submission</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Father's Name:</strong> ${fathersName}</p>
          <p><strong>Mother's Name:</strong> ${mothersName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>Date of Birth:</strong> ${dob}</p>
          <p><strong>gender:</strong> ${gender}</p>
          <p><strong>Qualification:</strong> ${qualification}</p>
          <br>
          <p><strong>Current Address :</strong></p>
          <p><strong>Landmark:</strong> ${landmark}</p>
          <p><strong>Street Address:</strong> ${streetAddress}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>State:</strong> ${state}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Postal Code:</strong> ${postalCode}</p>
          <br>
          ${isPermanentAddressSame? `<p><strong>Permanent Address is same as Current Address</strong></p>` : 
            `<p><strong>Permanent Address :</strong></p>
          <p><strong>Landmark:</strong> ${permanentAddressLandmark}</p>
          <p><strong>Street Address:</strong> ${permanentStreetAddress}</p>
          <p><strong>City:</strong> ${permanentAddressCity}</p>
          <p><strong>State:</strong> ${permanentAddressState}</p>
          <p><strong>Country:</strong> ${permanentAddressCountry}</p>
          <p><strong>Postal Code:</strong> ${permanentAddresstPostalCode}</p>`}
          <h3>Documents:</h3>
          <p><strong>10th Document:</strong> <a href="${BUCKET_URL}${tenthDocument}">View Document</a></p>
          <p><strong>12th Document:</strong> <a href="${BUCKET_URL}${twelfthDocument}">View Document</a></p>
          <p><strong>Graduation Document:</strong> <a href="${BUCKET_URL}${graduationDocument}">View Document</a></p>
          <p><strong>Post Graduation Document:</strong> <a href="${postGraduationDocument}">View Document</a></p>
          <p><strong>PAN:</strong> <a href="${BUCKET_URL}${pan}">View Document</a></p>
          <p><strong>Aadhar:</strong> <a href="${BUCKET_URL}${aadhar}">View Document</a></p>
          <p><strong>Passbook:</strong> <a href="${BUCKET_URL}${passbook}">View Document</a></p>
          <p><strong>Letter:</strong> <a href="${BUCKET_URL}${letter}">View Document</a></p>
          <p><strong>Salary:</strong> <a href="${BUCKET_URL}${salary}">View Document</a></p>
          <p><strong>Photo:</strong> <a href="${BUCKET_URL}${photo}">View Document</a></p>
          <p><strong>Resume:</strong> <a href="${BUCKET_URL}${resume}">View Document</a></p>
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