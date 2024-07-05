# Qorum

Bonjour monsieur,
je me suis heurté à un bug majeur que je n'ai pas réussi à résoudre dans les temps,
cependant, j'ai essayé de faire la globalité de l'exercice, en espérant que cela vous conviendra.
Il y a juste l'affichage des posts qui ne fonctionne pas, je n'ai pas réussi à trouver la solution.

Merci de votre compréhension.
Bonne journée.

## Installation

Pour installer la db :

```bash
docker compose up -d
```

Pour installer le projet :

```bash
cd frontend
npm install
npm start
cd ../backend
npm install
npm start
```

N'oubliez pas de fournir un .env dans le dossier backend avec les informations suivantes :

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/backend?schema=public"
APP_KEY="G9e1d_eQQQpnbiEAeBa7uqYXwRgtecNL"
```