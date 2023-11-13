import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome to Blink</h1>
    <p>Hello {firstName},</p>
    <p>We're excited to have you onboard at Blink. We hope you enjoy your journey with us. If you have any questions or need assistance, feel free to reach out.</p>
    <br></br>
    <p>Cheers,<br></br>
The ACME Team</p>
  </div>
);