const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all origins

// Configure Nodemailer with Mailtrap SMTP settings
const transporter = nodemailer.createTransport({
  host: 'live.smtp.mailtrap.io',
  port: 587,
  auth: {
    user: process.env.MAILTRAP_USER, // Mailtrap username from .env
    pass: process.env.MAILTRAP_PASS  // Mailtrap password from .env
  }
});

// Helper function to send email
const sendEmail = (data) => {
  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender email address from .env
    to: process.env.EMAIL_USER_TO, // Recipient email address from .env
    subject: `New Message: ${data.subject || 'No Subject'}`, // Use 'subject' field in the email subject
    html: `<p><strong>Name:</strong> ${data.name || 'No Name Provided'}</p>
           <p><strong>Email:</strong> ${data.email}</p>
           <p><strong>Subject:</strong> ${data.subject || 'No Subject'}</p>
           <p><strong>Message:</strong> ${data.message || 'No Message Provided'}</p>`
  };

  return transporter.sendMail(mailOptions);
};

// API endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Ensure all required fields are provided
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields (name, email, subject, message) are required.' });
  }

  // Send email with the provided data
  sendEmail({ name, email, subject, message })
    .then(() => {
      res.status(200).json({ message: 'Form submitted successfully!' });
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error submitting form.' });
    });
});

// New API endpoint to receive data with a specific email
app.post('/receive-email', (req, res) => {
  const { email } = req.body;

  // Check if the email matches the specified value
  if (email === process.env.EXPECTED_EMAIL) {
    res.status(200).json({ message: 'Email received and matches the expected value.' });
  } else {
    res.status(400).json({ message: 'Email does not match the expected value.' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
