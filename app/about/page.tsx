'use client'

import { motion } from 'framer-motion'
import { Download, Calendar, MapPin, GraduationCap, Award, Languages, Code, Brain, Server, Database } from 'lucide-react'

export default function About() {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/CV_EL_AJLI_ZAYD.pdf'
    link.download = 'CV_Zayd_El_Ajli.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  const skills = [
    {
      category: 'Langages de Programmation',
      icon: Code,
      items: ['Python', 'JavaScript/TypeScript', 'Golang', 'Java', 'C++', 'C#', 'PHP', 'SQL']
    },
    {
      category: 'Intelligence Artificielle',
      icon: Brain,
      items: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'OpenCV', 'Transformers', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
      category: 'Développement Web',
      icon: Server,
      items: ['React', 'Next.js', 'Node.js', 'HTML/CSS', 'REST APIs', 'Flask', 'Express.js']
    },
    {
      category: 'Bases de Données & Outils',
      icon: Database,
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'Docker', 'Linux', 'VSCode', 'Figma']
    }
  ]

  const experiences = [
    {
      period: '2025',
      title: 'Stagiaire Analyste Fonctionnel',
      company: 'Cogiphi - Paris',
      description: 'Analyse fonctionnelle de la plateforme eFront ERM, audit des rôles utilisateurs, détection d\'anomalies système et benchmark concurrentiel dans le secteur SIGR/GRC.',
      highlights: [
        'Analyse approfondie des modules de gestion des risques',
        'Audit de sécurité et gestion des droits utilisateurs',
        'Cartographie de 4 concurrents majeurs du secteur',
        'Documentation technique et recommandations'
      ]
    }
  ]

  const education = [
    {
      period: '2025-2026',
      title: 'Bachelor Informatique - 3ème année',
      institution: 'Sophia Ynov Campus',
      description: 'Spécialisation en développement logiciel et intelligence artificielle',
      achievements: [
        'Projets full-stack avancés',
        'Machine Learning et Deep Learning',
        'Développement d\'applications mobiles',
        'Gestion de projets informatiques'
      ]
    },
    {
      period: '2020-2023',
      title: 'Baccalauréat Général',
      institution: 'Lycée Masséna - Nice',
      description: 'Spécialités SES (Sciences Économiques et Sociales) et NSI (Numérique et Sciences Informatiques)',
      achievements: [
        'Formation en algorithmique et programmation',
        'Bases de l\'économie numérique',
        'Projet de fin d\'études en informatique'
      ]
    }
  ]

  const projects = [
    {
      title: 'Site E-commerce Complet',
      description: 'Développement d\'une plateforme e-commerce avec système d\'inscription, connexion, panier, chatbot intégré et paiement sécurisé.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'API Payment'],
      type: 'Projet Académique'
    },
    {
      title: 'Forum Full-Stack',
      description: 'Application complète avec backend développé en Golang et interface utilisateur moderne.',
      tech: ['Golang', 'HTML/CSS', 'JavaScript', 'REST API'],
      type: 'Projet Personnel'
    },
    {
      title: 'Bot IA Analytique',
      description: 'Configuration et développement d\'un bot intelligent pour l\'analyse de données et la génération de contenu.',
      tech: ['Python', 'NLP', 'Machine Learning', 'TensorFlow'],
      type: 'Intelligence Artificielle'
    },
    {
      title: 'Jeux Interactifs',
      description: 'Développement de plusieurs jeux interactifs utilisant différentes technologies.',
      tech: ['Java', 'JavaScript', 'Game Logic', 'UI/UX'],
      type: 'Projets Ludiques'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 gradient-text">À propos de moi</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Passionné de technologie et d&apos;innovation, je me spécialise dans le développement full-stack 
              et l&apos;intelligence artificielle tout en construisant mon expertise en transformation digitale.
            </p>
          </motion.div>

          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Présentation</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="text-blue-500" size={20} />
                    <span className="text-gray-700">Étudiant en Bachelor Informatique</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-blue-500" size={20} />
                    <span className="text-gray-700">Sophia Antipolis, France</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Languages className="text-blue-500" size={20} />
                    <span className="text-gray-700">Français (natif), Anglais (B2)</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Domaines d&apos;expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Award className="text-green-500" size={16} />
                    <span className="text-gray-700">Développement Full-Stack</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="text-green-500" size={16} />
                    <span className="text-gray-700">Intelligence Artificielle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="text-green-500" size={16} />
                    <span className="text-gray-700">Analyse Fonctionnelle</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="text-green-500" size={16} />
                    <span className="text-gray-700">UX/UI Design</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Expérience Professionnelle</h2>
            <p className="text-xl text-gray-600">Mon parcours dans la transformation digitale</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {exp.period}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                    <p className="text-blue-600 font-medium mb-4">{exp.company}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Formation</h2>
            <p className="text-xl text-gray-600">Mon parcours académique</p>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium inline-block">
                      {edu.period}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{edu.title}</h3>
                    <p className="text-purple-600 font-medium mb-4">{edu.institution}</p>
                    <p className="text-gray-600 mb-4 leading-relaxed">{edu.description}</p>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Compétences Techniques</h2>
            <p className="text-xl text-gray-600">Technologies et outils maîtrisés</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon
              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 card-hover"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                      <IconComponent className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Projets Réalisés</h2>
            <p className="text-xl text-gray-600">Mes réalisations techniques et créatives</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Download Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Télécharger mon CV
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Découvrez mon parcours complet et mes réalisations en détail
            </p>
            <button 
              onClick={handleDownloadCV}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2 card-hover"
            >
              <Download size={20} />
              Télécharger le CV (PDF)
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
