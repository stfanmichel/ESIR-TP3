# ESIR_TP3 - Express

Nous avons utilisé dans les deux premiers TP le module http standard pour réaliser notre serveur web (serveur web est un grand mot...). 
L'API http est très complète mais d'un peu trop "bas niveau".
Il existe plusieurs modules node de plus haut niveau pour réaliser des serveur web, nous allons ici utiliser l'un des plus populaire : Express.

Objectifs :
  - Préparer un environnement pour express 
  - Comprendre la décomposition en fichier / répertoires
  - Comprendre les principes de Express
  - Utiliser et comprendre la notion de router
  - Réaliser des services REST 
  
Sujets abordés :
 - REST
 - 
 
Lien utiles :

  - Outillage (npm, node, git, ab, postman etc.) : https://slides.com/stephmichel/deck-4#/
  
  - Express : Le cours sur Express de Benoît. 
  
  
Pour le bon déroulement du TP et pour vous familiariser avec GIT, lorsque vous liser une ligne du genre (Tag: BLA-BLA-BLA), 
c'est qu'il est temps de commiter vos modifications afin de pouvoir revenir à ce niveau de code plus tard si besoin. 
Ceci vous permettra également de vous y retrouver lorsque le correctif vous sera fourni.
  
# Initialisation d'un projet

Il existe des modules comme par exemple, express-generator pour vous aider à construire une arborescence de projet Express from sratch.
C'est un bon outil pour débuter : https://slides.com/stephmichel/deck-4#/4/1
Cependant, afin de bien comprendre l'organisation en fichier nous l'allons pas utilise cet outils (dans un premier temp).

Comme les TP précédents, vous aller initier un nouveau projet GIT/npm (je ne rappelle pas les étapes ici, vous devez commencer à les connaitre).

# STEP 1 : Premier service REST avec express
Vous devez ici :
  - créer un fichier principal (app.js).
  - installer le module express
  - Réaliser un permier serveur web basé sur express qui répond à l'URL http://localhost:3000/users en retournant au format JSON une liste d'utilisateurs.
  
  ## Aide :
  
    

