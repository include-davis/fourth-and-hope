require('dotenv').config();  // To load environment variables from .env file

const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Initialize SendGrid with the API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);  // Get SendGrid API key from environment

// Middleware to parse JSON data from the frontend
app.use(cors());
app.use(bodyParser.json());

// POST route for the contact form
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Create the email data in JSON format
  const emailData = {
    to: 'recipient-email@example.com',  // Replace with your email to receive the messages
    from: email,  // The user's email from the form
    subject: `Message from ${name} - Contact Form`,
    text: `Message: ${message}\n\nFrom: ${name}\nEmail: ${email}`,
  };

  // Send the email using SendGrid API
  sgMail
    .send(emailData)
    .then(() => {
      res.status(200).json({ message: 'Your message has been sent successfully!' });
    })
    .catch(error => {
      res.status(500).json({ message: 'Error sending email: ' + error.message });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

