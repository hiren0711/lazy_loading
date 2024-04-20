import React from "react";

// Functional component for the Home page
function Home() {
  return (
    // Container with flexbox to center content vertically and horizontally
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "85vh" }}
    >
      {/* Heading for the Home page */}
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;