---
title: Exports
---

Il est possible d'exporter les générateurs. Utilisez le menu "Exporter" dans l'éditeur:

![Le menu exporter](/img/content/doc/export.png)

## Export texte

L'export au format texte est une URL qui exécute le générateur et le retourne au format texte (`text/plain`).

## Export HTML

L'export au format texte est une URL qui exécute le générateur et le retourne au format HTML (`text/html`).

Cet export permet d'utiliser des tags HTML (comme `<strong>` par exemple) dans le générateur.

## Export JSON

Cet export concerne des utilisations avancées de l'automotron. Tout comme les autre formats d'exportation, le générateur est exécuté et le résultat est retourné en format JSON (`application/json`).

L'objet JSON contient `text` (le texte généré) et `result` (le détail de chaque bloc et câble)

**Exemple**

```
{
  "text": "Bonjour le monde",
  "result": {
    "results": [
      {
        "nodeId": 1,
        "result": null
      },
      {
        "edge": true,
        "result": " "
      },
      {
        "nodeId": 2,
        "result": {
          "text": "Bonjour",
          "agreement": null,
          "rawText": "Bonjour"
        }
      },
      {
        "edge": true,
        "result": " "
      },
      {
        "nodeId": 3,
        "result": {
          "text": "le monde",
          "agreement": null,
          "rawText": "le monde"
        }
      }
    ]
  }
}
```
