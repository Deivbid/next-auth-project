# 🔒 Next.js Auth Toolkit

Welcome to the Next.js Auth Toolkit project! This repository showcases a comprehensive authentication toolkit built with the latest technologies, including Next.js, Auth.js (Next Auth v5), Tailwind CSS, and PostgreSQL. The main goal of this project was to explore and learn how to implement various authentication methods and manage user sessions effectively.

[Live Demo](https://next-auth-project-livid.vercel.app/)

![Login Screen](https://i.imgur.com/eR3eiKW.png)

## 🚀 Project Highlights

- **Two-Factor Authentication (2FA)**
- **Forgot Password functionality**
- **Email Verification**
- **Credential Login**
- **OAuth Login** (Google & GitHub)
- **User Info Management** (both on server and client sides)

## 📚 Technologies Used

- **Next.js** - A powerful React framework for server-side rendering and static site generation.
- **React.js** - A JavaScript library for building user interfaces.
- **Tailwind CSS** - A utility-first CSS framework for rapidly building custom designs.
- **PostgreSQL** - A robust, open-source relational database system.
- **Auth.js (Next Auth v5)** - A flexible authentication solution for Next.js applications.

## ✨ Features

### Authentication Methods

1. **Credential Login** - Sign in using a username and password.
2. **OAuth Login** - Seamlessly log in with Google or GitHub accounts.
3. **Two-Factor Authentication (2FA)** - Enhance security by adding an extra layer of authentication.
4. **Forgot Password** - Easily reset your password if you forget it.
5. **Email Verification** - Verify your email address to complete the registration process.

### User Info Management

- **View User Info** - Once logged in, users can view their information on the server or client side.

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/nextjs-auth-toolkit.git
   cd nextjs-auth-toolkit
   ```
2. **Install dependencies**
   ```sh
   bun install
   // or
   npm install
   ```
3. **Set up environment variables**
   (please see env.exampple file)
   ```sh
        DATABASE_URL=your_postgresql_database_url
        NEXTAUTH_URL=http://localhost:3000
        NEXTAUTH_SECRET=your_nextauth_secret
        GOOGLE_CLIENT_ID=your_google_client_id
        GOOGLE_CLIENT_SECRET=your_google_client_secret
        GITHUB_CLIENT_ID=your_github_client_id
        GITHUB_CLIENT_SECRET=your_github_client_secret
   ```
4. **Run the development server**
   ```sh
    bun dev
    // or
    npm run dev
   ```
5. **Open your browser**
   ```sh
    Navigate to http://localhost:3000 to see the app in action.
   ```

## 🎉 Usage

- **Create an Account** - Register using your email or log in directly with Google or GitHub.

- **Manage Session** - Log in and out to manage your session. You can view your user information both on the server and client sides.
