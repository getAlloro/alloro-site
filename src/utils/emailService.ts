const N8N_EMAIL_URL =
  import.meta.env.VITE_N8N_EMAIL_URL ||
  "https://n8napp.getalloro.com/webhook/alloro-email-service";

export interface DemoRequestFormData {
  name: string;
  email: string;
  phone: string;
  website: string;
}

/**
 * Generates HTML email for internal team notification
 */
function generateInternalNotificationHTML(
  formData: DemoRequestFormData,
): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Demo Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8fafc;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; width: 100%;">
          <tr>
            <td align="center" style="padding-bottom: 24px;">
              <img src="https://app.getalloro.com/logo.png" alt="Alloro" width="140" style="display: block; height: auto;" />
            </td>
          </tr>
          <tr>
            <td>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                <tr>
                  <td style="padding: 40px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                      <span style="display: inline-block; padding: 4px 10px; background-color: #fef3c7; color: #92400e; border-radius: 4px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">
                        New Lead
                      </span>
                      <h1 style="margin: 16px 0 8px 0; font-size: 24px; font-weight: 700; color: #212D40;">
                        Demo Request Received
                      </h1>
                    </div>

                    <div style="background-color: #f8fafc; padding: 24px; border-radius: 12px; margin-bottom: 24px;">
                      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                        <tr>
                          <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
                            <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Name</strong><br>
                            <span style="color: #1e293b; font-size: 16px;">${formData.name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
                            <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Email</strong><br>
                            <a href="mailto:${formData.email}" style="color: #d66853; font-size: 16px; text-decoration: none;">${formData.email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0; border-bottom: 1px solid #e2e8f0;">
                            <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Phone</strong><br>
                            <a href="tel:${formData.phone}" style="color: #d66853; font-size: 16px; text-decoration: none;">${formData.phone}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px 0;">
                            <strong style="color: #64748b; font-size: 12px; text-transform: uppercase;">Practice Website</strong><br>
                            <a href="${formData.website.startsWith("http") ? formData.website : "https://" + formData.website}" style="color: #d66853; font-size: 16px; text-decoration: none;">${formData.website}</a>
                          </td>
                        </tr>
                      </table>
                    </div>

                    <p style="margin: 0; font-size: 14px; color: #64748b; text-align: center;">
                      Please follow up with this lead promptly.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 32px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                ${new Date().getFullYear()} Alloro. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generates HTML email for user confirmation
 */
function generateUserConfirmationHTML(formData: DemoRequestFormData): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks for Your Demo Request</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8fafc;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; width: 100%;">
          <tr>
            <td align="center" style="padding-bottom: 24px;">
              <a href="https://getalloro.com" target="_blank">
                <img src="https://app.getalloro.com/logo.png" alt="Alloro" width="140" style="display: block; height: auto;" />
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #ffffff; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
                <tr>
                  <td style="padding: 40px;">
                    <div style="text-align: center; margin-bottom: 24px;">
                      <div style="width: 64px; height: 64px; background-color: #dcfce7; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
                        <span style="font-size: 32px;">&#10003;</span>
                      </div>
                      <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #212D40;">
                        Thanks for Reaching Out!
                      </h1>
                    </div>

                    <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155; line-height: 1.7;">
                      Hi ${formData.name.split(" ")[0]},
                    </p>

                    <p style="margin: 0 0 24px 0; font-size: 15px; color: #334155; line-height: 1.7;">
                      We've received your demo request and we're excited to show you how Alloro can help your practice grow. One of our team members will be in touch within 24 hours to schedule your personalized demo.
                    </p>

                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 24px;">
                      <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #1e293b;">
                        What to expect in your demo:
                      </p>
                      <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.8;">
                        &#10003; See how Alloro analyzes your practice's digital presence<br>
                        &#10003; Identify opportunities you might be missing<br>
                        &#10003; Get a clear roadmap for improvement<br>
                        &#10003; Ask any questions you have
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding-top: 32px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                ${new Date().getFullYear()} Alloro. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Sends email via n8n webhook
 */
async function sendEmail(payload: {
  recipients: string[];
  subject: string;
  body: string;
  bcc?: string[];
}): Promise<void> {
  const response = await fetch(N8N_EMAIL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cc: [],
      bcc: payload.bcc || [],
      body: payload.body,
      from: "info@getalloro.com",
      subject: payload.subject,
      fromName: "Alloro",
      recipients: payload.recipients,
    }),
  });

  if (!response.ok) {
    throw new Error(`Email service responded with status: ${response.status}`);
  }
}

/**
 * Sends internal notification to Alloro team
 */
async function sendInternalNotification(
  formData: DemoRequestFormData,
): Promise<void> {
  await sendEmail({
    recipients: ["info@getalloro.com"],
    subject: `New Demo Request from ${formData.name}`,
    body: generateInternalNotificationHTML(formData),
  });
}

/**
 * Sends confirmation email to the user
 */
async function sendUserConfirmation(
  formData: DemoRequestFormData,
): Promise<void> {
  await sendEmail({
    recipients: [formData.email],
    subject: "Thanks for requesting an Alloro demo!",
    body: generateUserConfirmationHTML(formData),
  });
}

/**
 * Sends both internal notification and user confirmation emails
 */
export async function sendDemoRequestEmails(
  formData: DemoRequestFormData,
): Promise<void> {
  await Promise.all([
    sendInternalNotification(formData),
    sendUserConfirmation(formData),
  ]);
}
