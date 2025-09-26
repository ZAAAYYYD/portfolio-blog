'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ArrowLeft, Share2, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Simulation d'une base de données d'articles
const articles: { [key: string]: any } = {
  'bilan-stage-cogiphi': {
    id: 'bilan-stage-cogiphi',
    title: 'Bilan de mon stage chez Cogiphi : Une immersion dans la transformation digitale',
    excerpt: 'Retour d\'expérience sur mon stage d\'analyste fonctionnel chez Cogiphi, spécialisé dans l\'analyse de la plateforme eFront ERM et l\'audit de sécurité.',
    date: '2025-01-15',
    readTime: '8 min',
    category: 'Expérience Professionnelle',
    tags: ['Stage', 'Cogiphi', 'eFront ERM', 'Analyse Fonctionnelle', 'Sécurité'],
    content: `
# Mon expérience chez Cogiphi : Plongée au cœur de la transformation digitale

## Introduction

Mon stage chez Cogiphi, société parisienne spécialisée dans la transformation digitale et l'intégration de logiciels, a été une expérience particulièrement enrichissante. En tant que stagiaire analyste fonctionnel, j'ai eu l'opportunité de travailler sur des projets concrets et d'acquérir une vision approfondie des défis de la transformation digitale dans les secteurs de l'assurance, de la banque et de l'industrie.

## Le contexte : Cogiphi et son positionnement unique

Cogiphi se distingue par sa philosophie innovante : l'alliance du moderne et du classique, de la jeunesse et de l'expérience. Cette approche permet à l'entreprise de proposer un conseil polyvalent et novateur à ses clients, parmi lesquels figurent certains des plus grands acteurs des secteurs stratégiques.

### Les valeurs qui m'ont marqué

- **Innovation constante** : Sortir des sentiers battus pour proposer des solutions créatives
- **Service de proximité** : Une approche personnalisée et adaptée à chaque client
- **Expertise technique** : Une spécialisation poussée dans les solutions SIGR/GRC

## Mes missions principales

### 1. Analyse fonctionnelle de la plateforme eFront ERM

L'un des défis les plus passionnants de mon stage a été l'analyse approfondie de la plateforme eFront ERM (Enterprise Risk Management). Cette solution complexe de gestion des risques m'a permis de comprendre :

#### Gestion des risques : Une vision à 360°

La plateforme distingue deux grandes catégories de risques :
- **Risques génériques** : Transverses à plusieurs entités (virements bancaires défaillants, attaques informatiques, bugs logiciels)
- **Risques locaux** : Spécifiques et contextuels (incendies, risques d'attentats, catastrophes naturelles)

#### Processus de traitement des incidents

J'ai pu cartographier le processus complet :
1. **Détection** d'un incident
2. **Analyse** des causes et impacts
3. **Création** d'un plan d'action
4. **Suivi** de la remédiation
5. **Clôture** et retour d'expérience

### 2. Audit de sécurité et gestion des droits utilisateurs

Une partie cruciale de mon travail a consisté à auditer les différents rôles utilisateurs de la plateforme. Cette mission m'a permis de :

#### Identifier des anomalies critiques

- Incohérences dans les droits d'accès pour certains profils
- Failles potentielles dans la gestion des permissions
- Problèmes de navigation pour des utilisateurs spécifiques

#### Comprendre l'architecture de sécurité

L'analyse des profils (Archive, Auditeur, Contrôleur 1er et 2ème niveau) m'a donné une vision claire des enjeux de sécurité dans les systèmes d'information critiques.

### 3. Benchmark concurrentiel

J'ai réalisé une étude comparative de 4 acteurs majeurs du secteur SIGR/GRC :

- **Silog** : Solutions modulaires pour PME & industrie
- **Values Associates** : Plateforme no-code agile
- **Visiativ – GRC** : Modules packagés pour B2B
- **Aon eSolutions** : Solutions pour grandes entreprises et assurances

Cette analyse m'a permis de comprendre le positionnement unique de Cogiphi sur ce marché concurrentiel.

## Compétences développées

### Compétences techniques

- **Analyse fonctionnelle** : Cartographie de processus complexes
- **Audit de sécurité** : Évaluation des systèmes d'information
- **Documentation technique** : Rédaction de rapports détaillés
- **Veille concurrentielle** : Analyse de marché et positionnement

### Compétences transversales

- **Communication** : Présentation de résultats à des équipes techniques et métiers
- **Esprit critique** : Identification d'anomalies et proposition de solutions
- **Gestion de projet** : Organisation et priorisation des tâches
- **Adaptabilité** : Immersion rapide dans un environnement professionnel complexe

## Challenges et apprentissages

### Le défi de la complexité

Travailler sur une plateforme aussi complexe qu'eFront ERM m'a appris l'importance de :
- La rigueur dans l'analyse
- La documentation systématique
- La communication claire des résultats

### L'importance du contexte métier

Cette expérience m'a fait comprendre que la technique seule ne suffit pas. Il faut également :
- Comprendre les enjeux business
- S'adapter au vocabulaire métier
- Proposer des solutions pragmatiques

## Impact et recommandations

### Mes contributions

- **Rapport d'audit** détaillant les anomalies détectées
- **Recommandations** d'amélioration des processus
- **Cartographie concurrentielle** pour le positionnement stratégique
- **Documentation** des bonnes pratiques identifiées

### Vision pour l'avenir

Cette expérience m'a convaincu de l'importance cruciale de la transformation digitale dans les grandes organisations. Les enjeux de sécurité, de conformité et d'efficacité opérationnelle nécessitent des expertises techniques pointues couplées à une vision business claire.

## Conclusion : Un tremplin vers l'avenir

Mon stage chez Cogiphi a été bien plus qu'une simple immersion professionnelle. C'est une véritable école de la transformation digitale qui m'a permis de :

- Développer des compétences techniques avancées
- Comprendre les enjeux stratégiques des grandes organisations
- Acquérir une vision globale des métiers du conseil en informatique
- Confirmer mon orientation vers l'analyse fonctionnelle et la cybersécurité

Cette expérience forge aujourd'hui ma vision du développement logiciel et de l'innovation technologique. Elle me donne les clés pour aborder les projets futurs avec une approche à la fois technique et business, essentielle dans le monde de la transformation digitale.

**Merci à toute l'équipe Cogiphi pour cette expérience enrichissante qui marque un tournant dans mon parcours professionnel !**
    `
  },
  'intelligence-artificielle-2025': {
    id: 'intelligence-artificielle-2025',
    title: 'Vers une Automatisation Fiable de la Supervision des Flux Numériques : Cadre d\'Orchestration d\'Agents d\'Audit et de Sécurité pour la Détection et le Reporting Dynamique',
    excerpt: 'Recherche sur la conception d\'agents autonomes capables d\'auditer en temps réel des flux numériques et de détecter des anomalies avec mécanismes de notification automatique.',
    date: '2025-01-10',
    readTime: '12 min',
    category: 'Audit et Sécurité',
    tags: ['Supervision', 'Audit', 'Sécurité', 'Détection Anomalies', 'Monitoring Intelligent'],
    content: `
# Vers une Automatisation Fiable de la Supervision des Flux Numériques : Cadre d'Orchestration d'Agents d'Audit et de Sécurité pour la Détection et le Reporting Dynamique

## Introduction

L'explosion exponentielle des données numériques et la complexification des infrastructures informatiques contemporaines nécessitent une approche révolutionnaire de la supervision continue et de l'audit en temps réel. Cette recherche propose la conception d'un cadre innovant d'agents autonomes spécialisés dans l'audit et la sécurité, capables de surveiller dynamiquement les flux numériques et de détecter proactivement les changements, anomalies et vulnérabilités potentielles dans des environnements critiques. L'objectif central consiste à développer une architecture distribuée intégrant des mécanismes avancés de notification automatique et de génération de tableaux de bord dynamiques alimentés par des modèles de langage de dernière génération. L'approche proposée s'inscrit dans une démarche de recherche orientée sécurité, combinant l'audit traditionnel avec des capacités de monitoring intelligent et d'analyse prédictive. Cette contribution établit les fondements d'une nouvelle génération de systèmes de supervision autonome adaptés aux défis de la cybersécurité moderne. Le cadre développé vise à transformer la manière dont les organisations appréhendent la surveillance et la protection de leurs actifs numériques.

## Architecture de Supervision Distribuée

Le système proposé intègre des agents spécialisés dans la détection d'anomalies comportementales, la surveillance de conformité et la génération automatique de rapports d'audit, permettant une réactivité et une précision inédites dans le domaine de la supervision numérique.

[Recherche en cours de développement - Publication prévue]
    `
  },
  'developpement-fullstack-moderne': {
    id: 'developpement-fullstack-moderne',
    title: 'Systèmes Distribués pour Agents Autonomes : Stratégies de Déploiement Multi-Instance de Navigateurs Virtualisés via Proxy Inversé dans des Infrastructures Cloud Élastiques',
    excerpt: 'Analyse des enjeux de déploiement d\'agents autonomes à grande échelle dans le cloud avec focus sur la distribution et l\'élasticité infrastructurelle.',
    date: '2025-01-05',
    readTime: '15 min',
    category: 'Systèmes Distribués',
    tags: ['Cloud Computing', 'Agents Autonomes', 'Proxy Inversé', 'Élasticité', 'Infrastructure'],
    content: `
# Systèmes Distribués pour Agents Autonomes : Stratégies de Déploiement Multi-Instance de Navigateurs Virtualisés via Proxy Inversé dans des Infrastructures Cloud Élastiques

## Introduction

Le déploiement d'agents autonomes à grande échelle dans des environnements cloud représente un défi architectural complexe qui nécessite une approche systémique rigoureuse. Cette recherche examine les enjeux fondamentaux liés à l'orchestration de multiples instances de navigateurs virtualisés, en proposant des stratégies innovantes de distribution qui garantissent la flexibilité opérationnelle et l'élasticité infrastructurelle. L'approche développée met en avant les défis critiques d'isolation processuelle, de routage intelligent et de tolérance aux pannes dans des environnements distribués hautement dynamiques. Les stratégies proposées s'appuient sur l'utilisation de proxy inversés pour optimiser la répartition de charge et assurer une scalabilité horizontale efficace. Ce travail s'inscrit dans la réflexion plus large sur les architectures cloud adaptatives pour agents logiciels, contribuant à l'évolution des paradigmes de déploiement distribué. L'objectif central consiste à établir un cadre méthodologique pour l'orchestration d'agents dans des infrastructures élastiques.

## Architecture et Patterns de Déploiement

L'architecture proposée intègre des mécanismes avancés de load balancing et de service discovery, permettant une adaptation dynamique aux variations de charge tout en maintenant l'isolation sécurisée des instances d'agents.

[Recherche en cours de développement - Publication prévue]
    `
  },
  'securite-applications-web': {
    id: 'securite-applications-web',
    title: 'Authentification Visuelle et Détection de Contrefaçons : Une Approche Multi-Modale Fondée sur DINOv2, CLIP et l\'Intégration de Méthodes d\'Explainable AI',
    excerpt: 'Recherche sur la détection de contrefaçons dans des flux d\'images massifs via des représentations visuelles avancées avec focus sur l\'interprétabilité.',
    date: '2024-12-28',
    readTime: '10 min',
    category: 'Vision par Ordinateur',
    tags: ['DINOv2', 'CLIP', 'Explainable AI', 'Détection Contrefaçons', 'Multi-Modal'],
    content: `
# Authentification Visuelle et Détection de Contrefaçons : Une Approche Multi-Modale Fondée sur DINOv2, CLIP et l'Intégration de Méthodes d'Explainable AI

## Introduction

La problématique de la détection de contrefaçons dans un contexte de flux d'images massifs et variés constitue un enjeu majeur pour l'authentification visuelle moderne. Cette recherche propose une approche novatrice reposant sur l'utilisation de représentations visuelles avancées issues de modèles d'apprentissage auto-supervisés et multi-modaux de dernière génération. L'objectif central consiste à établir un cadre robuste et évolutif capable de distinguer les produits authentiques des copies avec un niveau de précision élevé, tout en maintenant une performance opérationnelle adaptée aux contraintes industrielles. L'approche développée intègre les capacités de DINOv2 pour l'extraction de features visuelles robustes et celles de CLIP pour l'alignement multi-modal texte-image. Un accent particulier est mis sur l'interprétabilité des décisions algorithmiques grâce à l'intégration de techniques d'Explainable AI, garantissant la transparence nécessaire aux applications critiques. Cette contribution s'inscrit dans l'évolution des systèmes de vérification d'authenticité basés sur l'intelligence artificielle.

## Méthodologie Multi-Modale

Le cadre proposé combine les forces des embeddings auto-supervisés avec des mécanismes d'attention cross-modale, permettant une analyse fine des caractéristiques visuelles distinctives tout en fournissant des explications intelligibles des décisions de classification.

[Recherche en cours de développement - Publication prévue]
    `
  },
  'gestion-donnees-python': {
    id: 'gestion-donnees-python',
    title: 'Vers des Agents Conversationnels Contextuels : Intégration de Mémoires Persistantes et de Modèles de Langage pour la Recherche Sémantique sur Données Dynamiques',
    excerpt: 'Recherche sur la conception d\'agents conversationnels gérant des interactions durables via des mécanismes de mémoire persistante et recherche sémantique.',
    date: '2024-12-20',
    readTime: '11 min',
    category: 'Agents Conversationnels',
    tags: ['NLP', 'Mémoire Persistante', 'Recherche Sémantique', 'Modèles de Langage', 'Contextualisation'],
    content: `
# Vers des Agents Conversationnels Contextuels : Intégration de Mémoires Persistantes et de Modèles de Langage pour la Recherche Sémantique sur Données Dynamiques

## Introduction

La conception d'agents conversationnels capables de gérer des interactions sophistiquées sur la durée constitue un défi majeur dans le domaine du traitement automatique du langage naturel. Cette recherche explore les mécanismes innovants de mémoire persistante qui permettent de dépasser les limitations inhérentes aux systèmes conversationnels traditionnels. L'objectif central consiste à développer une architecture intégrant de manière transparente la recherche sémantique sur des données dynamiques et évolutives, ouvrant ainsi la voie à des agents capables de fournir des réponses contextualisées et pertinentes dans des environnements informationnels changeants. L'approche proposée combine les capacités des modèles de langage de dernière génération avec des systèmes de mémoire épisodique et sémantique persistante, permettant une adaptation continue aux nouveaux contextes conversationnels. Cette contribution pose les bases fondamentales d'une réflexion prospective sur l'avenir des systèmes interactifs intelligents et leur intégration dans des écosystèmes informationnels complexes. L'enjeu réside dans la création d'agents authentiquement contextuels et adaptatifs.

## Architecture de Mémoire Hybride

Le système proposé intègre des mécanismes de mémoire court-terme et long-terme avec des capacités de retrieval sémantique, permettant une continuité conversationnelle inédite et une adaptation dynamique aux évolutions du contexte informationnel.

[Recherche en cours de développement - Publication prévue]
    `
  },
  'architecture-microservices': {
    id: 'architecture-microservices',
    title: 'Conception d\'Interfaces Immersives : Étude Expérimentale sur l\'Intégration du Design Front-End et des Animations Interactives dans des Systèmes Web Modernes',
    excerpt: 'Recherche sur la création d\'interfaces web alliant esthétique et performance avec focus sur l\'impact des choix design sur l\'adoption utilisateur.',
    date: '2024-12-15',
    readTime: '14 min',
    category: 'Interface Homme-Machine',
    tags: ['UX/UI Design', 'Animations Web', 'Performance', 'Interfaces Immersives', 'Front-End'],
    content: `
# Conception d'Interfaces Immersives : Étude Expérimentale sur l'Intégration du Design Front-End et des Animations Interactives dans des Systèmes Web Modernes

## Introduction

La création d'interfaces web qui allient harmonieusement esthétique raffinée et performance optimale constitue un enjeu central dans la conception de systèmes numériques contemporains. Cette recherche expérimentale met l'accent sur l'intégration stratégique d'animations fluides et immersives qui enrichissent significativement l'expérience utilisateur tout en respectant rigoureusement les contraintes de performance inhérentes aux plateformes web modernes. L'objectif principal consiste à évaluer de manière empirique comment des choix de design front-end spécifiques peuvent influencer substantiellement l'adoption utilisateur et l'efficacité opérationnelle des systèmes numériques à grande échelle. L'approche méthodologique développée s'appuie sur des métriques quantitatives d'engagement et des analyses qualitatives d'expérience utilisateur pour établir des corrélations entre choix esthétiques et indicateurs de performance. Ce travail s'inscrit dans la continuité directe des recherches avancées sur l'interaction homme-machine et contribue à l'évolution des paradigmes d'interfaces adaptatives. L'enjeu fondamental réside dans l'optimisation de l'expérience utilisateur à travers le design interactif.

## Méthodologie Expérimentale

L'étude s'appuie sur des protocoles expérimentaux rigoureux intégrant des métriques de performance technique (temps de chargement, fluidité animations) et des indicateurs d'engagement utilisateur pour établir des relations causales entre design et efficacité.

[Recherche en cours de développement - Publication prévue]
    `
  }
  // Autres articles...
}

