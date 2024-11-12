
import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => Boolean(localStorage.getItem('user'))

const ProtectedRoute = () => {
  return useAuth() ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
