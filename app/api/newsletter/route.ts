import { NextRequest, NextResponse } from 'next/server'

// API route côté serveur pour la newsletter
const BREVO_LIST_ID = 3

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    // Lecture de la clé au runtime (pas au niveau du module)
    const BREVO_API_KEY = process.env.BREVO_API_KEY
    
    console.log('🔑 Runtime check - BREVO_API_KEY existe:', !!BREVO_API_KEY)
    console.log('🔑 Runtime check - longueur clé:', BREVO_API_KEY?.length)

    // Validation
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email requis' },
        { status: 400 }
      )
    }

    if (!BREVO_API_KEY) {
      return NextResponse.json(
        { success: false, message: 'Configuration Brevo manquante' },
        { status: 500 }
      )
    }

    console.log('🔄 Début abonnement newsletter pour:', email)
    
    // 1. Ajouter l'abonné à votre liste Brevo
    const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [BREVO_LIST_ID],
        attributes: {
          SOURCE: 'Portfolio Next.js',
          SUBSCRIPTION_DATE: new Date().toISOString().split('T')[0]
        },
        updateEnabled: true
      })
    })

    console.log('📋 Réponse ajout contact:', contactResponse.status, contactResponse.statusText)
    
    if (!contactResponse.ok) {
      const errorData = await contactResponse.json()
      console.error('❌ Erreur ajout contact Brevo:', contactResponse.status, errorData)
      // Retourner l'erreur exacte pour debug
      return NextResponse.json({
        success: false,
        message: `Erreur Brevo ${contactResponse.status}: ${JSON.stringify(errorData)}`
      }, { status: 400 })
    }

    // Pas d'email de bienvenue pour l'instant (problème d'expéditeur)
    console.log('✅ Contact ajouté à la liste:', contactResponse.ok)

    if (contactResponse.ok) {
      return NextResponse.json({
        success: true,
        message: '🎉 Abonnement réussi à la newsletter !'
      })
    } else {
      const errorData = await contactResponse.json()
      console.error('❌ Erreur Brevo:', errorData)
      return NextResponse.json(
        { success: false, message: 'Erreur lors de l\'abonnement' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Erreur abonnement newsletter:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
