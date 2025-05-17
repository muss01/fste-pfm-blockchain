# 📦 Projet de Fin de Module — dApp TP 3

### 🎓 Université Ibn Tofaïl — MUS IIIA, S2  
🧑‍🏫 Professeur : M. OUALLA  
📅 Année universitaire : 2024 / 2025  
📁 Module : Sécurité et Technologies Blockchain

---

## 🎯 Objectif du Projet

Ce projet consiste à développer une application décentralisée (**dApp**) qui permet d’interagir avec **8 contrats intelligents Solidity**, déployés localement avec **Truffle/Ganache**, et accessibles via une interface web réalisée en **React.js**.

Il s'agit d'une plateforme pédagogique illustrant les concepts clés abordés dans le TP 3 du module blockchain.

---

## 🧰 Stack Technique

- **Solidity** (`^0.8.0`) — Écriture des smart contracts  
- **Truffle** — Compilation, déploiement et gestion des migrations  
- **Ganache** — Réseau blockchain local  
- **React.js + Next.js** — Interface utilisateur  
- **TailwindCSS** — Design moderne et responsive  
- **Web3.js** — Intégration frontend ↔ blockchain  
- **Docker + docker-compose** — Conteneurisation du projet

---

## 📦 2. Installer les dépendances

Avant de lancer l’application, installe les dépendances pour les deux parties du projet : **backend (Truffle)** et **frontend (React + Next.js)**.

### 🛠 Partie Blockchain (Truffle)

Dans le dossier racine :

```bash
npm install
```

Cela installera les dépendances nécessaires pour :
- les contrats Solidity,
- les migrations,
- la configuration Truffle.

> 📁 Exemples de fichiers concernés : `contracts/`, `migrations/`, `truffle-config.js`, etc.

---

### 🎨 Partie Frontend (React / Next.js + Tailwind)

Ensuite, va dans le dossier `client/` :

```bash
cd client
npm install
```

Cela installera :
- React, Next.js, Web3
- TailwindCSS
- Tous les composants nécessaires à l'interface utilisateur

---

## 🚀 Lancer le projet en local

1. Démarrer Ganache (GUI ou CLI) sur `http://127.0.0.1:7545`
2. Compiler et migrer les contrats :  
```bash
truffle compile
truffle migrate
```
3. Lancer le frontend :  
```bash
cd client
npm run dev
```

---

### 🐳 Méthode Docker (optionnelle)

Si Docker est installé, tu peux lancer toute l’application avec une seule commande :

```bash
docker-compose up --build
```

Cela :

- Crée les conteneurs pour le frontend React (`client`)
- Expose l’application sur :

👉 `http://localhost:3000`

---

## 📂 Structure du projet

```
.
├── client/                # Frontend React + TailwindCSS
│   ├── app/
│   ├── components/
│   ├── contracts/         # Fichiers ABI des contrats
│   └── ...
├── contracts/             # Smart contracts
├── migrations/            # Fichiers de déploiement Truffle
├── docker-compose.yml     # Lancement du projet complet
└── truffle-config.js
```

---

## 🧪 Exercices disponibles (TP 3)

| N° | Titre                            | Description                                         |
|----|----------------------------------|-----------------------------------------------------|
| 1  | ➕ L’Addition                     | Additionner deux nombres                           |
| 2  | 🔁 Convertisseur Ether ↔ Wei     | Convertir ETH ↔ WEI                                |
| 3  | 🔤 Gestion des chaînes           | Manipuler et concaténer des strings                |
| 4  | ✅ Vérification de positivité    | Vérifier si un nombre est positif                  |
| 5  | 🔢 Vérificateur de parité        | Vérifier si un nombre est pair ou impair           |
| 6  | 🧮 Somme d’un tableau            | Enregistrer et additionner une liste               |
| 7  | 📐 POO Rectangle & Forme         | Héritage et abstraction en Solidity                |
| 8  | 💸 Contrat de paiement           | Envoyer, retirer de l’ETH via contrat              |

---

## 👨‍💻 Auteur

- 👤 Mustapha MOUAIAD — MUS IIIA, S2
