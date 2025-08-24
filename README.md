# Orbit - Realtime Chat Application

Orbit is a modern, full-stack realtime chat application built with Next.js, Node.js, Express, MongoDB, and Socket.io. It features a beautiful, responsive UI, secure authentication, and real-time messaging.

## Features
- Realtime messaging with Socket.io
- Secure authentication with OTP verification
- Profile management with avatar support
- Media, files, and starred messages
- Responsive design for desktop and mobile

## Screenshots

### 1. Login Page
![Login Page](docs/login-screenshot.jpg)

### 2. OTP Verification
![OTP Verification](docs/otp-screenshot.jpg)

### 3. Main Chat UI
![Main Chat UI](docs/chat-screenshot.jpg)

### 4. Email OTP Example
![Email OTP Example](docs/email-otp-screenshot.jpg)

> **Note:** Place the images in a `docs/` folder at the root of your project for correct rendering on GitHub.

## Technologies Used
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Realtime:** Socket.io
- **Authentication:** OTP via Email
- **File Uploads:** Multer, Cloudinary

## Getting Started

### Prerequisites
- Node.js & npm
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/orbit-chat-app.git
   cd orbit-chat-app
   ```
2. Install dependencies for frontend and backend:
   ```bash
   cd backend/user
   npm install
   cd ../../frontend/my-app
   npm install
   ```
3. Set up environment variables for backend (MongoDB URI, Cloudinary, etc.)
4. Start backend and frontend servers:
   ```bash
   # In backend/user
   npm run dev
   # In frontend/my-app
   npm run dev
   ```

## Folder Structure
```
backend/
  chat/
  mail/
  user/
frontend/
  my-app/
```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

---

## Demo
Try the app locally or deploy to Vercel/Heroku for a live demo.

---

## Contact
For any queries, reach out to [hardik2004s@gmail.com](mailto:hardik2004s@gmail.com)

