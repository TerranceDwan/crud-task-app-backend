const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'terrance4869@gmail.com',
    subject: 'Welcome to TaskApp',
    text: `Welcome to the app, ${name}. Let me know how it goes!`,
  })
}

const cancelSurveyEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'terrance4869@gmail.com',
    subject: 'Sorry to see you go',
    text: `Hello ${name}.  I understand that you have ended your time with task app, but we would greatly appreciate it if you would let us know what we could have done to keep you as a client.`,
  })
}

module.exports = {
  sendWelcomeEmail,
  cancelSurveyEmail,
}
