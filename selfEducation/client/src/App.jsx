import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import Courses from './pages/Courses';
import CoursePage from './pages/CoursePage';
import Reading from './pages/Reading';
import Login from './pages/Login';
import Register from './pages/Register';

// Захищений роут — якщо не авторизований, редірект на /login
function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="loading">Завантаження...</div>;
  return user ? children : <Navigate to="/login" />;
}

export default function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user && <Navbar />}
      <main className="container">
        <Routes>
          {/* Публічні роути */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Захищені роути */}
          <Route path="/" element={
            <PrivateRoute><Profile /></PrivateRoute>
          } />
          <Route path="/courses" element={
            <PrivateRoute><Courses /></PrivateRoute>
          } />
          <Route path="/courses/:id" element={
            <PrivateRoute><CoursePage /></PrivateRoute>
          } />
          <Route path="/reading" element={
            <PrivateRoute><Reading /></PrivateRoute>
          } />

          {/* Якщо сторінка не знайдена */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
