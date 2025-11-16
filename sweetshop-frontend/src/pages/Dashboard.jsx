// import React, { useEffect, useState } from "react";
// import { api } from "../services/api";

// export default function Dashboard() {
//   const [sweets, setSweets] = useState([]);

//   const load = async () => {
//     const data = await api.get("/sweets");
//     setSweets(data);
//   };

//   useEffect(() => { load(); }, []);

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Available Sweets 🍬</h2>

//       <div className="row">
//         {sweets.map((s) => (
//           <div className="col-md-4 mb-3" key={s._id}>
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5>{s.name}</h5>
//                 <p>₹{s.price}</p>
//                 <p>Qty: {s.quantity}</p>
//                 <button className="btn btn-success"
//                   disabled={s.quantity === 0}>
//                   {s.quantity === 0 ? "Out of stock" : "Buy"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { api } from "../services/api";

// export default function Dashboard() {
//   const [sweets, setSweets] = useState([]);
//   const [user, setUser] = useState(null);

//   const loadSweets = async () => {
//     const data = await api.get("/sweets");
//     setSweets(data);
//   };

//   const loadProfile = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/profile", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       const data = await res.json();
//       if (res.ok !== false) setUser(data.user);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => { 
//     loadSweets(); 
//     loadProfile(); 
//   }, []);

//   return (
//     <div className="container mt-4">
//       {user && <h2 className="mb-4">Welcome, {user.name}!</h2>}
//       <h3 className="mb-4">Available Sweets 🍬</h3>

//       <div className="row">
//         {sweets.map((s) => (
//           <div className="col-md-4 mb-3" key={s._id}>
//             <div className="card shadow-sm">
//               <div className="card-body">
//                 <h5>{s.name}</h5>
//                 <p>₹{s.price}</p>
//                 <p>Qty: {s.quantity}</p>
//                 <button className="btn btn-success" disabled={s.quantity === 0}>
//                   {s.quantity === 0 ? "Out of stock" : "Buy"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { api as API } from "../services/api";
// import SweetsGrid from "../components/SweetsGrid";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const [sweets, setSweets] = useState([]);
//   const [user, setUser] = useState(null);
//   const [purchased, setPurchased] = useState([]);

//   // Load available sweets
//   const loadSweets = async () => {
//     try {
//       const data = await API.get("/sweets");
//       setSweets(data.data || data); // depending on API response
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load sweets");
//     }
//   };

//   // Load user profile
//   const loadProfile = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) return;

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/profile", {
//         headers: { Authorization: `Bearer ${token}` }
//       });
//       const data = await res.json();
//       if (res.ok !== false) setUser(data.user);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Handle purchase
//   const handlePurchase = async (id) => {
//     try {
//       await API.post(`/sweets/${id}/purchase`);
//       setSweets((prev) =>
//         prev.map((sweet) =>
//           sweet._id === id ? { ...sweet, quantity: sweet.quantity - 1 } : sweet
//         )
//       );
//       const purchasedSweet = sweets.find((s) => s._id === id);
//       setPurchased((prev) => [...prev, purchasedSweet]);
//       toast.success("Sweet purchased successfully!");
//     } catch (err) {
//       console.error(err);
//       toast.error("Purchase failed");
//     }
//   };

//   useEffect(() => {
//     loadSweets();
//     loadProfile();
//   }, []);

//   return (
//     <div className="container mt-4">
//       {user && <h2 className="mb-4">Welcome, {user.name}!</h2>}

//       <h3 className="mb-3">Available Sweets 🍬</h3>
//         <SweetsGrid sweets={sweets || []} onPurchase={handlePurchase} />

//       <hr />

//       <h3 className="mt-4 mb-3">Purchased Sweets 🛒</h3>
//       {purchased.length > 0 ? (
//         <SweetsGrid sweets={purchased} onPurchase={() => {}} />
//       ) : (
//         <p>You haven't purchased anything yet.</p>
//       )}

//       <ToastContainer position="top-right" autoClose={1500} />
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { api as API } from "../services/api";
// import SweetsGrid from "../components/SweetsGrid";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const [sweets, setSweets] = useState([]);
//   const [user, setUser] = useState(null);
//   const [purchased, setPurchased] = useState([]);

