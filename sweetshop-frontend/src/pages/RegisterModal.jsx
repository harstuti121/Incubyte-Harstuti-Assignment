import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const RegisterModal = ({ show, onClose, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Registered successfully!");
        if (data.user) {
          onRegisterSuccess(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
        }
        setTimeout(() => {
          onClose();
          navigate("/dashboard");
        }, 1200);
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      setError("Server error. Try again.");
      console.error(err);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      setSuccess("Google Signup Successful!");
      const userData = { name: user.displayName, email: user.email };
      onRegisterSuccess(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", user.accessToken);

      setTimeout(() => {
        onClose();
        navigate("/dashboard");
      }, 1200);
    } catch (err) {
      setError("Google Signup Failed");
      console.error(err);
    }
  };

  if (!show) return null;

  return (
    <div
      className="modal-backdrop-custom"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1050,
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <div className="modal-content p-3 position-relative">
          <span
            onClick={onClose}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: "10px",
              right: "15px",
              fontSize: "24px",
            }}
          >
            &times;
          </span>

          <h4 className="text-center mb-3">Create Account</h4>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control mb-2"
            />
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>

          <hr />

          <button
            className="btn btn-danger w-100 mt-2"
            onClick={handleGoogleSignup}
          >
            <i className="bi bi-google"></i> &nbsp; Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
