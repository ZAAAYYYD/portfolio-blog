import { NextRequest, NextResponse } from 'next/server'

// API route côté serveur pour la newsletter
const BREVO_API_KEY = process.env.BREVO_API_KEY
const BREVO_LIST_ID = 3

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

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
      console.error('❌ Erreur ajout contact Brevo:', errorData)
    }

    // 2. Envoyer email de bienvenue via Brevo
    const welcomeResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'Zayd El Ajli',
          email: 'zayd.elajli@gmail.com'
        },
        to: [{
          email: email
        }],
        subject: '🚀 Bienvenue dans ma newsletter tech !',
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { background: #f9fafb; padding: 40px 30px; }
        .highlight { background: #667eea; color: white; padding: 15px 25px; text-decoration: none; border-radius: 8px; display: inline-block; margin: 20px 0; font-weight: bold; }
        .list { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .footer { text-align: center; color: #666; font-size: 14px; padding: 20px; }
        h1 { margin: 0; font-size: 28px; }
        h2 { color: #667eea; margin-top: 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Bienvenue dans ma newsletter !</h1>
            <p style="font-size: 18px; margin: 10px 0 0 0;">Merci de vous être abonné(e) !</p>
        </div>
        
        <div class="content">
            <h2>Bonjour et bienvenue ! 👋</h2>
            
            <p>Merci de vous être abonné(e) à ma newsletter ! Vous allez recevoir mes derniers articles et découvertes dans le monde de la tech.</p>
            
            <div class="list">
                <h3>🚀 Ce que vous allez recevoir :</h3>
                <ul>
                    <li>🤖 <strong>Intelligence Artificielle & Machine Learning</strong></li>
                    <li>💻 <strong>Développement Full-Stack</strong></li>
                    <li>🔐 <strong>Cybersécurité & Audit de systèmes</strong></li>
                    <li>🏗️ <strong>Architecture logicielle & Cloud</strong></li>
                    <li>📊 <strong>Data Science & Analyse de données</strong></li>
                </ul>
            </div>
            
            <p>Merci encore pour votre confiance ! 🙏</p>
            
            <p><strong>À très bientôt,<br>
            Zayd El Ajli</strong><br>
            <em>Développeur en formation - Sophia Ynov Campus</em></p>
        </div>
        
        <div class="footer">
            <p>📧 Cet email a été envoyé automatiquement suite à votre abonnement.</p>
            <p>Portfolio Next.js • Newsletter Tech & IA</p>
        </div>
    </div>
</body>
</html>
        `
      })
    })

    const contactResult = contactResponse.ok
    const welcomeResult = welcomeResponse.ok

    console.log('✅ Résultats:', { contactResult, welcomeResult })

    if (contactResult && welcomeResult) {
      return NextResponse.json({
        success: true,
        message: '🎉 Abonnement réussi ! Un email de bienvenue vous a été envoyé.'
      })
    } else if (contactResult) {
      return NextResponse.json({
        success: true,
        message: '✅ Abonnement enregistré ! (Email de bienvenue en cours...)'
      })
    } else {
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