interface BlogPostProps {
  params: { slug: string }
}

export default function BlogPost({ params }: BlogPostProps) {
  const article = articles[params.slug]

  if (!article) {
    notFound()
  }

  const relatedArticles = Object.values(articles)
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      {/* Back Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft size={16} />
            Retour au blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-200">
              <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 size={16} />
                Partager
              </button>
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen size={16} />
                <span>Lecture de {article.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
          >
            <div 
              className="prose prose-lg max-w-none prose-headings:gradient-text prose-a:text-blue-600 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded"
              dangerouslySetInnerHTML={{ 
                __html: article.content.replace(/\n/g, '<br>').replace(/#{1,6}\s/g, match => {
                  const level = match.trim().length
                  return `<h${level} class="text-${4-level}xl font-bold mb-4 mt-8 gradient-text">`
                })
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">Articles Similaires</h2>
              <p className="text-lg text-gray-600">Continuez votre lecture avec ces articles connexes</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedArticles.map((relatedArticle, index) => (
                <motion.div
                  key={relatedArticle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 card-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {relatedArticle.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Clock size={14} />
                      <span>{relatedArticle.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-gray-800 leading-tight">
                    {relatedArticle.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {relatedArticle.excerpt}
                  </p>

                  <Link
                    href={`/blog/${relatedArticle.id}`}
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center gap-1"
                  >
                    Lire l'article
                    <ArrowLeft className="rotate-180" size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Vous avez aimé cet article ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Découvrez mes autres réflexions et projets, ou contactez-moi pour échanger !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 card-hover">
                Voir tous les articles
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 card-hover">
                Me contacter
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
