
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/posts" className="text-white hover:underline">
            Posts
          </Link>
        </li>
        <li>
          <Link to="/protected" className="text-white hover:underline">
            Protected
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
