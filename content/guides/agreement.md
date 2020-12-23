---
title_fr: Les accords
title_en: Agreement
sort: 3
---

[[FR]]

Dans ce guide, nous allons voir comment accorder des blocs entre eux. L'automotron n'a aucune connaissance du language, il n'accorde donc pas automatiquement, mais il est possible de définir des accords et l'automotron les respectera.

## Qu'est-ce qu'un accord ?

En français, il est nécessaire d'accorder les mots entre eux. Par exemple la phrase suivante n'est pas accordée:

> Le belle ballon blanche

Si cette phrase était accordée, cela donnerait:

> Le beau ballon blanc

Voici un générateur qui produira parfois une phrase correcte (accordée) et parfois pas:

![Example sans accord](/img/content/guides/les-accords/sans-accord.png)

## Accorder dans l'automotron

Deux choses sont nécessaires pour accorder des blocs dans l'automotron:

- marquer les accords des textes
- faire une connection d'accord entre les blocs

Dans cet exemple nous allons accorder les genres (masculin/féminin). Pour que l'automotron puisse accorder, il faut préciser quels mots sont masculins et quels mots sont féminins.

Pour marquer un mot comme masculin, il faut ajouter `(m)` à la fin du mot, et `(f)` pour le féminin, comme ceci:

![Accord de genre](/img/content/guides/les-accords/accord-genre.gif)

_Lorsqu'un mot est marqué, un point orange apparait._

Répétons l'opération pour le mot suivant, nous allons marquer "beau" comme masculin et "belle" comme féminin:

![Accord de genre sur les mots beau et belle](/img/content/guides/les-accords/beau-belle.png)

Pour finir, il faut ajouter une connection d'accord entre les deux:

![Accord de genre](/img/content/guides/les-accords/connection-accord.gif)

Si vous cliquez sur "Générer" (en haut à droite), vous verrez que les deux premiers mots sont accordés correctement, mais pas le reste de la phrase. Il suffit de marquer le reste du texte et connecter les accords:

![Exemple avec accords](/img/content/guides/les-accords/avec-accords.png)

La phrase devrait désormais être accordée correctement quand vous cliquez sur "Générer".

## Accorder en genre et en nombre

L'exemple précédent montre comment accorder en genre, mais l'automotron peut également accorder en nombre.

Ajoutons quelques variations à notre exemple pour introduire des mots au pluriel:

![Genre et nombre](/img/content/guides/les-accords/genre-et-nombre.png)

Le nombre se marque avec `s` (singulier) ou `p` (pluriel), par exemple:

- ballon`(m,s)` - _masculin, singulier_
- balle`(f,s)` - _féminin, singulier_
- ballons`(m,p)` - _masculin, pluriel_
- balles`(f,p)` - _féminin, pluriel_

Il arrive que certains mots s'écrivent de la même manière au masculin et au féminin. Pour cela on peut utiliser `*`. Par exemple:

- Le`(m,s)` - _masculin, singulier_
- La`(f,s)` - _féminin, singulier_
- Les`(*,p)` - _masculin/féminin, pluriel_

## Pour aller plus loin

Dans ce guide nous ne parlons que de l'accord en genre et en nombre. C'est l'accord le plus courant, mais l'automotron permet d'accorder bien plus, y compris des personnes (je,tu,il,...) ou même des rimes. Voir [la documentation complète des accords](/doc/agreement).

[[EN]]

Documentation is currently only available in french - english is coming soon.
