import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
const App = () => {
  return (
    <div
      style={{
        background: "#E5E7EB",
      }}
      className="p-4"
    >
      <div
        className="w-100  rounded-4 d-flex flex-column align-items-center "
        style={{
          height: "95vh",
          background: "#0E0E0E",
        }}
      >
        {" "}
        <p
          style={{
            background: "#E5E7EB",
            color: "#E5E7EB",
            paddingTop: "10px",
            paddingInline: "50px",
            fontSize: "0.3rem",
          }}
          className="w-10 rounded-bottom"
        >
          gffgff
        </p>
        <p
          style={{ fontSize: "4rem", color: "#FFFFFF" }}
          className="pt-4 fw-bold d-flex justify-content-center align-items-center "
        >
          Weather App
        </p>
        <div
          className="container-fluid main  w-sm-75 w-md-50 mt-4 rounded-4 pt-4"
          style={{ height: "55vh" }}
        >
          <Navbar />
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default App;
