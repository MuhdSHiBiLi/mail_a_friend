// Import nodemailer
const nodemailer = require('nodemailer');
// const dotenv = require("dotenv");
// dotenv.config();
require("dotenv").config();

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL, // Your Gmail email address
        pass:  process.env.PASS// Your Gmail password or app-specific password
    },
    tls:{
        rejectUnauthorized: false
    }
});

// Define email options
let mailOptions = {
    from: process.env.EMAIL,
    to: "ssfakkaparambaunit@gmail.com", // Friend's email address
    subject: 'Test Email',
    text: 'This is a test email sent using  Nodemailer.'
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Message sent: %s', info.messageId);
});