# My Blog API 📝

Un'API RESTful **semplice** con **Express** e **MySQL** per gestire i post di un blog. Interfaccia backend completa per la gestione dei contenuti.

## ⚙️ Funzionalità

* Gestione completa dei post del blog
* Database MySQL per la persistenza dei dati
* Endpoints RESTful per le operazioni CRUD
* Architettura scalabile e modulare

## 📂 Struttura del Progetto

```
📦my-blog-api
 ┣ 📂controllers
 ┃ ┗ 📜postController.js
 ┣ 📂routes
 ┃ ┗ 📜postRoutes.js
 ┣ 📂config
 ┃ ┗ 📜db.js
 ┣ 📜app.js
 ┗ 📜package.json
```

## 🔧 Installazione

### 1. **Clona il repository**
```bash
git clone https://github.com/tuo-repo/my-blog-api.git
cd my-blog-api
```

### 2. **Installa le dipendenze**
```bash
npm install
```

### 3. **Configura il database**
* Importa `blog_db.sql` in MySQL Workbench
* Aggiorna `config/db.js` con le tue credenziali

### 4. **Avvia il server**
```bash
npm start
```

## 🛠️ API Endpoints

* **GET** `/api/posts` - Recupera tutti i post
* **GET** `/api/posts/:id` - Recupera un post specifico
* **DELETE** `/api/posts/:id` - Elimina un post

## ⚡ Test

Usa Postman o strumenti simili per testare:

* **Lista post**
  ```
  GET /api/posts
  ```

* **Singolo post**
  ```
  GET /api/posts/:id
  ```

* **Elimina post**
  ```
  DELETE /api/posts/:id
  ```

## 🔨 Tecnologie utilizzate

* **Express.js**
* **MySQL**
* **Node.js**
* **RESTful API**
