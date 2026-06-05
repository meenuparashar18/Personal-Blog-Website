📝 Personal Blog with AI Chatbot & Markdown Support

A full-stack personal blogging platform built with MERN stack, featuring rich markdown editor support, authentication system, and an integrated AI chatbot for enhanced user interaction.
📝 Personal Blog with AI Chatbot & Markdown Support

A full-stack personal blogging platform built with MERN stack, featuring rich markdown editor support, authentication system, and an integrated AI chatbot for enhanced user interaction.

🚀 Features
🔐 Authentication System
Secure user signup & login
JWT-based auth
Protected routes
✍️ Markdown Blog Editor
Write blogs using Markdown
Live preview support
Easy formatting (headings, code blocks, links, etc.)
🤖 AI Chatbot Integration
Interactive chatbot assistant
Helps users with queries and content assistance
📰 Blog Management
Create, edit, delete posts
View all blogs in a clean UI
🎨 Modern UI
Responsive design with Tailwind CSS
Clean and minimal interface
🛠️ Tech Stack

Frontend

React.js
Tailwind CSS
Axios

Backend

Node.js
Express.js
MongoDB
Mongoose
JWT Authentication

Other Tools

Markdown Editor (React Markdown / similar library)
AI API integration (Chatbot)
📁 Project Structure
project-root/
│
├── client/          # React frontend
│   ├── src/
│   └── ...
│
├── server/          # Node + Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── ...
│
└── README.md
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git
2. Setup Backend
cd server
npm install

Create .env file:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000

Run backend:

npm start
3. Setup Frontend
cd client
npm install
npm start
🔐 Environment Variables
Variable	Description
MONGO_URI	MongoDB connection string
JWT_SECRET	Secret key for JWT
PORT	Backend server port
✨ Future Improvements
Comment system on blogs
Like / share functionality
Better AI personalization
Image upload support
SEO optimization
📌 About the Project

This project was built as a full-stack learning and development exercise combining blogging, authentication, and AI integration into one platform. It focuses on clean UI, scalable backend architecture, and real-world features.

👨‍💻 Author

Meenu Parashar
Full Stack Developer | AI Enthusiast
