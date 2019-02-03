# ESIR_TP3 - Express

Nous avons utilisé dans les deux premiers TP le module http standard pour réaliser notre serveur web (serveur web est un grand mot...). 
L'API http est très complète mais d'un peu trop "bas niveau".
Il existe plusieurs modules node de plus haut niveau pour réaliser des serveur web, nous allons ici utiliser l'un des plus populaire : Express.

## Objectifs :
  - Préparer un environnement pour express 
  - Comprendre la décomposition en fichier / répertoires
  - Comprendre les principes de Express
  - Utiliser et comprendre la notion de router
  - Réaliser des services REST 
  
## Sujets abordés :
 - Express
 - REST / CRUD
 - statefull et stateless
 - Optimisation (pattern cache)
 
## Lien utiles :

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
  
 (tag: TP3-ESIR-STEP1)
  
# STEP 2 : Routes express et CRUD 
Vous devez coder l'ensemble des opérations CRUD sur les users (avec en plus la possibilité de listeer tous les utilisateurs) en se basant sur la sémantique http et en respectant les bonnes pratiques de nommage (voir cours ici https://slides.com/stephmichel/http#/7).

Votre user devra posséder les propriétés suivantes (au minimum) : id, login, age et name.

Exemple : 
 
    {id = '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e', login:'pedro', name:'Pedro Ramirez', age:35)

Vous utiliserez les express.Router afin d'organiser proprement votre code (voir la fin de la page  https://expressjs.com/en/guide/routing.html).
Pour cela vous créerez un répertoire "routes" qui contiendra un fichier users.js dans lequel vous coderez l'ensemble des opérations demandées (Création, lecture, suppression.

Vous utiliserez le module uuid (https://www.npmjs.com/package/uuid) afin de générer un identifiant unique aux objets "user" que vous créerez.

    const uuidv1 = require('uuid/v1');
    uuidv1(); // ⇨ '45745c60-7b1a-11e8-9c9c-2d42b21b1a3e'

Il n'y a pas besoin pour le moment de gérer la persistance fichier ou BDD des utilisateurs créés, une simple persistance mémoire dans un tableau suffira.

A la fin de cette étape vous disposerez des services suivants :
    GET /users
    GET /users/id
    POST /users
    DELETE /users/id
    PATCH /users/id

Vérifiez leur fonctionnement avec l'outil de votre choix (curl, postman).

 (tag: TP3-ESIR-STEP2)

