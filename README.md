# DearCode - AI Powered Code Reviewer

> **An AI-powered code review application that analyzes source code, identifies issues, suggests improvements, and follows modern software engineering best practices using Large Language Models (LLMs).**

---

# Author

**Anand**

---

# Overview

DearCode is a full-stack AI-powered code review application that helps developers improve their code by leveraging the power of Large Language Models (LLMs).

Users can paste their source code into the editor, submit it for review, and receive intelligent suggestions related to:

-  Code Quality
-  Bug Detection
-  Performance Optimization
-  Security Best Practices
-  Readability
-  Clean Code Principles
-  Refactoring Suggestions
-  Optimization Tips

The project demonstrates how AI can automate code reviews while maintaining a clean, scalable, and production-ready architecture.

---

# ✨ Features

-  AI-powered code review
-  Interactive code editor
-  Syntax highlighting
-  Markdown formatted AI responses
-  Fast React + Vite frontend
-  Express.js backend
-  REST API architecture
-  Secure environment variable support
-  Responsive UI


---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Axios
- PrismJS
- React Markdown
- Rehype Highlight
- CSS

---

## Backend

- Node.js
- Express.js
- CORS
- dotenv
- Groq SDK

---

## AI Model

- Groq API
- Llama 3.3 70B Versatile

---

#  Project Structure

```text
DearCode
│
├── FrontEnd
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── assets
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
└── BackEnd
    ├── src
    │   ├── app.js
    │   ├── server.js
    │   ├── controllers
    │   ├── routes
    │   └── services
    │
    ├── package.json
    └── .env
```

---

# Application Architecture

```text
                 User
                   │
                   ▼
         React + Vite Frontend
                   │
             Axios HTTP Request
                   │
                   ▼
          Express REST API
                   │
           Controller Layer
                   │
            AI Service Layer
                   │
              Groq API
                   │
                   ▼
        AI Generated Review
                   │
                   ▼
      Markdown Response to UI
```

---

# 🔄 Request Flow

1. User writes or pastes source code.
2. React captures the code.
3. Axios sends a POST request to the backend.
4. Express receives the request.
5. The controller forwards the code to the AI service.
6. The AI service sends the prompt to Groq.
7. Groq generates a detailed review.
8. Express returns the response.
9. React renders the review using Markdown.

---

# Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/DearCode.git
```

---

## Frontend Setup

```bash
cd FrontEnd
npm install
```

Create a `.env` file inside the FrontEnd directory:

```env
VITE_API_URL=http://localhost:3000
```

Run the frontend:

```bash
npm run dev
```

---

## Backend Setup

```bash
cd BackEnd
npm install
```

Create a `.env` file inside the BackEnd directory:

```env
PORT=3000
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

Run the backend:

```bash
node server.js
```

---

# API Endpoint

## Review Code

### POST

```
/ai/get-review
```

### Request

```json
{
  "code": "console.log('Hello World');"
}
```

### Response

```text
The code looks good.

Suggestions:

• Use semicolons consistently.
• Consider enabling strict mode.
• Add comments where necessary.
```

---

# Environment Variables

## Frontend

```env
VITE_API_URL=http://localhost:3000
```

---

## Backend

```env
PORT=3000
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# Deployment

## Frontend (Vercel)
CAN BE IF YOU WANT

Build Command

```bash
npm run build
```

Output Directory

```text
dist
```

Environment Variable

```env
VITE_API_URL=https://your-backend.onrender.com
```

---

## Backend (Render)

Start Command

```bash
node server.js
```

Environment Variable

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# Technologies Used

| Technology | Purpose |
|------------|---------|
| React | Frontend Framework |
| Vite | Build Tool |
| Node.js | JavaScript Runtime |
| Express.js | Backend Framework |
| Axios | HTTP Client |
| Groq | AI Model Provider |
| Llama 3.3 | Large Language Model |
| PrismJS | Syntax Highlighting |
| React Markdown | Markdown Rendering |
| Rehype Highlight | Code Block Highlighting |
| dotenv | Environment Variables |
| CORS | Cross-Origin Requests |

---

# Security

- API keys are stored using environment variables.
- Sensitive files are excluded from Git using `.gitignore`.
- Frontend communicates only with the backend.
- Groq API keys are never exposed to the client.
- CORS is configured for secure communication.

---

#  Future Enhancements

-  User Authentication
-  MongoDB Integration
-  Review History
-  Dark Mode
-  Pull Request Review
-  Downloadable Reports
-  AI Review Score


---

# Learning Outcomes

This project demonstrates practical knowledge of:

- React.js
- Express.js
- Node.js
- REST APIs
- Axios
- Environment Variables
- Prompt Engineering
- AI Integration
- Frontend–Backend Communication
- Markdown Rendering
- Syntax Highlighting
- Error Handling
- Deployment
- Software Architecture
- Modern JavaScript (ES6+)

---

# License

This project is intended for educational and learning purposes.

---

# Acknowledgements

- React
- Vite
- Node.js
- Express.js
- Groq
- Llama Models
- PrismJS
- React Markdown

---

#  Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.

Contributions, suggestions, and feedback are always welcome!

---

## Thank You ❤️

Happy Coding! 