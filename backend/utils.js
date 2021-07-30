const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const EMAIL_TO_ADMIN_BODY = `Pending request from the company `;
const EMAIL_TO_USER_SUBJECT = `Member Code`;

const EMAIL_FOOTER = `<p>Your hushcup team!</p>`;

const sendEmail = (emailData) => {
  const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENT_ID, // ClientID
    process.env.OAUTH_CLIENT_SECRET, // Client Secret
    process.env.OAUTH_REDIRECT_URL // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.OAUTH_ACCOUNT,
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOption = {
    from: emailData.address,
    to: process.env.SENDER_EMAIL,
    subject: emailData.subject,
    generateTextFromHTML: true,
    html: emailData.html,
  };

  return smtpTransport.sendMail(mailOption);
};

module.exports.Utils = {
  EMAIL_TO_ADMIN_BODY,
  EMAIL_TO_USER_SUBJECT,
  EMAIL_FOOTER,
};

module.exports.sendEmail = sendEmail;
