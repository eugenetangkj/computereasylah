// pages/api/sendEmail.ts
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { subject, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: 'smtp.elasticemail.com',
        port: 2525,
        secure: false,
        auth: {
          user: 'computereasylah@gmail.com',
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: 'computereasylah@gmail.com',
        to: 'computereasylah@gmail.com',
        subject: subject,
        text: message,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent: ' + info.response);

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
