const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // You can change the port if needed

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve your HTML file
app.use(express.static(__dirname));

// POST endpoint for sending emails
app.post('/send_email_node', (req, res) => {
    const to = 'rohitmetha111@gmail.com'; // Replace with your email address
    const subject = 'New Message from Your Website';
    const message = req.body.message;

    // Setup nodemailer transporter using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rohitmetha111@gmail.com', // Replace with your Gmail address
            pass: 'rohit1*2#' // Replace with your Gmail password
        }
    });

    // Setup email data
    const mailOptions = {
        from: 'webmaster@example.com', // Replace with your email address
        to: to,
        subject: subject,
        text: message
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
