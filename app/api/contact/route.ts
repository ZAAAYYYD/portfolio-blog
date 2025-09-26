import { NextRequest, NextResponse } from 'next/server'

// API route côté serveur - peut accéder aux variables d'environnement
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY
const BREVO_API_KEY = process.env.BREVO_API_KEY

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      return NextResponse.json(
        { success: false, message: 'Configuration manquante côté serveur' },
        { status: 500 }
      )
    }

    // Envoi via Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name,
        email: email,
        subject: `[Portfolio Contact] ${subject}`,
        message: `Nouveau message de contact depuis votre portfolio :

Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}

---
Envoyé depuis votre portfolio Next.js`
      }),
    })

    const result = await response.json()

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: 'Votre message a été envoyé avec succès ! Je vous répondrai rapidement.'
      })
    } else {
      return NextResponse.json(
        { success: false, message: 'Erreur lors de l\'envoi du message' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('Erreur API contact:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
