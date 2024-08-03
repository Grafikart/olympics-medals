# Visualisation des médailles olympiques

L'objectif du projet est de présenter l'ensemble des médailles obtenues par continents en suivant [ce modèle](https://dribbble.com/shots/16149730--Olympic-medals-per-continent-in-Rio-2016).

## Démarrer

Le projet a été créé avec vite, pour le démarrer, il faut installer les dépendances et lancer le serveur de développement (avec le gestionnaire de paquet de votre choix).

```bash
pnpm install
pnpm run dev
```

Si vous voulez des données fraiches pour les médailles, vous pouvez récupérer les derniers résultats à l'aide de la commande `fetch`.

```bash
pnpm run fetch
```

## Approche technique

Vu que le projet est petit, j'ai essayé d'utiliser peu de librairies / outils pour avoir quelque chose de léger et facile à lancer.

- Preact, alternative légère à React, pour gérer les anneaux olympique (la flemme de manipuler le DOM à la main)
- NodeJS & JSDOM, pour parser une page HTML et générer le JSON des médailles (pas trouvé d'API, pour cet exercice je m'autorise à scrapper un site)

## Sources & Outils

- [Guidelines du logo (page 13)](https://stillmed.olympics.com/media/Documents/International-Olympic-Committee/Olympic-brand/Olympic-Brand-Guidelines.pdf)
- [Source pour les médailles](https://www.olympiandatabase.com/index.php?id=180770&L=1)
- [Reset css](https://github.com/elad2412/the-new-css-reset)
- [Générateur de box-shadow](https://shadows.brumm.af/)
- [Générateur de courbe de béziers](https://cubic-bezier.com/#.49,1.67,.26,.92)
- [Photopea (pour créer l'image en noir & blanc)](https://www.photopea.com/)
