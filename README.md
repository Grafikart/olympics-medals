# Visualisation des médailles olympiques

L'objectif du projet est de présenter l'ensemble des médailles obtenues par continents en suivant [ce modèle](https://dribbble.com/shots/16149730--Olympic-medals-per-continent-in-Rio-2016). 

- [Page statique hébergée sur github pages](https://grafikart.github.io/olympics-medals/)

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
- NodeJS & JSDOM, pour parser une page HTML et générer le JSON des médailles (pas trouvé d'API, pour cet exercice je m'autorise donc à scrapper un site)

Côté CSS, j'ai décidé de faire les anneaux en utilisant des divs pour faire des cercles. Les guidelines sont très précises sur les dimensions ce qui permet le pilotage de la taille des anneaux avec une seule variable CSS.

- Un anneau doit avoir un diamètre extérieur qui est 12 fois la taille de la bordure (donc diamètre intérieur = 10 x bordure).
- Les anneaux sont espacés d'une fois la taille de la bordure (la largeur total est donc de 38 fois la bordure).

## Sources & Outils

- [Guidelines du logo (page 13)](https://stillmed.olympics.com/media/Documents/International-Olympic-Committee/Olympic-brand/Olympic-Brand-Guidelines.pdf)
- [Source pour les médailles](https://www.olympiandatabase.com/index.php?id=180770&L=1)
- [Reset css](https://github.com/elad2412/the-new-css-reset)
- [Générateur de box-shadow](https://shadows.brumm.af/)
- [Générateur de courbe de béziers](https://cubic-bezier.com/#.49,1.67,.26,.92)
- [Photopea (pour créer l'image en noir & blanc)](https://www.photopea.com/)

## Explications vidéo

[![Explication vidéo du code](http://img.youtube.com/vi/zw_Z0CuYOV8/0.jpg)](http://www.youtube.com/watch?v=zw_Z0CuYOV8)

## Easter Egg

Un easter egg est caché lors du clic sur un des continent. On peut cliquer sur plusieurs continents rapidement pour plus d'ambiances.
