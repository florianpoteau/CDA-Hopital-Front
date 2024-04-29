# CDA-Hopital-Front

## Objectif

L'objectif du projet est de créer un site web front-end, qui utilise une api de gestion d'un hopital développé par une apprenante de l'organisme de formation Simplon, il sera possible de :

- Ajouter un nouveau patient.
- Modifier des patients existants.
- Prendre en compte l'arrivée d'un patient dans un service.
- Un patient, lors d'un séjour, est affecté à un lit qui est lui même dans une chambre.

Un trello a été créé pour ce projet : [Lien du trello](https://trello.com/invite/b/eS7GUHmn/ATTI3f745fa7d1cf6da49921abd6e8eb88cd460BD2C9/app-front-maquettage)

## Initialisation

Afin d'utiliser l'application, suivez les étapes ci dessous :

```bash
git clone git@github.com:florianpoteau/CDA-Hopital-Front.git
```

A la racine du projet :

```bash
npm install
```

```bash
npm start
```

## Sécurisation

Afin de sécuriser l'application front j'ai mis en place :

- Gestion des erreurs si l'utilisateur rentre une mauvaise valeur dans tous les formulaires de l'application, pour éviter les injections XSS ou les attaques CSRF.
- Gestion des dépendance critique avec npm audit
- Aucun console log ou autre type capable d'afficher des données n'est utilisé.

## Livrables

- Zoning.
- Wireframe.
- Mockup.
- Application front mobile et desktop.
