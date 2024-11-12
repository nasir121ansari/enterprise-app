# enterprise-app

# Features
Data Fetching: Fetches data using Redux Toolkit and Axios.
Protected Routes: Mock authentication for protected routes.
Dynamic Routes: Fetch data for dynamic routes like /post/:id.
Lazy Loading: Components are loaded on-demand for better performance.
Styling: Tailwind CSS for responsive and modular styling

# Folder Structure
src/
├── app/            # Redux store setup
├── components/     # Reusable components 
├── features/       # Redux slices for managing features (e.g., posts)
├── pages/          # Page components (Home, Login, etc.)
├── routes/         # Route protection and dynamic routing
├── hooks/          # Custom hooks
├── types/          # TypeScript types
├── utils/          # Helper functions
└── App.tsx         # Main application entry point


# Clone the repo:
git 
cd scalable-frontend-setup

# Install dependencies:
npm install


# Run the app:
npm run dev


# Key Decisions
Vite for fast development and build performance.
React Router for routing with support for dynamic and protected routes.
Redux Toolkit for modular state management.
Tailwind CSS for scalable and responsive design.


# Future Improvements
Replace mock authentication with real authentication.
Improve error handling and implement caching for API calls.




 