//   // Load sweets
//   const loadSweets = async () => {
//     try {
//       const data = await API.get("/sweets");
//       setSweets(data.data || data);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load sweets");
//     }
//   };

//   // Load user from localStorage (for now)
//   const loadProfile = () => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData) setUser(userData);
//   };

//   // Handle purchase
//   const handlePurchase = async (id) => {
//     try {
//       await API.post(`/sweets/${id}/purchase`);
//       const purchasedSweet = sweets.find((s) => s._id === id);
//       setPurchased((prev) => [...prev, purchasedSweet]);
//       setSweets((prev) =>
//         prev.map((sweet) =>
//           sweet._id === id ? { ...sweet, quantity: sweet.quantity - 1 } : sweet
//         )
//       );
//       toast.success(`${purchasedSweet.name} purchased!`);
//     } catch (err) {
//       console.error(err);
//       toast.error("Purchase failed");
//     }
//   };

//   useEffect(() => {
//     loadSweets();
//     loadProfile();
//   }, []);

//   return (
//     <div className="container mt-4">
//       {user && (
//         <h2 className="mb-4 text-center text-primary">
//           Welcome, {user.name}! 🍬
//         </h2>
//       )}

//       <section>
//         <h3 className="mb-3 text-center text-primary">Available Sweets 🍬</h3>
//         {sweets.length > 0 ? (
//         <SweetsGrid sweets={sweets} onPurchase={handlePurchase} />
//         ) : (
//           <p>Loading sweets...</p>
//         )}
//       </section>

//       <hr className="my-4" />

//       <section>
//         <h3 className="mb-3">Purchased Sweets 🛒</h3>
//         {purchased.length > 0 ? (
//           <SweetsGrid sweets={purchased} onPurchase={() => {}} />
//         ) : (
//           <p>You haven't purchased anything yet.</p>
//         )}
//       </section>

//       <ToastContainer position="top-right" autoClose={1500} />
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { api as API } from "../services/api";
// import SweetsGrid from "../components/SweetsGrid";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Dummy images
// const dummySweets = [
//   {
//     _id: "1",
//     name: "Chocolate Truffle",
//     category: "Chocolate",
//     price: 120,
//     quantity: 10,
//     image: "https://images.unsplash.com/photo-1600180758895-3a2f3cfae8fa?auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     _id: "2",
//     name: "Strawberry Cupcake",
//     category: "Cupcake",
//     price: 80,
//     quantity: 5,
//     image: "https://images.unsplash.com/photo-1599785209707-31f048c9c7d0?auto=format&fit=crop&w=500&q=60",
//   },
//   {
//     _id: "3",
//     name: "Macarons Mix",
//     category: "Macaron",
//     price: 150,
//     quantity: 0,
//     image: "https://images.unsplash.com/photo-1604908177523-1d7a04c68b6f?auto=format&fit=crop&w=500&q=60",
//   },
// ];

// export default function Dashboard() {
//   const [sweets, setSweets] = useState([]);
//   const [user, setUser] = useState(null);
//   const [purchased, setPurchased] = useState([]);

//   // Load sweets
//   const loadSweets = async () => {
//     try {
//       const data = await API.get("/sweets");
//       if (data && data.length > 0) setSweets(data);
//       else setSweets(dummySweets); // fallback dummy data
//     } catch (err) {
//       console.error(err);
//       setSweets(dummySweets);
//       toast.error("Failed to load sweets, showing dummy data");
//     }
//   };

//   // Load user from localStorage
//   const loadProfile = () => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData) setUser(userData);
//   };

//   // Purchase a sweet
//   const handlePurchase = async (id) => {
//     const sweet = sweets.find((s) => s._id === id);
//     if (!sweet || sweet.quantity === 0) return;

//     try {
//       await API.post(`/sweets/${id}/purchase`); // call backend
//       setSweets((prev) =>
//         prev.map((s) =>
//           s._id === id ? { ...s, quantity: s.quantity - 1 } : s
//         )
//       );
//       setPurchased((prev) => [...prev, sweet]);
//       toast.success(`${sweet.name} purchased! 🍬`);
//     } catch (err) {
//       console.error(err);
//       toast.error("Purchase failed");
//     }
//   };
//   const handleUpdateQuantity = async (id, newQty) => {
//   if (newQty < 0) return;

