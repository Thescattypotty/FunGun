# Vite React TypeScript Starter

Ce projet est un starter pour une application React utilisant TypeScript et Vite. Il inclut également la configuration pour ESLint, TailwindCSS et PostCSS.

## Structure du projet

### Détails des fichiers

- **index.html**: Le fichier HTML principal qui charge l'application React.
- **package.json**: Contient les dépendances et les scripts de build.
- **tsconfig.json**: Configuration TypeScript principale.
- **tsconfig.app.json**: Configuration TypeScript spécifique à l'application.
- **tsconfig.node.json**: Configuration TypeScript spécifique aux outils de build.
- **vite.config.ts**: Configuration de Vite.
- **postcss.config.js**: Configuration de PostCSS.
- **tailwind.config.js**: Configuration de TailwindCSS.
- **eslint.config.js**: Configuration d'ESLint.

### Détails des dossiers

- **src/**: Contient le code source de l'application.
  - **App.tsx**: Composant principal de l'application.
  - **components/**: Contient les composants React.
    - **Bullet.tsx**: Composant pour les balles.
    - **Player.tsx**: Composant pour le joueur.
    - **Target.tsx**: Composant pour les cibles.
  - **hooks/**: Contient les hooks personnalisés.
    - **useGameLoop.ts**: Hook pour la boucle de jeu.
  - **index.css**: Fichier CSS principal.
  - **main.tsx**: Point d'entrée de l'application.
  - **types/**: Contient les types TypeScript.
    - **game.ts**: Types pour le jeu.
  - **vite-env.d.ts**: Déclarations d'environnement pour Vite.

## Scripts

- `dev`: Démarre le serveur de développement.
- `build`: Construit l'application pour la production.
- `lint`: Lint le code avec ESLint.
- `preview`: Prévisualise l'application de production.

## Installation

1. Clonez le dépôt.
2. Installez les dépendances avec `npm install`.
3. Démarrez le serveur de développement avec `npm run dev`.


## Prévisualisation

Vous pouvez prévisualiser l'application à l'adresse suivante : [https://fun-gun.vercel.app/](https://fun-gun.vercel.app/)


## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.