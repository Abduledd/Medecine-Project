import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    fetch("http://localhost:5000/api/heart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);
        // Handle the response from the server as needed
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
        // Handle errors
      });
  };
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
      </div>{" "}
      <div className="mt-20 text-red-900">
        <h1> heart desease</h1>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <label>
            Pregnancies:
            <input
              type="text"
              name="Pregnancies"
              value={formData.Pregnancies}
              onChange={handleChange}
            />
          </label>
          <label>
            Glucose:
            <input
              type="text"
              name="Glucose"
              value={formData.Glucose}
              onChange={handleChange}
            />
          </label>
          <label>
            Blood Pressure:
            <input
              type="text"
              name="BloodPressure"
              value={formData.BloodPressure}
              onChange={handleChange}
            />
          </label>
          <label>
            SkinThickness :
            <input
              type="text"
              name="SkinThickness"
              value={formData.SkinThickness}
              onChange={handleChange}
            />
          </label>
          <label>
            Insulin :
            <input
              type="text"
              name="Insulin"
              value={formData.Insulin}
              onChange={handleChange}
            />
          </label>
          <label>
            BMI :
            <input
              type="text"
              name="BMI"
              value={formData.BMI}
              onChange={handleChange}
            />
          </label>
          <label>
            DiabetesPedigreeFunction :
            <input
              type="text"
              name="DiabetesPedigreeFunction"
              value={formData.DiabetesPedigreeFunction}
              onChange={handleChange}
            />
          </label>
          <label>
            Age :
            <input
              type="text"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
            />
          </label>
          {/* Add similar input fields for the other parameters */}

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
