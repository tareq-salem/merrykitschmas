# Merry Kitschmas
## User stories
### US01 - Page d'accueil
Fonctionnalites du **HEADER** :  
- Logo :
 - Au clic sur le logo on reviens sur la Homepage
- Panier : 
  - Au clic sur le panier on va vers la page panier
  - Au clic sur un produit de la page on actualise le badge du panier (+1 produit)
- Barre de recherche (bonus) :
  - Lancer une requete vers la BDD
  - Afficher l'autocompletion a l'entree de la recherche
  
Le **BODY** comporte :
Au chargement de la page on lance une requete get '/produits' et on affiche tous les produits en vrac

Fonctionnalites de la side menu 
  - Catégories / Sous-catégories / Thèmes / Options
    - Au clic on change l'url Courante '/produits?category=['Homme', 'Femmes', ect...]'

- Grille de produits
 - Au 1er chargement de la page : on affiche les derniers produits
 - Si l'url Courante est changee on lance une nouvelle requete avec cette nouvel url
 
- Dropdown listes
 - Au clic on change l'url Courante '/produits?category=['Homme', 'Femmes', ect...]&orderBy=price&limit=20&start=480'

Le **FOOTER** comporte :
- lien vers le repo git

### US02


### US03


### US04


### US05


### US06


### US07 - Feature Bonus

