# URL Shortener Frontend

A modern React application for the URL Shortener service. Built with Vite, Redux Toolkit, and Tailwind CSS for a fast and responsive user experience.

## Features

- **User Authentication**: Login and registration forms
- **URL Shortening**: Simple form to create short URLs
- **Dashboard**: View and manage all shortened URLs
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **State Management**: Redux Toolkit for global state
- **Data Fetching**: TanStack Query for efficient API calls
- **Routing**: TanStack Router for client-side navigation

## Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and dev server
- **Redux Toolkit** - State management
- **TanStack Query** - Data fetching and caching
- **TanStack Router** - Modern routing solution
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls

## Project Structure

```
frontend/
├── src/
│   ├── api/              # API service functions
│   │   ├── shortUrl.api.js
│   │   └── user.api.js
│   ├── components/       # Reusable React components
│   │   ├── LoginForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── UrlForm.jsx
│   │   └── UserUrl.jsx
│   ├── pages/            # Page components
│   │   ├── AuthPage.jsx
│   │   ├── DashboardPage.jsx
│   │   └── HomePage.jsx
│   ├── routing/          # Router configuration
│   │   ├── auth.route.js
│   │   ├── dashboard.js
│   │   ├── homepage.js
│   │   ├── routeTree.js
│   │   └── routing.js
│   ├── store/            # Redux store and slices
│   │   ├── store.js
│   │   └── slices/
│   │       └── authSlice.js
│   └── utils/            # Utility functions
│       ├── axiosInstance.js
│       └── helper.js
├── index.html
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Backend server running (see backend README)

### Installation

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env.local` file in the frontend root:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Components

### Pages
- **HomePage**: Landing page with URL shortening form
- **AuthPage**: Login and registration
- **DashboardPage**: User dashboard with URL management

### Components
- **Navbar**: Navigation bar with auth status
- **UrlForm**: Form for creating short URLs
- **UserUrl**: Display individual shortened URLs
- **LoginForm/RegisterForm**: Authentication forms

### State Management
- **authSlice**: Manages user authentication state
- **TanStack Query**: Handles API data fetching and caching

## API Integration

The frontend communicates with the backend API through Axios. Key endpoints:

- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /url/shorten` - Create short URL
- `GET /url/user/urls` - Get user's URLs
- `DELETE /url/:id` - Delete URL

## Routing

Uses TanStack Router with file-based routing:
- `/` - Home page
- `/auth` - Authentication page
- `/dashboard` - User dashboard (protected)

## Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Custom Components**: Reusable styled components

## Development Guidelines

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use TypeScript types where beneficial
- Keep components small and focused

### State Management
- Use Redux Toolkit for global app state
- Use TanStack Query for server state
- Avoid prop drilling with proper state management

### API Calls
- Use the API service functions in `src/api/`
- Handle loading states and errors properly
- Use React Query for caching and optimistic updates

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder that can be served by any static hosting service.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_API_BASE_URL` | Backend API base URL | http://localhost:5000/api |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing component structure
2. Use proper TypeScript types
3. Add proper error handling
4. Test on multiple browsers
5. Update documentation

## License

ISC License
