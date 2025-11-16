import Sweet from "../models/Sweet.js";

export const createSweet = async (req, res) => {
  const { name, category, price, quantity } = req.body;
  const sweet = await Sweet.create({ name, category, price, quantity });
  res.status(201).json(sweet);
};

export const getSweets = async (req, res) => {
  const sweets = await Sweet.find({});
  res.json(sweets);
};

export const searchSweets = async (req, res) => {
  const { q, minPrice, maxPrice } = req.query;
  const query = {};
  if (q) query.name = { $regex: q, $options: "i" };
  if (minPrice || maxPrice) query.price = {};
  if (minPrice) query.price.$gte = Number(minPrice);
  if (maxPrice) query.price.$lte = Number(maxPrice);
  const sweets = await Sweet.find(query);
  res.json(sweets);
};

export const updateSweet = async (req, res) => {
  const sweet = await Sweet.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(sweet);
};

export const deleteSweet = async (req, res) => {
  await Sweet.findByIdAndDelete(req.params.id);
  res.json({ message: "Sweet deleted" });
};

export const purchaseSweet = async (req, res) => {
  const sweet = await Sweet.findById(req.params.id);
  if (!sweet || sweet.quantity <= 0) return res.status(400).json({ message: "Not available" });
  sweet.quantity -= 1;
  await sweet.save();
  res.json(sweet);
};

export const restockSweet = async (req, res) => {
  const { quantity } = req.body;
  const sweet = await Sweet.findById(req.params.id);
  sweet.quantity += Number(quantity);
  await sweet.save();
  res.json(sweet);
};
