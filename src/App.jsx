import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
const App = () => {
  return (
    <div
      className="w-100 d-flex flex-column align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="pt-5" style={{ fontSize: "4rem" }}>
        Weather App
      </h1>
      <div
        className="container-fluid main w-50 mt-4 rounded-4 pt-3"
        style={{ height: "55vh" }}
      >
        <Navbar />
        <HomePage />
      </div>
    </div>
  );
};

export default App;
