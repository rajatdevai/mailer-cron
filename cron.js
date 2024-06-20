const cron = require('node-cron');
const sendMail = require('./mailer');

let recipientEmail = '';

// Function to update recipient email
const setRecipientEmail = (email) => {
    recipientEmail = email;
};

// Schedule task to send email every 30 seconds
cron.schedule('*/30 * * * * *', () => {
    if (recipientEmail) {
        console.log('Running cron job: Sending email to', recipientEmail);
        sendMail(recipientEmail);
    } else {
        console.log('No recipient email set');
    }
});

module.exports = { setRecipientEmail };
