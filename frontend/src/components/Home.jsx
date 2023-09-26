import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-950 text-white">
      <h1 className="text-3xl font-bold mb-20 text-green-600">
        Welcome to the Health Prediction Website
      </h1>
      <p className="text-xl mx-36 text-gray-600 mb-10">
        Use this app to predict if you have diabetes or heart disease based on
        your health data.
      </p>
      <div>
        <h2>Choose a Prediction:</h2>
        <Link to="/heart">
          <button>Heart Disease Prediction</button>
        </Link>
        <Link to="/diabetes">
          <button>Diabetes Prediction</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
