# Chat App with MERN Stack

This is a Chat App built using the MERN stack (MongoDB, Express, React, Node.js). It incorporates JWT for authentication and Socket.io for real-time communication.

## Features

- **User Registration**: Create an account to start chatting.
- **User Login**: Secure login using JWT (JSON Web Tokens).
- **Real-time Chat**: Chat with other users in real time using Socket.io.
- **MongoDB**: Database for storing user information and chat messages.

## Visit

For more details, visit: [Chat App](https://chat-app-mern-dv4w.onrender.com/)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zTrinh121/chat-app-mern.git
   cd chat-app-mern
   npm install
   
2. **Set up environment variables:**
    ```bash
    DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
    JWT_SECRET=your_jwt_secret
    PORT=5000

3. **Start the server**
     ```bash
     cd backend
     npm run server

4. **Start the client**
     ```bash
     cd frontend
     npm run dev
