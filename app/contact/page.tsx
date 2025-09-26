'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Building, Users, Target, Award, Send } from 'lucide-react'
import { useState } from 'react'
import { sendContactForm } from '../lib/contact-secure'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      // Validation basique
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setSubmitStatus({
          type: 'error',
          message: 'Veuillez remplir tous les champs obligatoires.'
        })
        setIsSubmitting(false)
        return
      }

      // Envoi via API route sécurisée (aucune clé exposée)
      const result = await sendContactForm(formData)
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message
        })
        // Reset du formulaire
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur inattendue est survenue. Veuillez réessayer.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">Prenons Contact</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Je suis ouvert aux opportunités de collaboration, stages et projets innovants. 
              N&apos;hésitez pas à me contacter pour discuter de vos idées !
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Context - Cogiphi */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Mon Expérience chez Cogiphi</h2>
            <p className="text-xl text-gray-600">Immersion dans la transformation digitale</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800">À propos de Cogiphi</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Cogiphi est une société de conseil parisienne spécialisée dans la transformation digitale 
                et l&apos;intégration de logiciels. Basée au cœur de Paris (10 Rue de Penthièvre, 75008), 
                cette SAS dynamique s&apos;est donnée pour mission de sortir des sentiers battus pour proposer 
                un service de proximité innovant et très spécialisé.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                L&apos;entreprise se distingue par sa philosophie unique : l&apos;alliance du moderne et du classique, 
                de la jeunesse et de l&apos;expérience. Cette approche permet à Cogiphi de proposer un conseil 
                polyvalent et toujours plus novateur à ses clients.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="text-blue-500" size={20} />
                  <span className="text-gray-700">SAS au capital de 9 000 €</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-500" size={20} />
                  <span className="text-gray-700">10 Rue de Penthièvre, 75008 Paris</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="text-blue-500" size={20} />
                  <span className="text-gray-700">RCS Paris : 885 341 354</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-blue-500" size={24} />
                  <h4 className="text-lg font-semibold text-gray-800">Secteurs d&apos;expertise</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Assurance - Grands acteurs du marché</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Banque - Institutions financières</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Industrie - Solutions métiers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-purple-500" size={24} />
                  <h4 className="text-lg font-semibold text-gray-800">Services Cogiphi</h4>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Transformation digitale</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Intégration de logiciels spécialisés</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Solutions SIGR/GRC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Conseil en processus métiers</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* My Experience at Cogiphi */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Mon Immersion Professionnelle</h2>
            <p className="text-lg text-gray-600">Une expérience enrichissante au cœur de l&apos;innovation</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Mon rôle de Stagiaire Analyste Fonctionnel</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Mission principale</h4>
                <p className="text-gray-700 leading-relaxed">
                  J&apos;ai eu l&apos;opportunité d&apos;analyser en profondeur la plateforme eFront ERM (Enterprise Risk Management), 
                  un système complexe de gestion des risques utilisé par les plus grandes institutions financières. 
                  Cette mission m&apos;a permis de comprendre les enjeux critiques de la transformation digitale 
                  dans le secteur financier.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Contributions techniques</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Audit de sécurité :</strong> Analyse approfondie des rôles utilisateurs et détection 
                      d&apos;anomalies critiques dans la gestion des droits d&apos;accès
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Analyse fonctionnelle :</strong> Cartographie complète des processus de gestion des risques, 
                      de la détection d&apos;incidents à la mise en place de plans d&apos;action
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Benchmark concurrentiel :</strong> Étude comparative de 4 acteurs majeurs du secteur 
                      SIGR/GRC pour positionner l&apos;offre Cogiphi
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <strong>Documentation technique :</strong> Rédaction de rapports détaillés et recommandations 
                      d&apos;amélioration pour optimiser les processus clients
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-600">Apprentissages clés</h4>
                <p className="text-gray-700 leading-relaxed">
                  Cette expérience m&apos;a donné une vision concrète des défis de la transformation digitale 
                  dans les grandes organisations. J&apos;ai appris à naviguer dans des systèmes complexes, 
                  à identifier les risques opérationnels et à proposer des solutions techniques adaptées. 
                  L&apos;approche collaborative de Cogiphi m&apos;a également permis de développer mes compétences 
                  en communication technique et en gestion de projet.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Écrivez-moi</h2>
            <p className="text-xl text-gray-600">Je suis disponible pour vos projets et opportunités</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Informations de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">zayd.elajli@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MapPin className="text-green-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Localisation</p>
                      <p className="text-gray-600">Sophia Antipolis, France</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Phone className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Disponibilité</p>
                      <p className="text-gray-600">Lun-Ven 9h-18h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Mes Profils Professionnels</h4>
                <div className="space-y-3 mb-4">
                  <a 
                    href="https://github.com/ZAAAYYYD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>GitHub : @ZAAAYYYD</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/zayd-el-ajli-769943350/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>LinkedIn : Zayd El Ajli</span>
                  </a>
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">Types de collaborations recherchées</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Stages en développement full-stack</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Projets d&apos;intelligence artificielle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Missions d&apos;analyse fonctionnelle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Collaboration sur projets innovants</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="stage">Opportunité de stage</option>
                    <option value="projet">Collaboration sur projet</option>
                    <option value="conseil">Demande de conseil</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                {/* Message de statut */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-sm ${
                      submitStatus.type === 'success'
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
