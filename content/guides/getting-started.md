---
title_fr: Premiers pas
title_en: Getting started
sort: 1
---

[[FR]]

Dans ce guide, nous allons présenter l'interface et réaliser un générateur qui produira une phrase inspirée du film "La cité de la peur".

## L'interface

Pour commencer, rendez-vous sur [l'éditeur](https://automotron.io/editor). Vous n'avez pas besoin de créer un compte pour l'utiliser, mais vous devrez en créer un pour sauvegarder votre générateur.

L'interface contient 2 grandes parties: le générateur (à gauche) et le résultat du générateur (à droite).

![Capture d'écran de l'interface](/img/content/guides/premiers-pas/interface.png)

Un générateur commence toujours au même endroit: le bloc de départ. Ce bloc ne produit aucun texte, c'est simplement le point de départ de la phrase ou du texte.

Le générateur se présente sous forme de graphe, c'est à dire des éléments connectés entre eux par des liens. Dans l'automotron, les éléments s'apellent des **blocs** et les liens des **câbles**.

![Blocs et câbles](/img/content/guides/premiers-pas/graphe.png)

Pour créer un bloc, placez la souris sur la flèche à la droite d'un bloc, cliquez et glissez vers la droite. Lorsque vous relachez la souris, un bloc est créé et connecté au précédent.

![Animation ajout de blocs](/img/content/guides/premiers-pas/ajouter-blocs.gif)

Les blocs peuvent être disposés comme bon vous semble en les glissant pour les déplacer.

Vous pouvez naviguer dans le générateur en déplaçant la grille à l'aide de la souris. Pour zoomer ou dézoomer, utilisez la molette de la souris.

Pour supprimer des blocs, faites un clic droit sur un bloc puis cliquez "Supprimer".

## Ajouter du texte

Nous allons créer un générateur qui produira la phrase

> On peut tromper une fois mille personnes, mais on ne peut pas tromper mille fois une personne

(Pour simplifier, nous ne nous occuperons que de la première partie de la phrase)

Commençons par mettre en place une première version: ajoutez un premier bloc après le bloc de départ.

Pour ajouter du texte à un bloc, double-cliquez dessus. Saisissez le texte "On peut tromper", puis cliquez hors du cadre bleu pour valider.

![Animation mode édition](/img/content/guides/premiers-pas/ajouter-texte.gif)

Ajoutez ensuite 3 autres blocs de la manière suivante:

![Les 4 premiers blocs](/img/content/guides/premiers-pas/4-premiers-blocs.png)

Vous pouvez manintenant cliquer sur le bouton "Générer" en haut à droite. Pour l'instant ce générateur ne produit que la phrase "On peut tromper une fois mille personnes"

## Ajouter des variations

Cette phrase ne sera pas fixe (sinon il ne s'agirait pas de texte génératif), elle pourra varier comme dans le film:

- On peut tromper **une** fois **mille** personnes, [...]
- On peut tromper **mille** fois **mille** personnes, [...]
- On peut tromper **mille** fois **une** personne, [...]

Pour cela, nous allons ajouter une variation du mot "une": double-cliquez sur le bloc du mot "une" et appuyez sur `[Enter]` pour ajouter une ligne. Ajoutez le mot "mille".

![Animation variation](/img/content/guides/premiers-pas/ajout-variation.gif)

Notre générateur peut désormais générer 2 phrases:

- On peut tromper **une** fois mille personnes
- On peut tromper **mille** fois mille personnes

Nous pouvons faire de même pour le bloc "mille personnes"; ajoutez la variation "une personne" comme ceci:

![2 variations](/img/content/guides/premiers-pas/2-variations.png)

Notre générateur maintenant générer 4 phrases:

- On peut tromper **une** fois **mille personnes**
- On peut tromper **mille** fois **mille personnes**
- On peut tromper **une** fois **une personne**
- On peut tromper **mille** fois **une personne**

## Aller plus loin

Dans cet exemple, nous n'avons utilisé que les fonctionnalités les plus basique de l'automotron, mais il est possible d'aller plus loin:

- **[Les accords](/guides/les-accords)**  
  Plutôt que de répéter le mot "personne" une fois au singulier et au pluriel, il est possible d'accorder des blocs entre eux.
- **[Les générateurs](/guides/les-generateurs)**  
  La version complète de cette phrase contient "une fois/mille fois" et "une personne/mille personnes" plusieurs fois. Plutôt que de répéter les blocs, il est possible de réutiliser des blocs ou des groupes de blocs grâce aux générateurs.

[[EN]]

Getting started, english version
