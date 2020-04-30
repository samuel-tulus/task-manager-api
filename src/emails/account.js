const sgMail = require('@sendgrid/mail')

const sendgridAPIkey = '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'

sgMail.setApiKey(sendgridAPIkey)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'samuel.tulus@mail.ugm.ac.id',
        subject: 'Thanks for joining in!',
        text: 'Welcome to the app, ' + name + '. Let mee know how you get along with the app.'
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'samuel.tulus@mail.ugm.ac.id',
        subject: 'Sorry to see you go!',
        text: 'Goodbye, ' + name + '. I hope to see you back sometime soon.'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}