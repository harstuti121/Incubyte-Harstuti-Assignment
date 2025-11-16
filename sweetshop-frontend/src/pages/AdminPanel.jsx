// src/pages/AdminPanel.jsx
import React, { useState } from "react";
import { api as API } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminPanel() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please login as admin");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/sweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(`${data.name} added successfully!`);
        // Reset form
        setFormData({ name: "", category: "", price: "", quantity: "", image: "" });
      } else {
        toast.error(data.message || "Failed to add sweet");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center text-primary">Admin Panel 🍬</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        <input
          type="text"
          name="name"
          placeholder="Sweet Name"
          value={formData.name}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="form-control mb-3"
        />

        <button type="submit" className="btn btn-primary w-100">
          Add Sweet
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
}
