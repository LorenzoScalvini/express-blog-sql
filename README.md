# My Blog API

Un'API RESTful semplice con Express e MySQL per gestire i post di un blog. 💻

## Struttura del Progetto

```
my-blog-api/
├── controllers/          # Logica di business
├── routes/               # Rotte API
├── config/               # Configurazione DB
├── app.js                # App principale
└── package.json
```

## Requisiti

- Node.js 💾
- MySQL 💻

## Installazione

1. **Clona il repository:**

   ```bash
   git clone https://github.com/tuo-repo/my-blog-api.git
   cd express-blog-sql
   ```

2. **Installa le dipendenze:**

   ```bash
   npm install
   ```

3. **Configura il database:**

   - Importa `blog_db.sql` in MySQL Workbench.
   - Aggiorna `config/db.js` con le tue credenziali.

4. **Avvia il server:**
   ```bash
   npm start
   ```

## API Endpoints

- **GET** `/api/posts` - Tutti i post.
- **GET** `/api/posts/:id` - Post specifico.
- **DELETE** `/api/posts/:id` - Elimina un post.

## Test

Usa Postman o simili per testare:

- **GET** `/api/posts` - Lista post.
- **GET** `/api/posts/:id` - Singolo post.
- **DELETE** `/api/posts/:id` - Elimina post.

---
