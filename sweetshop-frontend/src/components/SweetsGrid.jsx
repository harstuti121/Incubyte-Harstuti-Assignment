// import React, { useState } from "react";
// import SweetCard from "./SweetCard";
// import sweetsData from "../data/sweet";

// const SweetsGrid = () => {
//   const [sweets, setSweets] = useState(sweetsData);

//   const handlePurchase = (id) => {
//     const updatedSweets = sweets.map(sweet =>
//       sweet.id === id ? { ...sweet, quantity: sweet.quantity - 1 } : sweet
//     );
//     setSweets(updatedSweets);
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {sweets.map(sweet => (
//           <div key={sweet.id} className="col-md-4">
//             <SweetCard sweet={sweet} onPurchase={handlePurchase} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SweetsGrid;


// import React from "react";

// const SweetsGrid = ({ sweets, onPurchase }) => {
//   return (
//     <div className="row">
//       {sweets.map((sweet) => (
//         <div key={sweet._id} className="col-md-4 mb-3">
//           <SweetCard sweet={sweet} onPurchase={onPurchase} />
//         </div>
//       ))}
//     </div>
//   );
// };

// const SweetsGrid = ({ sweets = [], onPurchase }) => {
//   return (
//     <div className="row">
//       {sweets.map((sweet) => (
//         <div className="col-md-4 mb-3" key={sweet._id}>
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h5>{sweet.name}</h5>
//               <p>₹{sweet.price}</p>
//               <p>Qty: {sweet.quantity}</p>
//               <button
//                 className="btn btn-success"
//                 disabled={sweet.quantity === 0}
//                 onClick={() => onPurchase(sweet._id)}
//               >
//                 {sweet.quantity === 0 ? "Out of stock" : "Buy"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SweetsGrid;


// src/components/SweetsGrid.jsx
// import React from "react";
// import SweetCard from "./SweetCard";

// const SweetsGrid = ({ sweets = [], onPurchase }) => {
//   return (
//     <div className="row">
//       {sweets.map((sweet) => (
//         <div className="col-md-4 mb-4" key={sweet._id}>
//           <SweetCard sweet={sweet} onPurchase={onPurchase} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SweetsGrid;


// import React from "react";
// import SweetCard from "./SweetCard";

// const SweetsGrid = ({ sweets = [], onPurchase }) => {
//   return (
//     <div className="row">
//       {sweets.map((sweet) => (
//         <div className="col-md-4 col-sm-6 mb-4" key={sweet._id}>
//           <SweetCard sweet={sweet} onPurchase={onPurchase} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SweetsGrid;
// import React from "react";

// export default function SweetsGrid({ sweets, onPurchase, onUpdateQuantity }) {
//   if (!sweets || sweets.length === 0) return <p>No sweets available.</p>;

//   return (
//     <div className="row">
//       {sweets.map((sweet) => (
//         <div className="col-md-4 mb-4" key={sweet._id || sweet.id}>
//           <div className="card shadow-sm h-100">
//             <img
//               src={sweet.image}
//               className="card-img-top"
//               alt={sweet.name}
//               style={{ height: "200px", objectFit: "cover" }}
//             />
//             <div className="card-body d-flex flex-column">
//               <h5 className="card-title">{sweet.name}</h5>
//               <p className="card-text mb-1">Category: {sweet.category}</p>
//               <p className="card-text mb-2">Price: ₹{sweet.price}</p>
//               <div className="d-flex align-items-center mb-3">
//                 <button
//                   className="btn btn-sm btn-outline-danger me-2"
//                   onClick={() => onUpdateQuantity(sweet._id, sweet.quantity - 1)}
//                   disabled={sweet.quantity === 0}
//                 >
//                   -
//                 </button>
//                 <span>{sweet.quantity}</span>
//                 <button
//                   className="btn btn-sm btn-outline-success ms-2"
//                   onClick={() => onUpdateQuantity(sweet._id, sweet.quantity + 1)}
//                 >
//                   +
//                 </button>
//               </div>
//               <button
//                 className="btn btn-primary mt-auto"
//                 disabled={sweet.quantity === 0}
//                 onClick={() => onPurchase && onPurchase(sweet._id)}
//               >
//                 {sweet.quantity === 0 ? "Out of stock" : "Buy 🍬"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



// import React from "react";

// export default function SweetsGrid({ sweets, onPurchase }) {
//   if (!sweets || sweets.length === 0)
//     return <p className="text-center">No sweets available.</p>;

//   return (
//     <div className="row">
//       {sweets.map((sweet) => (
//         <div className="col-md-4 mb-4" key={sweet._id}>
//           <div className="card shadow-sm h-100">
//             <img
//               src={sweet.imageURL || "https://via.placeholder.com/200x150"}
//               className="card-img-top"
//               alt={sweet.name}
//               style={{ height: "150px", objectFit: "cover" }}
//             />
//             <div className="card-body d-flex flex-column">
//               <h5 className="card-title">{sweet.name}</h5>
//               <p className="card-text mb-1">Category: {sweet.category}</p>
//               <p className="card-text mb-1">Price: ₹{sweet.price}</p>
//               <p className="card-text mb-2">Qty: {sweet.quantity}</p>
//               <button
//                 className="btn btn-primary mt-auto"
//                 disabled={sweet.quantity === 0}
//                 onClick={() => onPurchase(sweet._id)}
//               >
//                 {sweet.quantity === 0 ? "Out of stock" : "Buy"}
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React from "react";

export default function SweetsGrid({ sweets, onPurchase }) {
  if (!sweets || sweets.length === 0) return <p>No sweets available.</p>;

  return (
    <div className="row">
      {sweets.map((sweet) => (
        <div className="col-md-4 mb-3" key={sweet._id}>
          <div className="card shadow-sm">
            {sweet.image && (
              <img
                src={sweet.image}
                className="card-img-top"
                alt={sweet.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
            )}
            <div className="card-body">
              <h5 className="card-title">{sweet.name}</h5>
              <p className="card-text">Category: {sweet.category}</p>
              <p className="card-text">Price: ₹{sweet.price}</p>
              <p className="card-text">Qty: {sweet.quantity}</p>
              <button
                className="btn btn-primary w-100"
                onClick={() => onPurchase(sweet._id)}
                disabled={sweet.quantity === 0}
              >
                {sweet.quantity === 0 ? "Out of Stock" : "Buy"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
