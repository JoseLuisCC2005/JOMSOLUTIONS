import { NextResponse } from 'next/server';
import rateLimit from 'express-rate-limit';

// Crear una función de rate-limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    keyGenerator: (req) => req.ip || req.headers['x-forwarded-for'] || 'unknown',
    message: 'Too many requests, please try again later.',
  });
  

export async function middleware(req: Request) {
  try {
    await limiter(req, {} as any, () => {});
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: 'Demasiadas solicitudes.' }, { status: 429 });
  }
}