//   try {
//     // Optional: Call backend to update quantity if admin
//     // await API.put(`/sweets/${id}`, { quantity: newQty });

//     setSweets((prev) =>
//       prev.map((s) => (s._id === id ? { ...s, quantity: newQty } : s))
//     );
//   } catch (err) {
//     console.error(err);
//     toast.error("Failed to update quantity");
//   }
// };
//   useEffect(() => {
//     loadSweets();
//     loadProfile();
//   }, []);

//   return (
//     <div className="container mt-4">
//       {user && (
//         <h2 className="mb-4 text-center text-primary">
//           Welcome, {user.name}! 🍬
//         </h2>
//       )}

//       <section>
//         <h3 className="mb-3 text-center text-success">Available Sweets</h3>
//         <SweetsGrid sweets={sweets} onPurchase={handlePurchase} onUpdateQuantity={handleUpdateQuantity}/>
//       </section>

//       <hr className="my-4" />

//       <section>
//         <h3 className="mb-3 text-center text-warning">Purchased Sweets 🛒</h3>
//         {purchased.length > 0 ? (
//           <SweetsGrid sweets={purchased} onPurchase={() => {}} />
//         ) : (
//           <p className="text-center">You haven't purchased anything yet.</p>
//         )}
//       </section>

//       <ToastContainer position="top-right" autoClose={1500} />
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { api as API } from "../services/api";
// import SweetsGrid from "../components/SweetsGrid";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const [sweets, setSweets] = useState([]);
//   const [user, setUser] = useState(null);
//   const [purchased, setPurchased] = useState([]);

//   // Load sweets from backend
//   const loadSweets = async () => {
//     try {
//       const data = await API.get("/sweets");
//       setSweets(data.data || data);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load sweets");
//     }
//   };

//   // Load user from localStorage
//   const loadProfile = () => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData) setUser(userData);
//   };

//   // Handle purchase
//   const handlePurchase = async (id) => {
//     try {
//       await API.post(`/sweets/purchase/${id}`);
//       const purchasedSweet = sweets.find((s) => s._id === id);
//       setPurchased((prev) => [...prev, purchasedSweet]);
//       setSweets((prev) =>
//         prev.map((sweet) =>
//           sweet._id === id ? { ...sweet, quantity: sweet.quantity - 1 } : sweet
//         )
//       );
//       toast.success(`${purchasedSweet.name} purchased!`);
//     } catch (err) {
//       console.error(err);
//       toast.error("Purchase failed");
//     }
//   };

//   useEffect(() => {
//     loadSweets();
//     loadProfile();
//   }, []);

//   return (
//     <div className="container mt-4">
//       {user && (
//         <h2 className="mb-4 text-center text-primary">
//           Welcome, {user.name}! 🍬
//         </h2>
//       )}

//       <section>
//         <h3 className="mb-3 text-center text-primary">Available Sweets 🍬</h3>
//         {sweets.length > 0 ? (
//           <SweetsGrid sweets={sweets} onPurchase={handlePurchase} />
//         ) : (
//           <p className="text-center">Loading sweets...</p>
//         )}
//       </section>

//       <hr className="my-4" />

//       <section>
//         <h3 className="mb-3 text-center text-success">Purchased Sweets 🛒</h3>
//         {purchased.length > 0 ? (
//           <SweetsGrid sweets={purchased} onPurchase={() => {}} />
//         ) : (
//           <p className="text-center">You haven't purchased anything yet.</p>
//         )}
//       </section>

//       <ToastContainer position="top-right" autoClose={1500} />
//     </div>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { api as API } from "../services/api";
// import SweetsGrid from "../components/SweetsGrid";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Dashboard() {
//   const [sweets, setSweets] = useState([]);
//   const [user, setUser] = useState(null);
//   const [purchased, setPurchased] = useState([]);

//   const loadSweets = async () => {
//     try {
//       const data = await API.get("/sweets");
//       setSweets(data.data || data);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load sweets");
//     }
//   };

//   const loadProfile = () => {
//     const userData = JSON.parse(localStorage.getItem("user"));
//     if (userData) setUser(userData);
//   };

