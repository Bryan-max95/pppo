import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.fullName || !body.email || !body.message) {
      return NextResponse.json(
        {
          success: false,
          code: 'VALIDATION_ERROR',
          message: 'Por favor completa tu nombre, correo y mensaje.',
        },
        { status: 400 }
      );
    }

    console.log(`[CONTACT INQUIRY RECEIVED]`, {
      name: body.fullName,
      company: body.company,
      email: body.email,
      phone: body.phone
    });

    return NextResponse.json({
      success: true,
      message: 'Mensaje recibido. Nos comunicaremos contigo a la brevedad.',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        code: 'SERVER_ERROR',
        message: 'Error al procesar el mensaje.',
      },
      { status: 500 }
    );
  }
}
