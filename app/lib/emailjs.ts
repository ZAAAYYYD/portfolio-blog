import emailjs from '@emailjs/browser'

// Configuration EmailJS
const EMAILJS_SERVICE_ID = 'service_portfolio'
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_contact'
const EMAILJS_TEMPLATE_ID_NEWSLETTER = 'template_newsletter'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // À remplacer par votre clé

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface NewsletterData {
  email: string
}

// Initialiser EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'zayd.elajli@gmail.com', // Votre email de réception
      reply_to: formData.email,
    }

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    )

    console.log('Email envoyé avec succès:', result.text)
    return true
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return false
  }
}

export const subscribeToNewsletter = async (emailData: NewsletterData): Promise<boolean> => {
  try {
    const templateParams = {
      user_email: emailData.email,
      to_email: 'zayd.elajli@gmail.com', // Votre email pour recevoir les abonnements
      message: `Nouvel abonnement à la newsletter de: ${emailData.email}`,
    }

    // Envoi à vous pour notification
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_NEWSLETTER,
      templateParams
    )

    // Email de confirmation à l'abonné
    const confirmationParams = {
      user_email: emailData.email,
      to_email: emailData.email,
      user_name: 'Nouveau subscriber',
      message: 'Merci pour votre abonnement à ma newsletter ! Vous recevrez mes derniers articles sur la technologie et l\'IA.',
    }

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      'template_confirmation', // Template de confirmation
      confirmationParams
    )

    console.log('Newsletter abonnement réussi')
    return true
  } catch (error) {
    console.error('Erreur abonnement newsletter:', error)
    return false
  }
}

// Configuration pour développement local
export const setupEmailJS = () => {
  // Pour le développement, utiliser un service de test
  if (process.env.NODE_ENV === 'development') {
    console.log('EmailJS configuré pour le développement')
  }
}
