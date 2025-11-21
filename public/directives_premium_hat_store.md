Premium Hat Store - Directives de Conception

## Approche de Conception

**Basée sur des Références :** Inspirée des esthétiques du e-commerce
haut de gamme (boutiques Shopify de luxe, vitrines artisanales Etsy,
marques de mode premium). Accent éditorial sophistiqué avec une
présentation axée sur le produit.

## Structure & Mise en Page

### Section Hero (60vh sur mobile, 80vh sur desktop)

-   Grande image hero mettant en valeur un chapeau en situation
    lifestyle\
-   Superposition minimale avec nom de marque et slogan concis\
-   Boutons à arrière‑plan flouté pour l'appel à l'action principal
    ("Explorer la Collection")

### Galerie de Produits (Focus Principal)

-   Grille masonry : 1 colonne mobile, 2 colonnes tablette, 3--4
    colonnes desktop\
-   Cartes produit avec photos haute qualité sur fond neutre\
-   Chaque carte : image, nom du chapeau, prix, bouton aperçu rapide\
-   Espacement généreux entre les cartes (gap-6 mobile, gap-8 desktop)

### Collection Mise en Avant

-   Section pleine largeur avec 2--3 chapeaux d'exception\
-   Grandes images produit avec légendes détaillées\
-   Mise en page côte-à-côte sur desktop, empilée sur mobile

### Section Histoire de la Marque

-   Mise en page deux colonnes : texte narratif + image de marque\
-   Prose à largeur maximale pour une lecture confortable\
-   Image complémentaire montrant le processus artisanal ou l'héritage

### Artisanat & Sourcing

-   Grille en trois colonnes : Matériaux, Processus, Qualité\
-   Chaque colonne contient icône, titre, description détaillée\
-   Illustrée par des photos authentiques d'atelier / matériaux

### Pied de Page

-   Footer riche avec inscription newsletter, liens de navigation,
    réseaux sociaux, contact\
-   Indicateurs de confiance (badges de durabilité, certifications
    artisanales)

## Hiérarchie Typographique

**Polices (Google Fonts)**\
- **Primaire : Playfair Display** (serif) --- sophistiquée, éditoriale\
- **Secondaire : Inter** (sans-serif) --- moderne, lisible

**Échelle Typographique :** - Hero : text-5xl md:text-7xl, bold\
- Titres de section : text-3xl md:text-5xl, bold\
- Noms produits : text-xl md:text-2xl, semibold\
- Corps de texte : text-base md:text-lg, leading-relaxed\
- Prix : text-lg, medium

## Système d'Espaces

Utilisation des unités Tailwind : 4, 6, 8, 12, 16, 20, 24

-   Padding des sections : py-16 md:py-24\
-   Padding des cartes : p-6 md:p-8\
-   Gaps des grilles : gap-6 md:gap-8\
-   Conteneur : max-w-7xl avec px-4 md:px-8

## Bibliothèque de Composants

### Cartes Produit

-   Ratio d'image 3:4\
-   Bordure subtile au survol\
-   Prix toujours visible, bouton "Aperçu rapide" au survol

### Navigation

-   En‑tête fixe, transition transparent → solide au scroll\
-   Logo à gauche, menu au centre, icône panier à droite\
-   Mobile : menu hamburger

### Boutons

-   Principal : arrondi, taille moyenne, fond flouté sur images\
-   Secondaire : style contour\
-   Liens texte : soulignés au survol

### Modal de Galerie d'Images

-   Lightbox pour vues étendues\
-   Carrousel avec miniatures\
-   Bouton fermer + flèches navigation

## Images

**Images Requises :**

-   Hero : photo lifestyle d'une personne portant un chapeau premium en
    extérieur (1920×1200)\
-   Galerie Produits : 12--15 chapeaux individuels, fond neutre, qualité
    studio (800×1000)\
-   Produits Vedettes : 2--3 images éditoriales grand format
    (1200×1500)\
-   Histoire de Marque : image atelier / artisanat (1000×800)\
-   Artisanat : 3 photos détaillées (matériaux, mains au travail,
    contrôle qualité) (600×600)\
-   Footer : petit logo / marque

Toutes les images doivent exprimer qualité premium, artisanat et style
intemporel.

## Interactions

**Animations Minimales :**

-   Défilement fluide entre sections\
-   Fade‑in léger au scroll (une seule fois)\
-   Hover produit : léger scale (1.02) + ombre renforcée\
-   Pas de carrousel auto‑play agressif

## Accessibilité

-   HTML sémantique\
-   Texte alternatif pour toutes les images, décrivant le style du
    chapeau\
-   Navigation clavier pour galerie & modals\
-   Labels ARIA pour les boutons icône\
-   États de focus cohérents avec l'esthétique de marque
