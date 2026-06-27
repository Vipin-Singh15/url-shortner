# URL Shortener

A full-stack URL shortening service built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create short URLs, manage their links, and track usage statistics.

## Features

- **User Authentication**: Register and login with secure JWT-based authentication
- **URL Shortening**: Convert long URLs into short, shareable links
- **Custom Short URLs**: Create custom short URLs (if available)
- **Dashboard**: View and manage all your shortened URLs
- **Analytics**: Track click counts and usage statistics
- **Responsive Design**: Modern, mobile-friendly interface built with React and Tailwind CSS

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **nanoid** for generating unique short URLs

### Frontend
- **React 19** with Vite
- **Redux Toolkit** for state management
- **TanStack Query** for data fetching
- **Tailwind CSS** for styling
- **TanStack Router** for routing

## Project Structure

```
url-shortener/
├── backend/          # Express.js API server
│   ├── src/
│   │   ├── config/   # Database and app configuration
│   │   ├── controller/ # Route controllers
│   │   ├── dao/      # Data access objects
│   │   ├── middleware/ # Custom middleware
│   │   ├── models/   # MongoDB schemas
│   │   ├── routes/   # API routes
│   │   ├── services/ # Business logic
│   │   └── utils/    # Utility functions
│   ├── app.js        # Main application file
│   └── package.json
└── frontend/         # React application
    ├── src/
    │   ├── api/      # API service functions
    │   ├── components/ # Reusable React components
    │   ├── pages/    # Page components
    │   ├── routing/  # Router configuration
    │   ├── store/    # Redux store and slices
    │   └── utils/    # Utility functions
    ├── index.html
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd url-shortener
   ```

2. **Set up the Backend**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/url-shortener
   JWT_SECRET=your-super-secret-jwt-key
   NODE_ENV=development
   ```

   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Set up the Frontend**

   Open a new terminal and navigate to the frontend directory:
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### URL Management
- `POST /api/url/shorten` - Create a short URL
- `GET /api/url/:shortId` - Redirect to original URL
- `GET /api/url/user/urls` - Get user's URLs
- `DELETE /api/url/:id` - Delete a URL

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/url-shortener
JWT_SECRET=your-super-secret-jwt-key
NODE_ENV=development
```

### Frontend
The frontend uses Vite's environment variable system. Create `.env.local`:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## Development

### Running Tests
```bash
# Backend tests
cd backend
npm test

# Frontend linting
cd frontend
npm run lint
```

### Building for Production
```bash
# Build frontend
cd frontend
npm run build

# Backend is ready for production as-is (configure NODE_ENV=production)
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.