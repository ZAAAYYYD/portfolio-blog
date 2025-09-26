// Service de contact et newsletter avec Web3Forms - VERSION PRODUCTION
// Utilise votre vraie clé Web3Forms pour envoyer de vrais emails

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface NewsletterData {
  email: string
}

// Votre clé Web3Forms (configurée dans les variables d'environnement)
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_KEY_HERE'

export const sendContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        subject: `[Portfolio Contact] ${formData.subject}`,
        message: `
Nouveau message de contact depuis votre portfolio :

Nom: ${formData.name}
Email: ${formData.email}
Sujet: ${formData.subject}

Message:
${formData.message}

---
Envoyé depuis votre portfolio Next.js
        `,
        from_name: 'Portfolio Zayd El Ajli',
        to_email: 'zayd.elajli@gmail.com',
      }),
    })

    const result = await response.json()

    if (result.success) {
      return {
        success: true,
        message: 'Votre message a été envoyé avec succès ! Je vous répondrai rapidement.',
      }
    } else {
      return {
        success: false,
        message: 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement.',
      }
    }
  } catch (error) {
    console.error('Erreur envoi formulaire:', error)
    return {
      success: false,
      message: 'Erreur réseau. Veuillez vérifier votre connexion et réessayer.',
    }
  }
}

// Configuration Brevo pour la newsletter
const BREVO_API_KEY = process.env.BREVO_API_KEY || 'YOUR_BREVO_API_KEY_HERE'
const BREVO_LIST_ID = 3

export const subscribeNewsletter = async (emailData: NewsletterData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('🔄 Début abonnement newsletter pour:', emailData.email)
    
    // 1. Ajouter l'abonné à votre liste Brevo
    const contactResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: emailData.email,
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
          email: emailData.email
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
        ul { padding-left: 20px; }
        li { margin: 8px 0; }
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
                    <li>💻 <strong>Développement Full-Stack</strong> (React, Next.js, Golang)</li>
                    <li>🔐 <strong>Cybersécurité & Audit de systèmes</strong></li>
                    <li>🏗️ <strong>Architecture logicielle & Cloud</strong></li>
                    <li>📊 <strong>Data Science & Analyse de données</strong></li>
                </ul>
            </div>
            
            <div class="list">
                <h3>📚 Prochains articles :</h3>
                <ul>
                    <li>• Retours d'expérience de mon stage chez Cogiphi</li>
                    <li>• Tutoriels techniques avancés</li>
                    <li>• Analyses de nouvelles technologies IA</li>
                    <li>• Projets open source et best practices</li>
                </ul>
            </div>
            
            <div style="text-align: center;">
                <a href="http://localhost:3001/blog" class="highlight">📖 Découvrir mes articles</a>
            </div>
            
            <p><strong>Retrouvez-moi aussi sur :</strong></p>
            <p>
                🐙 <a href="https://github.com/ZAAAYYYD" style="color: #667eea;">GitHub</a> | 
                💼 <a href="https://www.linkedin.com/in/zayd-el-ajli-769943350/" style="color: #667eea;">LinkedIn</a>
            </p>
            
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
        `,
        textContent: `
🎉 Bienvenue dans ma newsletter !

Bonjour et bienvenue ! 👋

Merci de vous être abonné(e) à ma newsletter ! Vous allez recevoir mes derniers articles sur :

🤖 Intelligence Artificielle & Machine Learning
💻 Développement Full-Stack (React, Next.js, Golang)  
🔐 Cybersécurité & Audit de systèmes
🏗️ Architecture logicielle & Cloud
📊 Data Science & Analyse de données

Prochains articles :
• Retours d'expérience de mon stage chez Cogiphi
• Tutoriels techniques avancés
• Analyses de nouvelles technologies IA

Retrouvez-moi sur :
🐙 GitHub: https://github.com/ZAAAYYYD
💼 LinkedIn: https://www.linkedin.com/in/zayd-el-ajli-769943350/

À très bientôt,
Zayd El Ajli
Développeur en formation - Sophia Ynov Campus
        `
      })
    })

    // 3. Notification pour vous via Web3Forms (optionnel)
    const notificationResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: 'Newsletter System',
        email: 'no-reply@portfolio.com',
        subject: '📬 Nouvel abonné newsletter !',
        message: `Nouvel abonné: ${emailData.email}\nDate: ${new Date().toLocaleString('fr-FR')}\nEmail de bienvenue envoyé automatiquement via Brevo.`,
        from_name: 'Portfolio Newsletter',
        to_email: 'zayd.elajli@gmail.com',
      }),
    })

    const contactResult = contactResponse.ok
    const welcomeResult = welcomeResponse.ok

    console.log('✅ Résultats:', { contactResult, welcomeResult })

    if (contactResult && welcomeResult) {
      return {
        success: true,
        message: '🎉 Abonnement réussi ! Un email de bienvenue vous a été envoyé.',
      }
    } else if (contactResult) {
      return {
        success: true,
        message: '✅ Abonnement enregistré ! (Email de bienvenue en cours...)',
      }
    } else {
      // Retour plus détaillé en cas d'erreur
      const errorDetails = !contactResponse.ok ? 
        `Erreur contact (${contactResponse.status})` : 
        `Erreur email (${welcomeResponse.status})`
      
      console.error('❌ Détails erreur:', errorDetails)
      
      return {
        success: false,
        message: 'Erreur lors de l\'abonnement. Vérifiez votre email ou réessayez.',
      }
    }
  } catch (error) {
    console.error('Erreur abonnement newsletter:', error)
    return {
      success: false,
      message: 'Erreur réseau. Veuillez réessayer plus tard.',
    }
  }
}
