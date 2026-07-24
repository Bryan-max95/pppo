import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.company || !body.userName || !body.description) {
      return NextResponse.json(
        {
          success: false,
          code: 'VALIDATION_ERROR',
          message: 'Por favor detalla los campos requeridos para el soporte.',
        },
        { status: 400 }
      );
    }

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const ticketId = `TK-2026-${randomNum}`;

    console.log(`[SUPPORT TICKET RECEIVED] ${ticketId}`, {
      company: body.company,
      user: body.userName,
      module: body.affectedModule,
      priority: body.priority
    });

    return NextResponse.json({
      success: true,
      ticketId,
      message: 'Tu ticket de soporte ha sido generado y asignado al equipo técnico.',
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        code: 'SERVER_ERROR',
        message: 'No se pudo crear el ticket de soporte.',
      },
      { status: 500 }
    );
  }
}
