// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY); // Define esta variable en Vercel

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validación rápida
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios.' }, { status: 400 });
    }

    // Enviar correo con Resend
    const data = await resend.emails.send({
      from: 'Contacto Jomsolution <onboarding@resend.dev>', // Puedes cambiar esto tras verificar tu dominio
      to: 'jomsolutionsmx@gmail.com',
      subject: `Mensaje nuevo de ${name}`,
      text: `De: ${name}\nCorreo: ${email}\n\n${message}`,
    });

    return NextResponse.json({ message: 'Correo enviado exitosamente', data }, { status: 200 });
  } catch (error: any) {
    console.error('Error al enviar correo:', error);
    return NextResponse.json(
      { error: error.message || 'No se pudo enviar el mensaje' },
      { status: 500 }
    );
  }
}
