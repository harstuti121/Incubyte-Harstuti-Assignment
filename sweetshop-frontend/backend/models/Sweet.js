// // backend/models/Sweet.js
// import mongoose from "mongoose";

// const sweetSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   category: { type: String, required: true },
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
//   img: { type: String }
// }, { timestamps: true });

// const Sweet = mongoose.model("Sweet", sweetSchema);
// export default Sweet; 


// models/Sweet.js
import mongoose from "mongoose";

const sweetSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
}, { timestamps: true });

const Sweet = mongoose.model("Sweet", sweetSchema);
export default Sweet;
