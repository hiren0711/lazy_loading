import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Lazily loaded components
const Home = React.lazy(() => import("./pages/Home"));
const Product = React.lazy(() => import("./pages/Product"));

// Main App component
function App() {
  return (
    // Set up BrowserRouter for handling routes
    <BrowserRouter>
      {/* Define routes using the Routes component */}
      <Routes>
        {/* Route for the Home page */}
        <Route
          index
          path="/"
          // Element to be rendered for the Home route
          element={
            <>
              {/* Header component for the Home page */}
              <Header />
              {/* Container to center content vertically and horizontally */}
              <div
                className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "85vh" }}
              >
                {/* Use React.Suspense for lazy loading the Home component */}
                <Suspense
                  fallback={
                    // Fallback UI while Home component is being loaded
                    <>
                      <div class="text-center">
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </>
                  }
                >
                  {/* Render the Home component */}
                  <Home />
                </Suspense>
              </div>
              {/* Footer component for the Home page */}
              <Footer />
            </>
          }
        ></Route>
        {/* Route for the Product page */}
        <Route
          path="/product"
          // Element to be rendered for the Product route
          element={
            <>
              {/* Header component for the Product page */}
              <Header />
              {/* Container to center content vertically and horizontally */}
              <div
                className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "85vh" }}
              >
                {/* Use React.Suspense for lazy loading the Product component */}
                <Suspense
                  fallback={
                    // Fallback UI while Product component is being loaded
                    <>
                      <div class="text-center">
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </>
                  }
                >
                  {/* Render the Product component */}
                  <Product />
                </Suspense>
              </div>
              {/* Footer component for the Product page */}
              <Footer />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;