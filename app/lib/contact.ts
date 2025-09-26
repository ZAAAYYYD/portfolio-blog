// Service de contact avec Web3Forms (solution simple et gratuite)

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface NewsletterData {
  email: string
}

// Clé publique Web3Forms (gratuit, 1000 emails/mois)
// Clé configurée - emails arrivent sur zayd.elajli@gmail.com
const WEB3FORMS_ACCESS_KEY = '1a29d4fc-7394-47e5-98da-1bf1270b9156'

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

export const subscribeNewsletter = async (emailData: NewsletterData): Promise<{ success: boolean; message: string }> => {
  try {
    // 1. Notification pour vous (Zayd)
    const notificationResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: 'Système Newsletter',
        email: 'no-reply@portfolio.com',
        subject: '📬 [Portfolio Newsletter] Nouvel abonnement !',
        message: `
🎉 NOUVEL ABONNÉ À VOTRE NEWSLETTER !

📧 Email: ${emailData.email}
📅 Date: ${new Date().toLocaleString('fr-FR')}
🌐 Source: Portfolio Next.js

L'utilisateur souhaite recevoir vos articles sur la technologie et l'IA.

---
Notification automatique depuis votre portfolio
        `,
        from_name: 'Portfolio Newsletter System',
        to_email: 'zayd.elajli@gmail.com',
      }),
    })

    // 2. Email de confirmation stylé pour l'abonné
    const confirmationResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: 'Zayd El Ajli',
        email: 'zayd.elajli@gmail.com',
        subject: '✅ Bienvenue dans ma newsletter ! 🚀',
        message: `
Bonjour et bienvenue ! 👋

Merci de vous être abonné(e) à ma newsletter ! 🎉

Vous recevrez désormais mes derniers articles sur :
🤖 Intelligence Artificielle & Machine Learning
💻 Développement Full-Stack (React, Next.js, Golang)
🔐 Cybersécurité & Audit de systèmes
🏗️ Architecture logicielle & Cloud
📊 Data Science & Analyse de données

Prochains articles à venir :
• Retours d'expérience de mon stage chez Cogiphi
• Tutoriels techniques avancés
• Analyses de nouvelles technologies

Vous pouvez consulter mes articles existants sur :
👉 ${process.env.NODE_ENV === 'production' ? 'https://votre-domaine.com' : 'http://localhost:3000'}/blog

Et retrouvez-moi sur :
🐙 GitHub: github.com/ZAAAYYYD
💼 LinkedIn: linkedin.com/in/zayd-el-ajli-769943350

Merci encore pour votre confiance !

À très bientôt,
Zayd El Ajli
Développeur en formation - Sophia Ynov Campus

---
📧 Cet email a été envoyé automatiquement suite à votre abonnement sur mon portfolio.
        `,
        from_name: 'Zayd El Ajli - Portfolio',
        to_email: emailData.email,
      }),
    })

    const notificationResult = await notificationResponse.json()
    const confirmationResult = await confirmationResponse.json()

    if (notificationResult.success && confirmationResult.success) {
      return {
        success: true,
        message: '🎉 Abonnement réussi ! Un email de confirmation vous a été envoyé.',
      }
    } else if (notificationResult.success) {
      return {
        success: true,
        message: '✅ Abonnement enregistré ! (Email de confirmation en cours d\'envoi...)',
      }
    } else {
      return {
        success: false,
        message: 'Erreur lors de l\'abonnement. Veuillez réessayer.',
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

// Solution de fallback avec Formspree (alternatif)
export const sendWithFormspree = async (formData: ContactFormData) => {
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }),
  })
  
  return response.ok
}
