import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <span className="logo">📚 LearnSpace</span>
      <div className="nav-links">
        <NavLink to="/">Профіль</NavLink>
        <NavLink to="/courses">Курси</NavLink>
        <NavLink to="/reading">Читання</NavLink>
        <span style={{ color: '#aaa', fontSize: '0.9rem' }}>
          {user?.displayName || user?.username}
        </span>
        <button onClick={logout}>Вийти</button>
      </div>
    </nav>
  );
}
