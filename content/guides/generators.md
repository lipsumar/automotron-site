---
title_fr: Les générateurs
title_en: Generators
sort: 2
---

[[FR]]

Dans ce guide, nous allons explorer les générateurs. Pour ce faire, nous utiliserons comme exemple la phrase du guide [Premiers pas](/fr/guides/getting-started) "On peut tromper une fois mille personnes mais on ne peut pas tromper mille fois une personne".

## Pourquoi utiliser un générateur

Un générateur permet de réutiliser des blocs. Voici un exemple qui n'utilise pas de générateur:

![Exemple avec répétition](/img/content/guides/les-generateurs/repetition.png)

Les blocs soulignés en rouge sont répétés. Utiliser un générateur permet de ne pas répéter ces blocs.

## Les bases des générateurs

Avant de créer un générateur pour notre phrase, nous allons d'abord voir l'exemple le plus simple: réutiliser un seul bloc. Considérons cet exemple:

![Exemple simple avec répétition](/img/content/guides/les-generateurs/repetition-simple.png)

Pour utiliser un générateur, nous allons détacher le premier bloc contenant des couleurs comme ceci:

![Exemple simple avec répétition](/img/content/guides/les-generateurs/detacher-generateur.gif)

Ensuite, replacez un bloc vide là où le bloc "couleurs" sera réutilisé:

![Remplacer par des blocs vides](/img/content/guides/les-generateurs/remplacer-blocs-vides.gif)

Pour finir, connectez les deux blocs vides au générateur:

![Connecter le generateur](/img/content/guides/les-generateurs/connecter-generateur.gif)

Un générateur est donc un bloc comme les autres. N'importe quel autre bloc peut y être connecté pour l'utiliser en tant que générateur. Une fois un bloc connecté à un générateur, il produira le texte du générateur auquel il est connecté.

En pratique, cela permet de ré-utiliser des listes de mots.

## Un générateur avec plusieurs blocs

Revenons à notre exemple qui contient plusieurs blocs répétés:

![Exemple avec répétition](/img/content/guides/les-generateurs/repetition.png)

Pour utiliser un générateur, il suffit de détacher les blocs à ré-utiliser et les connecter à un bloc vide:

![Générateur multi-bloc](/img/content/guides/les-generateurs/generateur-multi-blocs.gif)

_Pour déplacer plusieurs blocs à la fois, maintenez `[Maj]` et dessinez un cadre pour sélectionner plusieurs blocs._

Ce générateur peut alors être connecté à un deuxième bloc pour obtenir ceci:

![Exemple final](/img/content/guides/les-generateurs/sans-repetition.png)

[[EN]]

In this guide, we'll discover how to make use of generators to reuse blocks in multiple places.

## Why use a generator

A generator allows to re-use blocks. Here's an example that doesn't make use of generators:

![Example with repeated blocks](/img/content/guides/generators/repetition.png)

As you see, the list of names are the same and are repeated twice. Instead of repeating them, we can use a generator to only use one list.

## Adding a generator

Using the example above, we'll remove one of the list and detach the other so we can reuse it as a generator:

![Detach](/img/content/guides/generators/detach.gif)

Next, we connect the 2 empty boxes using "connect to generator":

![Connect the generator](/img/content/guides/generators/connect-generator.gif)

Any block can become a generator. Any other block can use a block as a generator. When a block is connected to a generator, that block will produce the text of the generator block it's connected to.

In practice it allows to re-use lists multiple times in a sentence or large text.

## Generators made of multiple blocks

A generator can be made of multiple blocks.

![Example with multiple blocks](/img/content/guides/generators/multiple.png)

This example will produce sentences like:

- A **nice potato** next to a **small banana**
- A **nice orange** next to a **stinky banana**
- A **small banana** next to a **stinky potato**
