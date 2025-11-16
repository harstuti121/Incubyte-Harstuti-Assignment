// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");

// const authRoutes = require("./routes/authRoutes");
// const sweetRoutes = require("./routes/sweetRoutes");

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// app.use("/api/auth", authRoutes);
// app.use("/api/sweets", sweetRoutes);

// app.get("/", (req, res) => res.send("Sweet Shop API running"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";

// import authRoutes from "./routes/authRoutes.js";
// import sweetRoutes from "./routes/sweetRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/sweets", sweetRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";
// import sweetRoutes from "./routes/sweetRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/sweets", sweetRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import authRoutes from "./routes/authRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import authRoutes from "./routes/authRoutes.js";

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//   // Optional settings
// }).then(() => console.log("MongoDB Connected"))
//   .catch(err => console.error("MongoDB connection error:", err));

// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoutes.js";

// dotenv.config();

// connectDB();

// const app = express();

// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running...");
// });
// app.use("/api/auth", authRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Routes
import authRoutes from "./routes/authRoutes.js";
import sweetRoutes from "./routes/sweetRoutes.js";

dotenv.config();
connectDB();

const app = express();

// CORS FIX
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Actual API routes
app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetRoutes);  // 🔥 This was missing

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
