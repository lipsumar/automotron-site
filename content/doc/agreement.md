---
title_fr: Accords
title_en: Agreement
sort: 2
---

[[FR]]

L'automotron permet d'accorder des blocs entre eux. Pour une introduction au fonctionnement de base des accords, lisez d'abord le [guide des accords](/guides/agreement).

## Marquer les accords

Lorsque l'automotron accorde des blocs entre eux, il s'assure que les "marques" des mots correspondent. Par exemple, si un mot est marqué comme "masculin", l'automotron ne sélectionnera que des mots marqués comme "masculin" dans un autre bloc.

```
le(m)  -->     ❌ pomme(f)
               ✅ tracteur(m)
               ✅ journal(m)
               ❌ musique(f)
```

Si un mot n'est pas marqué, il est considéré comme valide par défaut:

```
le(m)  -->     ✅ pomme
               ✅ tracteur
               ✅ journal(m)
               ❌ musique(f)
```

## La syntaxe

La syntaxe d'accord se trouve entre parenthèse à la suite du mot. Plusieurs variations sont supportées:

### La syntaxe positionelle

Cette syntaxe est la plus simple mais la plus limitée. Elle est définie comme suit:

```
(<genre>, <nombre>)
```

- Le premier terme marque le genre: `m` pour masculin, `f` pour féminin
- Le deuxième term (après la virgule) marque le nombre: `s` pour singulier, `p` pour pluriel.

Il est possible de ne marquer que le genre: `(m)` ou `(f)`

Pour marquer le nombre uniquement: `(*,s)` ou `(*,p)`. Ici le genre est marqué comme "tous les genre" avec le caractère `*`.

```
les(*,p)  -->   ❌ pomme(f,s)
                ✅ pommes(f,p)
                ❌ tracteur(m,s)
                ✅ tracteurs(m,p)
```

La syntaxe positionelle ne permet que de marquer le genre et le nombre. Pour marquer d'autres types d'accords, il faut utiliser la syntaxe par mot clé.

## Syntaxe par mot clé

Cette syntaxe permet de créer n'importe quelle catégorie. La syntaxe positionelle permet d'utiliser les catégories "genre" et "nombre", cette syntaxe permet d'en définit d'autres.

La syntaxe positionelle n'est qu'un raccourci de la syntaxe par mot clé, par exemple `(m,s)` est la même chose que `(gender=m,number=p)`.

Cette syntaxe est définie comme suit:

```
(<categorie>=<valeur>)
```

N'importe quelle catégorie peut être utilisée, tant que c'est un mot sans espace.

Voici un exemple qui utilise une catégorie nommée "rime":

```
rentrer(rime=é)  -->   ✅ parler(rime=é)
                       ❌ comptoir(rime=oir)
                       ✅ manger(rime=é)
                       ❌ rire(rime=ire)
```

Il est possible de spécifier plusieurs catégories à la fois:

```
(pronom=défini,couleur=rouge,rime=é)
```

Dans l'exemple ci-dessus, le mot sera marqué comme ayant un pronom "défini", la couleur "rouge" et la rime "é".

[[EN]]

Documentation is currently only available in french - english is coming soon.
