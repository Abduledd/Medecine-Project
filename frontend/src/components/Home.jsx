import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen text-white h-screen">
      <h1 className="text-3xl font-mono mb-20 text-green-600">
        Welcome to the Health Prediction Website
      </h1>
      <p className="text-xl font-mono mx-36 text-gray-400 p-5 rounded-lg cursor-pointer duration-500 hover:bg-blue-950 mb-10">
        Use this app to predict if you have diabetes or heart disease based on
        your health data.
      </p>
      <div>
        <h2 className="text-center mx-auto p-4 w-fit rounded-2xl text-green-600 font-mono bg-gray-900 cursor-pointer mb-5">
          Choose a Prediction
        </h2>
        <div className="flex w-screen justify-center items-center">
          <Link to="/heart">
            <button className="w-fit px-4 py-3 mr-20 rounded-xl bg-green-600 text-black font-mono duration-200 hover:bg-green-800">
              Heart Disease Prediction
            </button>
          </Link>
          <Link to="/diabetes">
            <button className="w-fit px-4 py-3 mr-20 rounded-xl bg-green-600 text-black font-mono duration-200 hover:bg-green-800">
              Diabetes Prediction
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
