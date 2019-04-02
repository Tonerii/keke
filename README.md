#Important:
Je n'ai pas mit les dossiers "features" et "node\_modules" (contenant tout deux
des fichiers importants pour le fonctionnement du BOT) tout simplement car Git-
Hub ne me le permet pas (la limite de fichier étant de seulement 100 fichiers).

Je me suis dit que si vous preniez le temps de regarder, vous n'iriez pas jusqu'
à lancer le BOT mais que vous regarderiez plutôt à quoi ressemble le code source
de mon BOT.

*longues explications*:
  **app.js**:
  J'en profite pour un peu expliquer ce que j'ai voulu faire avec ce BOT. Kéké
  est un personnage d'un jeu nommé *Animal Crossing* et j'ai tout simplement v
  oulu recréer ce personnage ainsi que son comportement sous la forme d'un BOT
  Discord.
    Je devais respecter les contraintes suivantes:
    1. Le BOT doit se connecter à un channel vocal à 20h00 (l'heure de venue est
    tout de même réglabe depuis le fichier *settings.json*).
    2. Le BOT devait se déconnecter à 00h00 (mais j'ai essayer de faire en sorte
    qu'il puisse terminer sa chanson en cours au lieu de partir subitement).

    Fonctionnement (très simplifié):
    Pour faire simple, le BOT suite à différentes vérifications va lancer le com
    pte à rebours jusqu'à l'heure définie dans *settings.json* (ici 20h00) et il
    rejoindra, une fois 20h00 arrivé, le BOT se connectera dans le channel vocal
    et le dispositif de jukebox aléatoire se mettra en place. Ensuite, une fois
    00h00 arrivé, le BOT termine sa chanson et se relance afin de relancer le co
    mpte à rebours.

  **settings.json**:
  Je tenais juste à préciser qu'il est tout à fait normal que le token soit null
  étant donné que les tokens ne sont pas des choses que l'on doit partager.
