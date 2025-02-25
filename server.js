const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Email Sending Service');
});

app.post('/send-email', (req, res) => {
    const { email, subject, message } = req.body;

    if (!email || !subject || !message) {
        return res.status(400).send('All fields are required');
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'johnmanueldev@gmail.com',
            pass: 'JohnManuel2025!'
        }
    });

    const mailOptions = {
        from: 'johnheliang@gmail.com',
        to: 'johnmanueldevl@gmail.com',
        subject: subject,
        text: `Message from: ${email}\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});