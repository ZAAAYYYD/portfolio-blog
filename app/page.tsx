'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Brain, Server, Database } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const skills = [
    { icon: Code, name: 'Développement Full-Stack', desc: 'React, Next.js, Golang, Python' },
    { icon: Brain, name: 'Intelligence Artificielle', desc: 'TensorFlow, PyTorch, ML/DL' },
    { icon: Server, name: 'Backend & API', desc: 'Golang, Node.js, PHP, REST APIs' },
    { icon: Database, name: 'Bases de Données', desc: 'MySQL, PostgreSQL, MongoDB' },
  ]

  const projects = [
    {
      title: 'Analyse eFront ERM',
      desc: 'Audit fonctionnel et sécuritaire de la plateforme de gestion des risques',
      tech: ['Analyse fonctionnelle', 'Audit sécurité', 'SIGR/GRC'],
      category: 'Stage Professionnel'
    },
    {
      title: 'Site E-commerce PHP',
      desc: 'Plateforme complète avec paiement sécurisé et chatbot intégré',
      tech: ['PHP', 'MySQL', 'JavaScript', 'API'],
      category: 'Projet Académique'
    },
    {
      title: 'Forum Full-Stack',
      desc: 'Application complète avec backend Golang et frontend moderne',
      tech: ['Golang', 'HTML/CSS', 'JavaScript'],
      category: 'Projet Personnel'
    },
    {
      title: 'Bot IA Analytique',
      desc: 'Bot intelligent pour l\'analyse et la génération de contenu',
      tech: ['Python', 'NLP', 'Machine Learning'],
      category: 'Intelligence Artificielle'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                ZA
              </div>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              <span className="gradient-text">Zayd El Ajli</span>
            </h1>
            
            <div className="text-2xl sm:text-3xl text-gray-600 mb-8 typing-animation">
              Développeur en Formation & Passionné d&apos;IA
            </div>

            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Étudiant en Bachelor Informatique à Sophia Ynov Campus, spécialisé en développement full-stack 
              et intelligence artificielle. Expérience en analyse fonctionnelle et transformation digitale chez Cogiphi.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/about" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 card-hover">
                Découvrir mon parcours
                <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 card-hover">
                Me contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Compétences Techniques</h2>
            <p className="text-xl text-gray-600">Technologies et domaines d&apos;expertise</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-100"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{skill.name}</h3>
                  <p className="text-gray-600">{skill.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Projets & Réalisations</h2>
            <p className="text-xl text-gray-600">Aperçu de mes travaux académiques et professionnels</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/blog" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 card-hover">
              Voir tous les articles
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Prêt à collaborer ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Je suis ouvert aux opportunités de stage, projets collaboratifs et discussions techniques
            </p>
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 card-hover">
              Prenons contact
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
