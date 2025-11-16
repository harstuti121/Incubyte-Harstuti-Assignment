// import React, { useState } from "react";
// import Navbar from "../components/Navbar.jsx";
// import RegisterModal from "./RegisterModal.jsx";
// import LoginModal from "./LoginModal.jsx";
// import Dashboard from "./Dashboard.jsx";

// export default function Home() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);

//   return (
//     <div>
//       <Navbar
//         onLoginClick={() => {
//           setShowLogin(true);
//           setShowRegister(false);
//         }}
//         onRegisterClick={() => {
//           setShowRegister(true);
//           setShowLogin(false);
//         }}
//       />

//       {showLogin && (
//         <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
//       )}

//       {showRegister && (
//         <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} />
//       )}

//       <div className="container mt-4">
//         <Dashboard />
//       </div>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import API from "../services/api";
// import SweetsGrid from "../components/SweetsGrid";

// const Home = () => {
//   const [sweets, setSweets] = useState([]);
//   const [search, setSearch] = useState("");

//   // Fetch sweets from backend
//   useEffect(() => {
//     const fetchSweets = async () => {
//       try {
//         const res = await API.get("/sweets");
//         setSweets(res.data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchSweets();
//   }, []);

//   // Filter sweets by search input
//   const filteredSweets = sweets.filter((sweet) =>
//     sweet.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // Purchase function
//   const handlePurchase = async (id) => {
//     try {
//       await API.post(`/sweets/${id}/purchase`);
//       // Update quantity in frontend
//       setSweets((prev) =>
//         prev.map((sweet) =>
//           sweet._id === id ? { ...sweet, quantity: sweet.quantity - 1 } : sweet
//         )
//       );
//       alert("Sweet purchased successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Purchase failed");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-3">Available Sweets</h2>
//       <input
//         type="text"
//         className="form-control mb-3"
//         placeholder="Search sweets..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <SweetsGrid sweets={filteredSweets} onPurchase={handlePurchase} />
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect } from "react";
import API from "../services/api";
import SweetsGrid from "../components/SweetsGrid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const [sweets, setSweets] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  // Fetch sweets from backend
  useEffect(() => {
    const fetchSweets = async () => {
      try {
        const res = await API.get("/sweets");
        setSweets(res.data);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load sweets");
      }
    };
    fetchSweets();
  }, []);

  // Purchase function
  const handlePurchase = async (id) => {
    try {
      await API.post(`/sweets/${id}/purchase`);
      setSweets((prev) =>
        prev.map((sweet) =>
          sweet._id === id ? { ...sweet, quantity: sweet.quantity - 1 } : sweet
        )
      );
      toast.success("Sweet purchased successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Purchase failed");
    }
  };

  // Filter by search and category
  const filteredSweets = sweets
    .filter((sweet) =>
      sweet.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((sweet) => category === "All" || sweet.category === category);

  // Sort by price
  const sortedSweets = [...filteredSweets].sort((a, b) => {
    if (sort === "low") return a.price - b.price;
    if (sort === "high") return b.price - a.price;
    return 0;
  });

  // Extract unique categories for filter dropdown
  const categories = ["All", ...new Set(sweets.map((s) => s.category))];

  return (
    <div>
      <HeroSection />
      <div className="container mt-4">
        <h2 className="mb-3">Available Sweets</h2>

        <div className="row mb-3">
          <div className="col-md-6 mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Search sweets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="col-md-3 mb-2">
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3 mb-2">
            <select
              className="form-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="default">Sort by</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <SweetsGrid sweets={sortedSweets} onPurchase={handlePurchase} />
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </div>
  );
};

export default Home;
