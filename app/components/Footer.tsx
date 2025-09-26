'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2 } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ZAAAYYYD', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zayd-el-ajli-769943350/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:zayd.elajli@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg"
              >
                <Code2 className="text-white" size={24} />
              </motion.div>
              <span className="font-bold text-xl">Zayd El Ajli</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Développeur en formation passionné par l&apos;intelligence artificielle et la transformation digitale. 
              Actuellement en Bachelor Informatique à Sophia Ynov Campus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Réseaux</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zayd El Ajli. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Développé avec Next.js, TypeScript et Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
