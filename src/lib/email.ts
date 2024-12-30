import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jomsolutionsmx@gmail.com', 
    pass: 'njpfdghjsjmbperr', 
  },
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  const mailOptions = {
    from: 'jomsolutionsmx@gmail.com',
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email enviado correctamente.');
  } catch (error) {
    console.error('Error enviando correo:', error);
    throw error;
  }
};
