import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('user', 'loggedIn') 
    navigate('/protected')
  }

  return (
    <div className="p-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleLogin}>
        Login
      </button>
    </div>
  )
}

export default Login
