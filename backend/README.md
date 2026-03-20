# URL Shortener Backend

A robust Node.js/Express API server for the URL Shortener service. Built with modern JavaScript, MongoDB, and JWT authentication.

## Features

- **RESTful API**: Clean REST endpoints for URL shortening
- **User Authentication**: JWT-based auth with secure password hashing
- **URL Management**: Create, redirect, and manage short URLs
- **MongoDB Integration**: Efficient data storage with Mongoose ODM
- **Error Handling**: Comprehensive error handling and logging
- **CORS Support**: Cross-origin resource sharing enabled
- **Cookie-based Auth**: Secure HTTP-only cookies for authentication

## Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **nanoid** - Unique ID generation
- **cors** - Cross-origin resource sharing
- **cookie-parser** - Cookie handling

## Project Structure

```
backend/
├── src/
│   ├── config/           # Configuration files
│   │   ├── config.js     # App configuration
│   │   └── mongo.config.js # MongoDB connection
│   ├── controller/       # Route controllers
│   │   ├── auth.controller.js
│   │   ├── shortUrl.controller.js
│   │   └── user.controller.js
│   ├── dao/              # Data access objects
│   │   ├── shortUrl.js
│   │   └── user.dao.js
│   ├── middleware/       # Custom middleware
│   │   └── auth.middleware.js
│   ├── models/           # MongoDB schemas
│   │   ├── shorturl.model.js
│   │   └── user.model.js
│   ├── routes/           # API routes
│   │   ├── auth.route.js
│   │   ├── shortUrl.route.js
│   │   └── user.route.js
│   ├── services/         # Business logic
│   │   ├── auth.service.js
│   │   └── shortUrl.service.js
│   └── utils/            # Utility functions
│       ├── attachUser.js
│       ├── errorHandler.js
│       ├── helper.js
│       └── trycatchwrapper.js
├── app.js                # Main application file
├── package.json
└── .env                  # Environment variables
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the backend root:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/url-shortener
   JWT_SECRET=your-super-secret-jwt-key-here
   NODE_ENV=development
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:5000`

## API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /register` - Register a new user
- `POST /login` - Login user
- `POST /logout` - Logout user

### URL Routes (`/api/url`)
- `POST /shorten` - Create a short URL (authenticated)
- `GET /:shortId` - Redirect to original URL
- `GET /user/urls` - Get all URLs for authenticated user
- `DELETE /:id` - Delete a URL (authenticated)

### User Routes (`/api/user`)
- `GET /profile` - Get user profile (authenticated)
- `PUT /profile` - Update user profile (authenticated)

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://localhost:27017/url-shortener |
| `JWT_SECRET` | Secret key for JWT signing | (required) |
| `NODE_ENV` | Environment mode | development |

## Database Models

### User Model
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### ShortUrl Model
```javascript
{
  originalUrl: String (required),
  shortId: String (required, unique),
  customShortId: String (optional),
  userId: ObjectId (ref: User),
  clickCount: Number (default: 0),
  createdAt: Date,
  updatedAt: Date
}
```

## Middleware

- **auth.middleware.js**: JWT authentication middleware
- **errorHandler.js**: Global error handling
- **trycatchwrapper.js**: Async error wrapper

## Services

- **auth.service.js**: Authentication logic (register, login, JWT)
- **shortUrl.service.js**: URL shortening and management logic

## Data Access Objects (DAO)

- **user.dao.js**: User database operations
- **shortUrl.js**: URL database operations

## Development

### Available Scripts

- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (currently placeholder)

### Code Structure Guidelines

- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic
- **DAO**: Database operations
- **Models**: Database schemas
- **Middleware**: Request processing middleware
- **Utils**: Helper functions and utilities

### Error Handling

The API uses a centralized error handling system:
- Custom error classes for different error types
- Global error handler middleware
- Consistent error response format

### Authentication

- JWT tokens stored in HTTP-only cookies
- Password hashing with bcryptjs
- Protected routes require valid JWT

## API Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message",
  "statusCode": 400
}
```

## Security Features

- Password hashing with bcryptjs
- JWT authentication with HTTP-only cookies
- CORS configuration
- Input validation
- Error message sanitization

## Deployment

1. Set `NODE_ENV=production`
2. Configure production MongoDB URI
3. Set strong JWT secret
4. Use process manager like PM2
5. Configure reverse proxy (nginx)

## Contributing

1. Follow existing code structure
2. Add proper error handling
3. Write clear commit messages
4. Test API endpoints
5. Update documentation

## License

ISC License