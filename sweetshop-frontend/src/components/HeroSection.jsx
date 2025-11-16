// import React from "react";

// const HeroSection = () => {
//   return (
//     <div className="jumbotron text-center bg-light p-5 mb-4">
//       <h1 className="display-4">Welcome to SweetShop!</h1>
//       <p className="lead">Delicious cakes and sweets delivered to your doorstep</p>
//       <hr className="my-4" />
//       <p>Explore our wide range of treats and satisfy your sweet cravings</p>
//     </div>
//   );
// };

// export default HeroSection;


import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero-section text-center text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "300px",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1599785209707-c5d79f1e43de?auto=format&fit=crop&w=1500&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 style={{ fontWeight: "700" }}>Welcome to SweetShop 🍬</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Browse, enjoy, and purchase your favorite sweets!
      </p>
    </div>
  );
};

export default HeroSection;
