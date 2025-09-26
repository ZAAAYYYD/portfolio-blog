// Service de contact sécurisé - utilise les API routes côté serveur
// Aucune clé API exposée côté client !

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface NewsletterData {
  email: string
}

export const sendContactForm = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('🔒 Envoi sécurisé via API route...')
    console.log('📧 Données:', formData)
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()
    console.log('📨 Réponse API:', response.status, result)

    return result
  } catch (error) {
    console.error('❌ Erreur envoi formulaire:', error)
    return {
      success: false,
      message: `Erreur réseau: ${error instanceof Error ? error.message : 'Problème de connexion'}. Contactez-moi directement à zayd.elajli@gmail.com`,
    }
  }
}

export const subscribeNewsletter = async (emailData: NewsletterData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('🔒 Abonnement sécurisé via API route...')
    console.log('📧 Email:', emailData.email)
    
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    const result = await response.json()
    console.log('📨 Réponse Newsletter API:', response.status, result)

    return result
  } catch (error) {
    console.error('❌ Erreur abonnement newsletter:', error)
    return {
      success: false,
      message: 'Erreur réseau. Veuillez réessayer plus tard.',
    }
  }
}
