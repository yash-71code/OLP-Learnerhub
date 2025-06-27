# 📖 Learn‑Hub

*Learn‑Hub* is a comprehensive open-source learning platform featuring practical tutorials, structured projects, and coding resources—designed to help users strengthen their web development and programming skills.

- *Documentation*: https://drive.google.com/drive/folders/1bFd1z3AHP1paxKkeWougQaUpZ6PlvRwo

- *Demo video*: https://drive.google.com/file/d/1SDRnG4MOdMjkHUKYbRdYocnMWEjNO-h5/view?usp=sharing
  
---

## ⚙ Features

### 🎓 User Roles
- *Students*: Browse and enroll in courses, rate content, manage wishlists, access purchased content.
- *Instructors*: Build and publish courses, manage content, gain insights and analytics.

### 🔐 Authentication & Security
- Signup/Login with email & password  
- OTP support and “forgot password” recovery

### 📚 Courses & Content
- CRUD functionality for courses  
- Support for multimedia (videos, images, PDFs), markdown-formatted documents  
- Ratings and reviews system

### 🛒 Payments
- Course checkout and enrollment with payment processing (e.g., Razorpay)

### ☁ Media Handling
- Cloudinary integration for efficient media uploading, storage, and delivery

### 🧠 Rich UX Components
- React Router for smooth navigation  
- React hooks: \useState\, \useEffect\, \useNavigate\, dynamic custom hooks  
- UI libraries: Swiper, Framer Motion, Chart.js, React Dropzone, OTP inputs, toast notifications, lazy-loading, responsive tables

---

## 📦 Project Structure

```
/frontend      # React client-side application  
/backend       # Node/Express RESTful API server  
.gitignore  
README.md
```

* **frontend/**: Contains the React app, UI components, page layouts, routing logic, and user-facing features.
* **backend/**: Houses Express routes, controllers, middleware, authentication and payment logic, database models (MongoDB), and API documentation.

---

## 🛠 Tech Stack

* **Frontend**: React, React Router, Context/Redux, Framer Motion, Chart.js, Cloudinary integration
* **Backend**: Node.js, Express.js, MongoDB (Mongoose), JWT-based authentication, Razorpay payments, Cloudinary SDK
* **Dev Tools**: ESLint, Prettier, Postman for API testing

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/Perkywarcheif/Learn-Hub.git
cd Learn-Hub
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.sample .env
# Add environment variables:
# MONGO_URI, JWT_SECRET, CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET,
# RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
cp .env.sample .env
# Set REACT_APP_API_URL to your backend base URL
npm start
```

### 4. Open in Browser

Visit: [http://localhost:5173](http://localhost:5173)

---


## 📚 Usage Guide

- *Students*: Register, enroll in courses, track progress, rate content.  
- *Instructors*: Create/edit/delete courses, upload media, view analytics dashboards, manage profiles.
    
---

## 🧩 Extensibility & Contributions

Learn‑Hub is modular and open for contributions:

- Enhance frontend UI and styling  
- Add backend features (e.g., roles, more filters, quizzes)  
- Expand payment options or integrate analytics  
- Add unit tests, CI/CD pipelines  
- Implement user dashboards or community features

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License & Contact

- *License*: MIT  
- *Author*: Perkywarcheif  
- *Contact*: anirudh.mamilla1@gmail.com

---

## 🚩 Roadmap

| Version | Features                                                   |
|---------|------------------------------------------------------------|
| v1.0    | Core features: Auth, course system, payments, base UI      |
| v2.0    | Quizzes, progress tracking, UI polish                      |
| Future  | Community forums, gamification, AI-based recommendations  |

---

## ✅ Summary

Learn‑Hub empowers learners and educators with an end-to-end ed-tech ecosystem built using modern web technologies:

### 🚀 Frontend
- *React.js*  
- *React Router DOM*
- *Context API / Redux* (optional based on your setup)
- *Framer Motion* (animations)  
- *Swiper.js* (sliders)  
- *Chart.js* (charts/analytics)
- *React Dropzone* (file uploads)
- *React OTP Input* (OTP UI)
- *React Toastify* (notifications)
- *Axios* (API requests)
- *Tailwind CSS* or *CSS Modules* / *Bootstrap* (based on your styling)
- *Lazy loading* and *responsive components*

### 🛠 Backend
- *Node.js*
- *Express.js*
- *MongoDB* with *Mongoose*
- *JWT Authentication*
- *Bcrypt.js* (password hashing)
- *Razorpay SDK* (payment gateway)
- *Cloudinary SDK* (media storage and retrieval)
- *Multer* (file handling)
- *Dotenv* (env config)
- *Cors, **Helmet, **Morgan, **Cookie-parser* (security/middleware)

---

It’s perfect for both *real-world ed-tech usage* and a *portfolio showcase*, with huge potential for adding future features like:
- Quiz modules  
- Student progress tracking  
- AI-based recommendations  
- Community forums  
- Leaderboards and gamification

---
