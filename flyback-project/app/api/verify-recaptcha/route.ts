import { NextResponse } from 'next/server';

// Esta é uma implementação simplificada para fins de demonstração
// Em produção, você deve usar o SDK oficial do Google e verificar o token no servidor
export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ success: false, error: 'Token não fornecido' }, { status: 400 });
    }

    // Em um ambiente de produção, você usaria o SDK do Google para verificar o token
    // Aqui estamos apenas simulando a verificação para fins de demonstração
    const verificationResponse = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/bold-vial-457513-u0/assessments?key=${process.env.RECAPTCHA_SECRET_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: {
            token,
            siteKey: '6LfDZB8rAAAAADtaDB0XPyB1HmYQUct-W_g4HRlm',
            expectedAction: 'SUBMIT_FORM',
          },
        }),
      }
    );

    const data = await verificationResponse.json();

    // Verificar se o token é válido e tem uma pontuação alta o suficiente
    if (data.tokenProperties?.valid && data.riskAnalysis?.score > 0.5) {
      return NextResponse.json({ success: true, score: data.riskAnalysis.score });
    } else {
      return NextResponse.json({ 
        success: false, 
        error: 'Verificação do reCAPTCHA falhou',
        details: data
      }, { status: 400 });
    }
  } catch (error) {
    console.error('Erro ao verificar reCAPTCHA:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Erro interno ao verificar reCAPTCHA' 
    }, { status: 500 });
  }
}
