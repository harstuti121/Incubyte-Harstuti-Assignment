// import React from "react";

// const SweetCard = ({ sweet, onPurchase }) => {
//   return (
//     <div className="card m-2" style={{ width: "18rem" }}>
//       <img src={sweet.image} className="card-img-top" alt={sweet.name} />
//       <div className="card-body">
//         <h5 className="card-title">{sweet.name}</h5>
//         <p className="card-text">Category: {sweet.category}</p>
//         <p className="card-text">Price: ₹{sweet.price}</p>
//         <p className="card-text">Quantity: {sweet.quantity}</p>
//         <button
//           className="btn btn-success"
//           disabled={sweet.quantity === 0}
//           onClick={() => onPurchase(sweet.id)}
//         >
//           {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SweetCard;


// import React from "react";

// const SweetCard = ({ sweet, onPurchase }) => {
//   return (
//     <div className="card h-100 shadow-sm">
//       <img
//         src={sweet.image}
//         className="card-img-top"
//         alt={sweet.name}
//         style={{ height: "200px", objectFit: "cover" }}
//       />
//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title">{sweet.name}</h5>
//         <p className="card-text">Category: {sweet.category}</p>
//         <p className="card-text">Price: ${sweet.price}</p>
//         <p className="card-text">Quantity: {sweet.quantity}</p>
//         <button
//           className="btn btn-primary mt-auto"
//           disabled={sweet.quantity === 0}
//           onClick={() => onPurchase(sweet._id)}
//         >
//           {sweet.quantity === 0 ? "Out of Stock" : "Purchase"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SweetCard;


// src/components/SweetCard.jsx
// import React from "react";

// const SweetCard = ({ sweet, onPurchase }) => {
//   return (
//     <div className="card shadow-sm h-100">
//       <img
//         src={sweet.image || "https://via.placeholder.com/150"}
//         className="card-img-top"
//         alt={sweet.name}
//       />
//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title">{sweet.name}</h5>
//         <p className="card-text mb-1">Category: {sweet.category}</p>
//         <p className="card-text mb-2">Price: ₹{sweet.price}</p>
//         <p className="card-text mb-2">Qty: {sweet.quantity}</p>
//         <button
//           className="btn btn-success mt-auto"
//           disabled={sweet.quantity === 0}
//           onClick={() => onPurchase(sweet._id)}
//         >
//           {sweet.quantity === 0 ? "Out of stock" : "Buy"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SweetCard;


// src/components/SweetCard.jsx
import React from "react";

const SweetCard = ({ sweet, onPurchase }) => {
  return (
    <div className="card shadow-sm h-100 border-0" style={{ borderRadius: "15px" }}>
      <img
        src={sweet.image || "https://images.unsplash.com/photo-1599785209707-d49e7f52fa3b?auto=format&fit=crop&w=400&q=80"}
        className="card-img-top"
        alt={sweet.name}
        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title text-primary">{sweet.name}</h5>
        <p className="card-text text-muted mb-1">Category: {sweet.category}</p>
        <p className="card-text fw-bold mb-2">Price: ₹{sweet.price}</p>
        <p className="card-text mb-2">
          {sweet.quantity > 0 ? (
            <span className="badge bg-success">{sweet.quantity} in stock</span>
          ) : (
            <span className="badge bg-danger">Out of stock</span>
          )}
        </p>
        <button
          className={`btn ${sweet.quantity === 0 ? "btn-secondary" : "btn-warning"} mt-auto`}
          disabled={sweet.quantity === 0}
          onClick={() => onPurchase(sweet._id)}
        >
          {sweet.quantity === 0 ? "Out of stock" : "Buy 🍭"}
        </button>
      </div>
    </div>
  );
};

export default SweetCard;
