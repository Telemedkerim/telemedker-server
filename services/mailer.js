const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

// Create SES service client
const sesClient = new SESClient({
  region: process.env.AWS_SES_REGION,
  credentials: {
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  },
});

/**
 * Send email using AWS SES
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} body - Email body (HTML)
 * @returns {Promise} - Returns a promise that resolves with the sending result
 */
async function sendValidationEmail(email, token, locale) {
  const validationUrl = `${process.env.FRONTEND_DOMAIN}${locale}/validate-email?token=${token}`;

  try {
    const htmlContent = await getConfirmEmailTemplate(validationUrl, locale);

    const params = {
      Source: "Pickup2 <no-reply@pickup2.com>",
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: {
          Data: i18n.t("email.confirmEmail.title", { lng: locale }),
        },
        Body: {
          Html: {
            Data: htmlContent,
          },
        },
      },
    };

    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);
    console.log("Validation Email sent:", response.MessageId);
    return response;
  } catch (error) {
    console.error("Error sending validation email:", error);
    throw error;
  }
}
module.exports = {
  sendValidationEmail,
};
