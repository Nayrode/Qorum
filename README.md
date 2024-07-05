# Qorum

I got a problem with the frontend and displaying the posts doesnt work for some reasons, I'm sorry for that.

## Installation

To install the db :

```bash
docker compose up -d
```

To install the project :

```bash
cd frontend
npm install
npm start
cd ../backend
npm install
npm start
```

Don't forget to provide a .env in the backend file with those informations :

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/backend?schema=public"
APP_KEY="G9e1d_eQQQpnbiEAeBa7uqYXwRgtecNL"
```