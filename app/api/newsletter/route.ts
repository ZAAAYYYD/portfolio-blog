import { NextRequest, NextResponse } from 'next/server'

// API route côté serveur pour la newsletter
const BREVO_LIST_ID = 3

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    // Lecture de la clé au runtime - SEULEMENT NEXT_BREVO_KEY (pas de cache Vercel)
    const NEXT_BREVO_KEY = process.env.NEXT_BREVO_KEY
    
    console.log('🔑 Runtime check - NEXT_BREVO_KEY existe:', !!NEXT_BREVO_KEY)
    console.log('🔑 Runtime check - longueur clé:', NEXT_BREVO_KEY?.length)
    console.log('🔑 Runtime check - premiers 20 chars:', NEXT_BREVO_KEY?.substring(0, 20))
    console.log('🔑 Runtime check - derniers 10 chars:', NEXT_BREVO_KEY?.slice(-10))

    // Validation
    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email requis' },
        { status: 400 }
      )
    }

    if (!NEXT_BREVO_KEY) {
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
        'api-key': NEXT_BREVO_KEY,
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

    console.log('✅ Contact ajouté à la liste:', contactResponse.ok)

    // 2. Envoyer email de bienvenue via Brevo
    const welcomeResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': NEXT_BREVO_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: 'Zayd El Ajli',
          email: 'zayd.elajli@gmail.com'
        },
        to: [{ email: email }],
        subject: '🚀 Bienvenue dans ma newsletter tech !',
        htmlContent: `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
        .content { padding: 30px; background: #f8f9fa; }
        .footer { padding: 20px; text-align: center; color: #666; font-size: 14px; }
        .button { background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin: 20px 0; }
        .tech-list { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
        .tech-item { padding: 8px 0; border-bottom: 1px solid #eee; }
        .tech-item:last-child { border-bottom: none; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Bienvenue dans ma newsletter !</h1>
            <p>Merci de vous être abonné(e) !</p>
        </div>
        
        <div class="content">
            <h2>Bonjour et bienvenue ! 👋</h2>
            <p>Merci de vous être abonné(e) à ma newsletter ! Vous allez recevoir mes derniers articles et découvertes dans le monde de la tech.</p>
            
            <div class="tech-list">
                <h3>🚀 Ce que vous allez recevoir :</h3>
                <div class="tech-item">🤖 Intelligence Artificielle & Machine Learning</div>
                <div class="tech-item">💻 Développement Full-Stack (React, Next.js, Golang)</div>
                <div class="tech-item">🔒 Cybersécurité & Audit de systèmes</div>
                <div class="tech-item">🏗️ Architecture logicielle & Cloud</div>
                <div class="tech-item">📊 Data Science & Analyse de données</div>
            </div>

            <h3>📚 Prochains articles :</h3>
            <ul>
                <li>• Retours d'expérience de mon stage chez Cogiphi</li>
                <li>• Tutoriels techniques avancés</li>
                <li>• Analyses de nouvelles technologies IA</li>
                <li>• Projets open source et best practices</li>
            </ul>

            <a href="https://zayd-portfolio.com/blog" class="button">📖 Découvrir mes articles</a>
        </div>
        
        <div class="footer">
            <p>Retrouvez-moi aussi sur :</p>
            <p>💼 <a href="https://github.com/zaydrhlalou">GitHub</a> | 🔗 <a href="https://linkedin.com/in/zayd-el-ajli">LinkedIn</a></p>
            <p>Merci encore pour votre confiance ! 🙏</p>
            <br>
            <p>À très bientôt,<br>
            <strong>Zayd El Ajli</strong><br>
            <em>Développeur en formation - Sophia Ynov Campus</em></p>
            
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #999;">
                📧 Cet email a été envoyé automatiquement suite à votre abonnement.<br>
                Portfolio Next.js • Newsletter Tech & IA
            </p>
        </div>
    </div>
</body>
</html>`,
        textContent: `Bienvenue dans ma newsletter !

Merci de vous être abonné(e) à ma newsletter tech !

Vous allez recevoir mes derniers articles sur :
- Intelligence Artificielle & Machine Learning
- Développement Full-Stack (React, Next.js, Golang)  
- Cybersécurité & Audit de systèmes
- Architecture logicielle & Cloud
- Data Science & Analyse de données

Prochains articles :
• Retours d'expérience de mon stage chez Cogiphi
• Tutoriels techniques avancés
• Analyses de nouvelles technologies IA
• Projets open source et best practices

Découvrez mes articles : https://zayd-portfolio.com/blog

Retrouvez-moi aussi sur GitHub et LinkedIn !

À très bientôt,
Zayd El Ajli
Développeur en formation - Sophia Ynov Campus

---
Portfolio Next.js • Newsletter Tech & IA`
      })
    })

    if (!welcomeResponse.ok) {
      const errorData = await welcomeResponse.json()
      console.error('❌ Erreur email de bienvenue:', errorData)
      return NextResponse.json({ 
        success: false, 
        message: 'Contact ajouté mais erreur envoi email de bienvenue' 
      }, { status: 400 })
    }

    console.log('✅ Email de bienvenue envoyé:', welcomeResponse.ok)

    return NextResponse.json({
      success: true,
      message: '🎉 Abonnement réussi ! Un email de bienvenue vous a été envoyé.'
    })
  } catch (error) {
    console.error('Erreur abonnement newsletter:', error)
    return NextResponse.json(
      { success: false, message: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
