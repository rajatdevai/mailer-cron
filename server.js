const express = require('express');
const bodyParser = require('body-parser');
const { setRecipientEmail } = require('./cron');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Email Cron Job API');
});

app.post('/send-email', (req, res) => {
    const { email } = req.body;
    if (email) {
        setRecipientEmail(email);
        res.status(200).send(`Email will be sent to ${email} every 30 seconds`);
    } else {
        res.status(400).send('Email address is required');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
