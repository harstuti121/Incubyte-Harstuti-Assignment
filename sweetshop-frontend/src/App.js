import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import SweetGrid from "./components/SweetsGrid.jsx";
import LoginModal from "./pages/LoginModal.jsx";
import RegisterModal from "./pages/RegisterModal.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Handlers for Navbar
  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };
  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  // Update user after login/register
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <Router>
      <Navbar
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
        user={user}
        setUser={setUser}
      />

      <Routes>
        <Route path="/" element={<SweetGrid />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <LoginModal
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <RegisterModal
        show={showRegister}
        onClose={() => setShowRegister(false)}
        onRegisterSuccess={handleLoginSuccess} // ✅ pass function here
      />
    </Router>
  );
}

export default App;
