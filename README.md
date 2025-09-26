# Portfolio Blog - Zayd El Ajli

## 🚀 Portfolio et Blog Personnel

Bienvenue sur le portfolio et blog personnel de Zayd El Ajli, développeur en formation spécialisé en intelligence artificielle et transformation digitale.

## 📋 Fonctionnalités

### Pages principales
- **Accueil** : Présentation générale et aperçu des compétences
- **À propos** : Parcours détaillé, formation et expériences professionnelles
- **Blog** : Articles techniques et retours d'expérience
- **Contact** : Informations de contact et contexte professionnel

### Contenu du blog
- ✅ Article obligatoire sur le bilan de stage chez Cogiphi
- ✅ 5+ articles minimum couvrant différents domaines techniques
- ✅ Catégories : IA, Développement Web, Cybersécurité, Data Science

### Fonctionnalités techniques
- 🎨 Design moderne et épuré avec animations fluides
- 📱 Interface responsive pour tous les appareils
- ⚡ Performance optimisée avec Next.js 14
- 🎭 Animations avec Framer Motion
- 🎯 SEO optimisé

## 🛠️ Technologies Utilisées

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Email** : Web3Forms + Brevo
- **Déploiement** : Ready for Vercel/Netlify

## 🚀 Installation et Démarrage

```bash
# Cloner le repository
git clone [repository-url]

# Installer les dépendances
npm install

# Configurer les variables d'environnement
# Créer un fichier .env.local avec :
WEB3FORMS_ACCESS_KEY=votre_clé_web3forms
BREVO_API_KEY=votre_clé_brevo

# Démarrer en mode développement
npm run dev

# Tester la configuration
# Aller sur http://localhost:3000/api/test

# Build pour la production
npm run build

# Démarrer la version production
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 🔐 Configuration des Services

### Web3Forms (Formulaire de contact)
1. Aller sur [web3forms.com](https://web3forms.com)
2. Créer un compte gratuit (1000 emails/mois)
3. Récupérer votre clé d'accès
4. L'ajouter dans `.env.local` comme `WEB3FORMS_ACCESS_KEY`

### Brevo (Newsletter)
1. Aller sur [app.brevo.com](https://app.brevo.com)
2. Créer un compte gratuit (300 emails/jour)
3. Aller dans Settings → API Keys
4. Créer une clé et l'ajouter comme `BREVO_API_KEY`

## 🚀 Déploiement sur Vercel

1. **Push sur GitHub** (les clés dans .env.local ne seront pas incluses)
2. **Connecter à Vercel**
3. **Configurer les variables d'environnement** dans Vercel :
   - Settings → Environment Variables
   - Ajouter `WEB3FORMS_ACCESS_KEY` et `BREVO_API_KEY`
4. **Déployer** automatiquement

## 📁 Structure du Projet

```
portfolio-blog-zayd/
├── app/                    # App Router de Next.js
│   ├── components/         # Composants réutilisables
│   │   ├── Header.tsx     # Navigation principale
│   │   └── Footer.tsx     # Pied de page
│   ├── about/             # Page À propos
│   ├── blog/              # Pages du blog
│   │   ├── [slug]/        # Articles individuels
│   │   └── page.tsx       # Liste des articles
│   ├── contact/           # Page Contact
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── public/                # Assets statiques
├── package.json           # Dépendances
├── tailwind.config.js     # Configuration Tailwind
└── README.md
```

## 📝 Articles Disponibles

1. **Vers une Automatisation Fiable de la Supervision des Flux Numériques**
   - Cadre d'Orchestration d'Agents d'Audit et de Sécurité pour la Détection et le Reporting Dynamique
   - Supervision continue et audit en temps réel des flux numériques
   - Mécanismes de notification automatique et tableaux de bord dynamiques

2. **Systèmes Distribués pour Agents Autonomes**
   - Stratégies de Déploiement Multi-Instance de Navigateurs Virtualisés via Proxy Inversé  
   - Infrastructures Cloud Élastiques et architectures adaptatives
   - Défis d'isolation, routage et tolérance aux pannes

3. **Authentification Visuelle et Détection de Contrefaçons**
   - Une Approche Multi-Modale Fondée sur DINOv2, CLIP et l'Intégration de Méthodes d'Explainable AI
   - Représentations visuelles avancées et modèles auto-supervisés
   - Distinction produits authentiques vs copies avec haute précision

4. **Vers des Agents Conversationnels Contextuels**
   - Intégration de Mémoires Persistantes et de Modèles de Langage pour la Recherche Sémantique
   - Gestion d'interactions sur la durée avec mécanismes de mémoire persistante  
   - Recherche sémantique sur données dynamiques et évolutives

5. **Conception d'Interfaces Immersives**
   - Étude Expérimentale sur l'Intégration du Design Front-End et des Animations Interactives
   - Interfaces web alliant esthétique et performance dans des Systèmes Web Modernes
   - Impact des choix de design sur l'adoption et l'efficacité des systèmes numériques

## 🎨 Design et UX

- Interface moderne et épurée
- Animations fluides et professionnelles
- Navigation intuitive
- Optimisation mobile-first
- Accessibilité prise en compte

## 📧 Contact

- **Email** : zayd.elajli@gmail.com
- **GitHub** : [ZAAAYYYD](https://github.com/ZAAAYYYD)
- **LinkedIn** : [Zayd El Ajli](https://www.linkedin.com/in/zayd-el-ajli-769943350/)
- **Formation** : Bachelor Informatique - Sophia Ynov Campus
- **Expérience** : Stage Analyste Fonctionnel chez Cogiphi (Paris)

## 🔄 Mises à jour

Ce portfolio est régulièrement mis à jour avec :
- Nouveaux articles techniques
- Projets récents
- Évolution des compétences
- Retours d'expérience professionnels

---

**Développé avec ❤️ par Zayd El Ajli**  
*Étudiant passionné par l'IA et la transformation digitale*
