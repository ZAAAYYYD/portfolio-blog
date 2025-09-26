'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { subscribeNewsletter } from '../lib/contact-secure'

export default function Blog() {
  const [emailNewsletter, setEmailNewsletter] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  })

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)
    setSubscribeStatus({ type: null, message: '' })

    try {
      if (!emailNewsletter || !emailNewsletter.includes('@')) {
        setSubscribeStatus({
          type: 'error',
          message: 'Veuillez entrer une adresse email valide.'
        })
        setIsSubscribing(false)
        return
      }

      const result = await subscribeNewsletter({ email: emailNewsletter })
      
      if (result.success) {
        setSubscribeStatus({
          type: 'success',
          message: result.message
        })
        setEmailNewsletter('')
      } else {
        setSubscribeStatus({
          type: 'error',
          message: result.message
        })
      }
    } catch (error) {
      setSubscribeStatus({
        type: 'error',
        message: 'Erreur lors de l\'abonnement. Veuillez réessayer.'
      })
    } finally {
      setIsSubscribing(false)
    }
  }

  const articles = [
    {
      id: 'bilan-stage-cogiphi',
      title: 'Bilan de mon stage chez Cogiphi : Une immersion dans la transformation digitale',
      excerpt: 'Retour d\'expérience sur mon stage d\'analyste fonctionnel chez Cogiphi, spécialisé dans l\'analyse de la plateforme eFront ERM et l\'audit de sécurité.',
      date: '2025-01-15',
      readTime: '8 min',
      category: 'Expérience Professionnelle',
      tags: ['Stage', 'Cogiphi', 'eFront ERM', 'Analyse Fonctionnelle', 'Sécurité'],
      featured: true
    },
    {
      id: 'intelligence-artificielle-2025',
      title: 'Vers une Automatisation Fiable de la Supervision des Flux Numériques : Cadre d\'Orchestration d\'Agents d\'Audit et de Sécurité pour la Détection et le Reporting Dynamique',
      excerpt: 'Cette recherche propose un cadre innovant d\'agents autonomes spécialisés dans l\'audit et la sécurité, capables de surveiller dynamiquement les flux numériques et de détecter proactivement les anomalies avec mécanismes de notification automatique.',
      date: '2025-01-10',
      readTime: '12 min',
      category: 'Audit et Sécurité',
      tags: ['Supervision', 'Audit', 'Sécurité', 'Détection Anomalies', 'Monitoring Intelligent']
    },
    {
      id: 'developpement-fullstack-moderne',
      title: 'Systèmes Distribués pour Agents Autonomes : Stratégies de Déploiement Multi-Instance de Navigateurs Virtualisés via Proxy Inversé dans des Infrastructures Cloud Élastiques',
      excerpt: 'Cette recherche examine les enjeux liés au déploiement d\'agents autonomes à grande échelle dans le cloud, proposant des stratégies de distribution assurant flexibilité et élasticité avec focus sur l\'isolation, le routage et la tolérance aux pannes.',
      date: '2025-01-05',
      readTime: '15 min',
      category: 'Systèmes Distribués',
      tags: ['Cloud Computing', 'Agents Autonomes', 'Proxy Inversé', 'Élasticité', 'Infrastructure']
    },
    {
      id: 'securite-applications-web',
      title: 'Authentification Visuelle et Détection de Contrefaçons : Une Approche Multi-Modale Fondée sur DINOv2, CLIP et l\'Intégration de Méthodes d\'Explainable AI',
      excerpt: 'Cette recherche aborde la détection de contrefaçons dans des flux d\'images massifs via des représentations visuelles avancées de modèles auto-supervisés et multi-modaux, avec accent sur l\'interprétabilité des décisions.',
      date: '2024-12-28',
      readTime: '10 min',
      category: 'Vision par Ordinateur',
      tags: ['DINOv2', 'CLIP', 'Explainable AI', 'Détection Contrefaçons', 'Multi-Modal']
    },
    {
      id: 'gestion-donnees-python',
      title: 'Vers des Agents Conversationnels Contextuels : Intégration de Mémoires Persistantes et de Modèles de Langage pour la Recherche Sémantique sur Données Dynamiques',
      excerpt: 'Cette recherche explore la conception d\'agents conversationnels gérant des interactions durables via des mécanismes de mémoire persistante, dépassant les limites classiques par l\'intégration de recherche sémantique sur données évolutives.',
      date: '2024-12-20',
      readTime: '11 min',
      category: 'Agents Conversationnels',
      tags: ['NLP', 'Mémoire Persistante', 'Recherche Sémantique', 'Modèles de Langage', 'Contextualisation']
    },
    {
      id: 'architecture-microservices',
      title: 'Conception d\'Interfaces Immersives : Étude Expérimentale sur l\'Intégration du Design Front-End et des Animations Interactives dans des Systèmes Web Modernes',
      excerpt: 'Cette recherche s\'intéresse à la création d\'interfaces web alliant esthétique et performance, évaluant comment les choix de design front-end influencent l\'adoption et l\'efficacité des systèmes numériques modernes.',
      date: '2024-12-15',
      readTime: '14 min',
      category: 'Interface Homme-Machine',
      tags: ['UX/UI Design', 'Animations Web', 'Performance', 'Interfaces Immersives', 'Front-End']
    }
  ]

  const categories = [
    'Tous',
    'Expérience Professionnelle',
    'Intelligence Artificielle',
    'Développement Web',
    'Cybersécurité',
    'Data Science',
    'Architecture Logicielle'
  ]

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
            <h1 className="text-5xl font-bold mb-6 gradient-text">Blog & Articles</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Mes réflexions sur la technologie, l&apos;intelligence artificielle et mes expériences 
              dans le développement logiciel et l&apos;analyse fonctionnelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category === 'Tous'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Article à la Une</h2>
          </motion.div>

          {articles
            .filter(article => article.featured)
            .map((article) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 card-hover"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        À la Une
                      </span>
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-6 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${article.id}`}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 card-hover"
                    >
                      Lire l&apos;article
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-8">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Tous les Articles</h2>
            <p className="text-xl text-gray-600">Explorez mes dernières réflexions et découvertes</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles
              .filter(article => !article.featured)
              .map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-800 leading-tight line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar size={14} />
                      <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-200 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${article.id}`}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  >
                    Lire la suite
                    <ArrowRight size={14} />
                  </Link>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Restez informé de mes derniers articles
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Suivez mes réflexions sur la technologie et mes découvertes en développement
            </p>
            
            {/* Message de statut newsletter */}
            {subscribeStatus.type && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg text-sm mb-6 max-w-md mx-auto ${
                  subscribeStatus.type === 'success'
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}
              >
                {subscribeStatus.message}
              </motion.div>
            )}

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={emailNewsletter}
                onChange={(e) => setEmailNewsletter(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="px-4 py-3 rounded-lg flex-1 focus:ring-2 focus:ring-white focus:outline-none text-gray-800"
              />
              <button 
                type="submit"
                disabled={isSubscribing}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 card-hover ${
                  isSubscribing 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-white text-blue-600 hover:shadow-lg'
                }`}
              >
                {isSubscribing ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    Inscription...
                  </div>
                ) : (
                  "S'abonner"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
