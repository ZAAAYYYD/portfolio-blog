// Service de démonstration pour les formulaires (fonctionne immédiatement)
// En production, utilisez Web3Forms ou EmailJS avec les vraies clés

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface NewsletterData {
  email: string
}

// Simulation d'envoi d'email pour la démo
const simulateEmailSend = (delay: number = 1500): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simule un succès dans 90% des cas
      resolve(Math.random() > 0.1)
    }, delay)
  })
}

export const sendContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('📧 DÉMO - Message reçu:', {
      nom: formData.name,
      email: formData.email,
      sujet: formData.subject,
      message: formData.message.substring(0, 50) + '...',
      timestamp: new Date().toLocaleString('fr-FR')
    })

    // Simulation d'envoi
    const success = await simulateEmailSend()

    if (success) {
      // En production, ceci enverrait un vrai email à zayd.elajli@gmail.com
      console.log('✅ Email envoyé avec succès (simulation)')
      return {
        success: true,
        message: '✅ Message envoyé avec succès ! Je vous répondrai rapidement. (Mode démo - configurez Web3Forms pour les vrais emails)'
      }
    } else {
      return {
        success: false,
        message: '❌ Erreur simulation. En production, configurez Web3Forms dans EMAIL_SETUP_GUIDE.md'
      }
    }
  } catch (error) {
    console.error('Erreur formulaire démo:', error)
    return {
      success: false,
      message: '❌ Erreur réseau. Consultez EMAIL_SETUP_GUIDE.md pour la configuration complète.'
    }
  }
}

export const subscribeNewsletter = async (emailData: NewsletterData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('📬 DÉMO - Nouvel abonné newsletter:', {
      email: emailData.email,
      timestamp: new Date().toLocaleString('fr-FR')
    })

    // Simulation d'abonnement
    const success = await simulateEmailSend(1000)

    if (success) {
      console.log('✅ Newsletter abonnement réussi (simulation)')
      console.log('📧 Email de bienvenue envoyé à:', emailData.email)
      console.log(`
📬 EMAIL DE BIENVENUE (simulation) :
=====================================
À: ${emailData.email}
Sujet: ✅ Bienvenue dans ma newsletter ! 🚀

Merci de vous être abonné(e) ! 
Vous recevrez mes articles sur l'IA, le développement et la tech.

Zayd El Ajli
      `)
      
      return {
        success: true,
        message: '✅ Abonnement réussi ! Un email de bienvenue vous a été envoyé. (Mode démo - configurez Web3Forms pour les vrais emails)'
      }
    } else {
      return {
        success: false,
        message: '❌ Erreur simulation abonnement. Configurez Web3Forms pour un système réel.'
      }
    }
  } catch (error) {
    console.error('Erreur newsletter démo:', error)
    return {
      success: false,
      message: '❌ Erreur abonnement. Consultez EMAIL_SETUP_GUIDE.md pour la configuration.'
    }
  }
}

// Pour le mode production avec vraies clés
export const isProductionReady = () => {
  return process.env.WEB3FORMS_ACCESS_KEY && process.env.WEB3FORMS_ACCESS_KEY !== 'demo-key-replace-with-yours'
}

// Instructions affichées en console
console.log(`
🎯 PORTFOLIO EMAIL SYSTEM - MODE DÉMO
=====================================

📧 Les formulaires fonctionnent en mode démo !
✅ Contact: http://localhost:3000/contact  
✅ Newsletter: http://localhost:3000/blog

📋 Pour les VRAIS emails (production):
1. Ouvrez: EMAIL_SETUP_GUIDE.md
2. Créez un compte Web3Forms (gratuit)
3. Remplacez la clé dans contact.ts
4. Les emails arriveront sur zayd.elajli@gmail.com

⚡ Configuration complète en 5 minutes !
`)

export { sendContactForm as demoContactForm, subscribeNewsletter as demoNewsletterSubscribe }
