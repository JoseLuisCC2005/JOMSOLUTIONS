import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Configurar el transporte de nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, // Define en variables de entorno
        pass: process.env.EMAIL_PASSWORD, // Define en variables de entorno
      },
    });

    // Configurar el correo
    const mailOptions = {
      from: email,
      to: 'jomsolutionsmx@gmail.com', // Correo de destino
      subject: `Message from ${name}`,
      text: message,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
