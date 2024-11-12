import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import ProtectedRoute from './routes/ProtectedRoute'
import Navbar from './components/Navbar'


const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const ProtectedPage = lazy(() => import('./pages/ProtectedPage'))

const App = () => (
  <Router>
    <Navbar />
    <Suspense fallback={<div>Loading...</div>}> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/protected" element={<ProtectedPage />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
)

export default App
