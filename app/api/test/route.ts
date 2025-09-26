import { NextResponse } from 'next/server'

// Endpoint de test pour vérifier la configuration
export async function GET() {
  try {
    const hasWeb3Forms = !!process.env.WEB3FORMS_ACCESS_KEY
    const hasBrevو = !!process.env.BREVO_API_KEY
    
    return NextResponse.json({
      success: true,
      config: {
        web3forms: hasWeb3Forms ? '✅ Configuré' : '❌ Manquant',
        brevo: hasBrevو ? '✅ Configuré' : '❌ Manquant',
        environment: process.env.NODE_ENV || 'development'
      },
      message: 'Configuration vérifiée'
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erreur de configuration' },
      { status: 500 }
    )
  }
}
