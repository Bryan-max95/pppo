import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.company || !body.contactName || !body.phone || !body.email) {
      return NextResponse.json(
        {
          success: false,
          code: 'VALIDATION_ERROR',
          message: 'Completa los campos obligatorios para generar tu cotización.',
        },
        { status: 400 }
      );
    }

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const requestId = `COT-2026-${randomNum}`;

    console.log(`[QUOTE LEAD RECEIVED] ${requestId}`, {
      company: body.company,
      contact: body.contactName,
      posCount: body.posCount,
      industry: body.industry
    });

    return NextResponse.json({
      success: true,
      requestId,
      message: 'Hemos recibido tu solicitud de cotización. Te enviaremos la propuesta comercial detallada.',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        code: 'SERVER_ERROR',
        message: 'Error al registrar la solicitud de cotización.',
      },
      { status: 500 }
    );
  }
}
