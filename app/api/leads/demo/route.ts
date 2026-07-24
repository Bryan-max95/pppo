import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.fullName || !body.company || !body.phone || !body.email) {
      return NextResponse.json(
        {
          success: false,
          code: 'VALIDATION_ERROR',
          message: 'Por favor revisa los campos obligatorios del formulario.',
        },
        { status: 400 }
      );
    }

    // Generate unique Request ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const requestId = `BWP-2026-${randomNum}`;

    console.log(`[DEMO LEAD RECEIVED] ${requestId}`, {
      company: body.company,
      contact: body.fullName,
      email: body.email,
      phone: body.phone,
      businessType: body.businessType,
      posCount: body.posCount
    });

    return NextResponse.json({
      success: true,
      requestId,
      message: 'Recibimos tu solicitud de demostración. Nuestro equipo comercial se comunicará contigo pronto.',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        code: 'SERVER_ERROR',
        message: 'Ocurrió un error inesperado al procesar la solicitud.',
      },
      { status: 500 }
    );
  }
}