//   const handlePurchase = async (id) => {
//     try {
//       await API.post(`/sweets/purchase/${id}`);
//       const purchasedSweet = sweets.find((s) => s._id === id);
//       setPurchased((prev) => [...prev, purchasedSweet]);
//       setSweets((prev) =>
//         prev.map((s) =>
//           s._id === id ? { ...s, quantity: s.quantity - 1 } : s
//         )
//       );
//       toast.success(`${purchasedSweet.name} purchased!`);
//     } catch (err) {
//       console.error(err);
//       toast.error("Purchase failed");
//     }
//   };

//   useEffect(() => {
//     loadSweets();
//     loadProfile();
//   }, []);

//   return (
//     <div className="container mt-4">
//       {user && <h2 className="mb-4 text-center">Welcome, {user.name} 🍬</h2>}

//       <h3 className="mb-3 text-center">Available Sweets 🍬</h3>
//       <SweetsGrid sweets={sweets} onPurchase={handlePurchase} />

//       <hr className="my-4" />

//       <h3 className="mb-3 text-center">Purchased Sweets 🛒</h3>
//       {purchased.length > 0 ? (
//         <SweetsGrid sweets={purchased} onPurchase={() => {}} />
//       ) : (
//         <p className="text-center">You haven't purchased anything yet.</p>
//       )}

//       <ToastContainer position="top-right" autoClose={1500} />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { api as API } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Dashboard() {
  const [sweets, setSweets] = useState([]);
  const [user, setUser] = useState(null);
  const [purchased, setPurchased] = useState([]);

  // Load sweets from backend
  const loadSweets = async () => {
    try {
      const data = await API.get("/sweets");
      setSweets(data.data || data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load sweets");
    }
  };

  // Load user from localStorage
  const loadProfile = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) setUser(userData);
  };

  // Handle purchase
  const handlePurchase = async (id) => {
    try {
      await API.post(`/sweets/purchase/${id}`);
      const purchasedSweet = sweets.find((s) => s._id === id);
      setPurchased((prev) => [...prev, purchasedSweet]);
      setSweets((prev) =>
        prev.map((sweet) =>
          sweet._id === id ? { ...sweet, quantity: sweet.quantity - 1 } : sweet
        )
      );
      toast.success(`${purchasedSweet.name} purchased!`);
    } catch (err) {
      console.error(err);
      toast.error("Purchase failed");
    }
  };

  useEffect(() => {
    loadSweets();
    loadProfile();
  }, []);

  // Render a sweet card
  const SweetCard = ({ sweet, onPurchase, isPurchased }) => (
    <div className="col-md-4 mb-3">
      <div className="card shadow-sm h-100">
        {sweet.image ? (
          <img
            src={sweet.image}
            className="card-img-top"
            alt={sweet.name}
            style={{ height: "200px", objectFit: "cover" }}
          />
        ) : (
          <div
            className="bg-secondary text-white d-flex align-items-center justify-content-center"
            style={{ height: "200px" }}
          >
            No Image
          </div>
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{sweet.name}</h5>
          <p className="card-text">Category: {sweet.category}</p>
          <p className="card-text">Price: ₹{sweet.price}</p>
          {!isPurchased && (
            <>
              <p className="card-text">Qty: {sweet.quantity}</p>
              <button
                className="btn btn-success mt-auto"
                disabled={sweet.quantity === 0}
                onClick={() => onPurchase(sweet._id)}
              >
                {sweet.quantity === 0 ? "Out of Stock" : "Buy"}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mt-4">
      {user && (
        <h2 className="mb-4 text-center text-primary">
          Welcome, {user.name}! 🍬
        </h2>
      )}

      <section>
        <h3 className="mb-3 text-center text-primary">Available Sweets 🍬</h3>
        <div className="row">
          {sweets.length > 0 ? (
            sweets.map((sweet) => (
              <SweetCard
                key={sweet._id}
                sweet={sweet}
                onPurchase={handlePurchase}
                isPurchased={false}
              />
            ))
          ) : (
            <p className="text-center">Loading sweets...</p>
          )}
        </div>
      </section>

      <hr className="my-4" />

      <section>
        <h3 className="mb-3 text-primary">Purchased Sweets 🛒</h3>
        <div className="row">
          {purchased.length > 0 ? (
            purchased.map((sweet, idx) => (
              <SweetCard
                key={idx}
                sweet={sweet}
                onPurchase={() => {}}
                isPurchased={true}
              />
            ))
          ) : (
            <p>You haven't purchased anything yet.</p>
          )}
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
}
