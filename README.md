# 📝 Personal Blog Website

> A full-stack **MERN Personal Blog application** with **JWT authentication**, **Markdown-supported blog writing**, and **Gemini API integration** for AI-assisted blog reading and writing.

![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Express](https://img.shields.io/badge/Express-Backend-black)
![React](https://img.shields.io/badge/React-Frontend-blue)
![Node.js](https://img.shields.io/badge/Node.js-Runtime-brightgreen)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Markdown](https://img.shields.io/badge/Editor-Markdown-blueviolet)
![Gemini API](https://img.shields.io/badge/AI-Gemini_API-purple)

---

## 🌍 Overview

**Personal Blog Website** is a full-stack blogging platform built using the **MERN stack**.
It allows users to **register/login securely**, create and manage blog posts, write content with **Markdown support**, and use **Gemini API-powered AI assistance** for blog writing and reading workflows.

The project is designed to practice and demonstrate:

* **full-stack web development**
* **authentication and protected routes**
* **MongoDB schema design**
* **REST API integration**
* **Markdown-based content rendering**
* **AI-assisted blog workflows using Gemini API**

---

## ✨ Features

### 🔐 User Authentication

* Secure user registration and login
* Password hashing using **bcrypt**
* JWT-based authentication and authorization

### 📝 Create & Manage Blog Posts

* Create new blog posts
* Edit existing posts
* Delete blog posts
* View blog details dynamically

### 📄 Markdown Support

* Write blog content using **Markdown syntax**
* Render formatted content cleanly inside blog pages

### 🤖 Gemini API Integration

* AI-assisted help for **writing blog content**
* AI-assisted support for **reading / understanding blog content**
* Can be used to enhance the blogging workflow with content assistance

### 🛡️ Protected Routes

* Dashboard and writing-related actions are protected
* Only authenticated users can manage their own content

### ⚡ Full-Stack MERN Workflow

* **React frontend** for UI
* **Express + Node backend** for APIs
* **MongoDB** for storing users and blog posts

---

## 🚀 How It Works

1. A user registers or logs in to the application
2. The backend validates credentials and returns a JWT token
3. Authenticated users can access protected features
4. Users can create blog posts with **Markdown content**
5. Blog posts are stored in **MongoDB**
6. The frontend fetches and displays posts dynamically
7. **Gemini API** can assist with blog writing / reading workflows
8. Markdown content is rendered into readable blog format

---

## 🛠️ Tech Stack

### Backend

* **Node.js**
* **Express.js**
* **MongoDB Atlas / MongoDB**
* **Mongoose**
* **JWT (JSON Web Token)**
* **bcryptjs**
* **Gemini API integration**

### Frontend

* **React.js**
* **React Router DOM**
* **Axios / Fetch API**
* **Markdown Renderer**

---

## 📁 Project Structure

```bash id="fyzttm"
Personal-Blog-Website/
│
├── backend/                        # Node.js + Express backend
│   ├── config/                     # Database / external service configuration
│   │   └── db.js
│   │
│   ├── controllers/                # Business logic for auth, posts, AI actions
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── geminiController.js     # Gemini API related logic (if separated)
│   │
│   ├── middleware/                 # Authentication middleware
│   │   └── authMiddleware.js
│   │
│   ├── models/                     # MongoDB schemas / models
│   │   ├── userModel.js
│   │   └── postModel.js
│   │
│   ├── routes/                     # API routes
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── geminiRoutes.js         # Gemini API routes (if present)
│   │
│   ├── server.js                   # Main backend entry point
│   └── package.json
│
├── frontend/                       # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   ├── pages/                  # App pages/screens
│   │   ├── services/               # API service layer
│   │   ├── App.js                  # Main app routing
│   │   └── index.js                # React entry point
│   │
│   └── package.json
│
├── .gitignore
└── README.md
```

> If your Gemini logic is inside existing controllers/routes instead of separate files, you can keep the structure aligned with your actual project files.

---

## 🔐 Environment Variables

Create a `.env` file inside the **backend/** folder and add the following variables:

```env id="t0u1y2"
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_random_jwt_secret_key
JWT_EXPIRES_IN=1d
GEMINI_API_KEY=your_gemini_api_key
```

### Example:

```env id="j6g7hf"
PORT=5000
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/blogdb
JWT_SECRET=mySuperSecretKey123
JWT_EXPIRES_IN=1d
GEMINI_API_KEY=your_gemini_api_key_here
```

> ⚠️ Never push your `.env` file or API keys to GitHub.

---

## ⚙️ Installation & Setup

### 1) Clone the Repository

```bash id="llx9l5"
git clone https://github.com/your-username/Personal-Blog-Website.git
cd Personal-Blog-Website
```

---

## 🖥️ Backend Setup

### 2) Move to the backend folder

```bash id="2i89gw"
cd backend
```

### 3) Install backend dependencies

```bash id="j95m29"
npm install
```

### 4) Create `.env` file inside `backend/`

Add your MongoDB URI, JWT secret, and Gemini API key as shown above.

### 5) Run the backend server

```bash id="m0d84x"
npm run dev
```

or

```bash id="5gnfbq"
node server.js
```

Backend will run on:

```bash id="6hzbd0"
http://localhost:5000
```

---

## 🌐 Frontend Setup

Open a **new terminal** and run:

### 6) Move to the frontend folder

```bash id="hck4if"
cd frontend
```

### 7) Install frontend dependencies

```bash id="myu2bp"
npm install
```

### 8) Start the frontend

```bash id="7wazm6"
npm start
```

Frontend will run on:

```bash id="zcdu0z"
http://localhost:3000
```

---

## 🔄 Application Workflow

### Authentication Flow

* User signs up or logs in
* Password is hashed using **bcrypt**
* JWT token is generated on successful login
* Protected routes verify the token before allowing access

### Blog Flow

* User opens dashboard / blog creation page
* Writes a blog post with title, content, and Markdown text
* Post is sent to backend API
* Backend stores the post in MongoDB
* Frontend fetches and displays posts dynamically
* Blog details page renders the Markdown content properly

### Gemini AI Flow

* User can use **Gemini-powered assistance** during blogging workflows
* AI can support blog writing, content suggestions, or reading assistance depending on your implementation
* Gemini integration enhances the blog experience with intelligent content help

---

## 📌 Core Features in Detail

### 🔐 Secure Authentication

* Password encryption using **bcryptjs**
* Token-based authentication with **JWT**
* Protected API routes using middleware

### 📝 CRUD Blog Management

* **Create** a blog post
* **Read** all blog posts / single blog details
* **Update** existing blog posts
* **Delete** blog posts

### 📄 Markdown Blog Writing

Users can write posts in **Markdown** for:

* headings
* lists
* bold / italic text
* code blocks
* structured formatting

### 🤖 Gemini-Powered Assistance

Depending on your implementation, Gemini can be used for:

* blog writing help
* content suggestions
* blog summarization / reading assistance
* improving content workflow experience

### 🛡️ Protected Dashboard Access

Only logged-in users can:

* create posts
* update posts
* delete posts
* access user-specific protected sections

---

## 📦 API Modules

### Auth APIs

Handles:

* user registration
* login
* token generation

### Post APIs

Handles:

* creating blog posts
* fetching all posts
* fetching single post details
* updating posts
* deleting posts

### Gemini APIs / AI Layer

Handles AI-related blog functionality such as:

* content assistance
* blog reading support
* writing help
* content enhancement workflows

---

## 💡 Example Use Case

### Scenario

A user wants to publish a technical blog post.

### Flow

1. User registers/login
2. Opens the blog dashboard
3. Writes a post using Markdown syntax
4. Uses Gemini assistance while drafting or improving the post
5. Submits the post
6. The post gets stored in MongoDB
7. Readers can open the post and see formatted content rendered on the blog page

---

## 📈 Future Improvements

* Add **blog categories and tags**
* Add **image upload support** for posts
* Add **rich text + live markdown preview**
* Add **user profile page**
* Add **comments system**
* Add **likes / bookmarks**
* Add **search and filter functionality**
* Add **pagination for blog listing**
* Add **dark mode UI**
* Improve AI-assisted blog generation and summarization features
* Deploy frontend and backend separately for production

---

## 🧠 Learning Outcomes

This project helped in exploring:

* Full-stack MERN application development
* Authentication using **JWT + bcrypt**
* MongoDB schema and model design
* Express route/controller architecture
* Protected routes and middleware
* React routing and API integration
* Markdown rendering in a real project
* Gemini API integration in a web application
* Structuring a full-stack monorepo project

---

## ⚠️ Notes

* Keep your **MongoDB URI**, **JWT secret**, and **Gemini API key** private
* Make sure MongoDB connection is working before starting the backend
* If frontend and backend run on different ports, configure **CORS** properly
* Add `.env`, `node_modules`, and other local files to `.gitignore`

---

## 👩‍💻 Author

Built by **Meenu Parashar** as a full-stack MERN project for learning, practicing, and showcasing blog platform development with authentication, Markdown support, and Gemini-powered AI features.

