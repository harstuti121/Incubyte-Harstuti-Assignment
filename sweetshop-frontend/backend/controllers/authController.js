// const User = require("../models/User");
// const jwt = require("jsonwebtoken");

// const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

// exports.register = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if(existingUser) return res.status(400).json({ message: "Email already registered" });

//     const user = await User.create({ name, email, password });
//     res.status(201).json({ 
//       _id: user._id, name: user.name, email: user.email, role: user.role,
//       token: generateToken(user._id)
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if(!user || !(await user.matchPassword(password))) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }
//     res.json({
//       _id: user._id, name: user.name, email: user.email, role: user.role,
//       token: generateToken(user._id)
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const register = async (req, res) => {
//   try {
//     const { name, email, password, role } = req.body;

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Email already exists" });

//     const hashed = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashed,
//       role: role || "user"
//     });

//     res.status(201).json({ message: "User registered", user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid email or password" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: "Invalid email or password" });

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({ message: "Login successful", token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// import User from "../models/User.js";
// import jwt from "jsonwebtoken";

// const generateToken = (user) => {
//   return jwt.sign(
//     { id: user._id, isAdmin: user.isAdmin },
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );
// };

// export const register = async (req, res) => {
//   try {
//     const { name, email, password, isAdmin } = req.body;
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Email already exists" });

//     const user = await User.create({
//       name,
//       email,
//       password,
//       isAdmin: isAdmin || false,
//     });

//     const token = generateToken(user);

//     res.status(201).json({
//       message: "User registered successfully",
//       user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin },
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid email or password" });

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

//     const token = generateToken(user);

//     res.status(200).json({
//       message: "Login successful",
//       user: { id: user._id, name: user.name, email: user.email, isAdmin: user.isAdmin },
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// import User from "../models/User.js";
// import jwt from "jsonwebtoken";

// const generateToken = (user) =>
//   jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "1d" });

// export const register = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Email already exists" });

//     const user = await User.create({ name, email, password });
//     const token = generateToken(user);

//     res.status(201).json({ user: { id: user._id, name, email }, token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid email or password" });

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

//     const token = generateToken(user);
//     res.status(200).json({ user: { id: user._id, name: user.name, email }, token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// import User from "../models/User.js";

// export const register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: "Email already exists" });

//     const user = await User.create({ name, email, password });

//     res.status(201).json({ message: "User registered", user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user || user.password !== password) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     res.json({ message: "Login successful", user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// import User from "../models/User.js";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// export const register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check existing user
//     const existing = await User.findOne({ email });
//     if (existing)
//       return res.status(400).json({ message: "Email already exists" });

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create user
//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     // Create JWT
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res.status(201).json({
//       message: "User registered successfully",
//       token,
//       user: { id: user._id, name: user.name, email: user.email },
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check user
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     // Compare hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     // Generate token
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });

//     res.json({
//       message: "Login successful",
//       token,
//       user: { id: user._id, name: user.name, email: user.email },
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// import User from "../models/User.js";
// import generateToken from "../utils/generateToken.js";
// import bcrypt from "bcryptjs";

// export const register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     const existing = await User.findOne({ email });
//     if (existing)
//       return res.status(400).json({ message: "Email already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({
//       message: "User registered",
//       token: generateToken(user._id),
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user)
//       return res.status(400).json({ message: "Invalid email or password" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid email or password" });

//     res.json({
//       message: "Login successful",
//       token: generateToken(user._id),
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const user = await User.create({ name, email, password });

    res.status(201).json({
      message: "User registered",
      token: generateToken(user._id),
      user
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user || user.password !== password) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     res.json({
//       message: "Login successful",
//       token: generateToken(user._id),
//       user
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.json({
      message: "Login successful",
      token: generateToken(user._id),
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};