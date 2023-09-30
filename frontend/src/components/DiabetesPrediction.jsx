import React, { useState } from "react";
import { Link } from "react-router-dom";

const DiabetesPrediction = () => {
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
  const [outcome, setOutcome] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    fetch("http://localhost:5000/api/diabetes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Server response:", data);
        setOutcome(data.predicted_outcome);

        // Handle the response from the server as needed
      })
      .catch((error) => {
        alert(
          "Please ask the host to lance the server so you can use the prediction"
        );
        console.error("Error sending data to server:", error);
        // Handle errors
      });
  };
  return (
    <div>
      <div className="h-7"></div>
      <Link
        to="/"
        className="w-fit px-2 text-black font-semibold py-1 bg-green-800 hover:bg-green-900 duration-200 rounded-lg ml-7">
        Back to Home
      </Link>
      <div className="flex flex-col justify-center items-center pt-16 text-white">
        <h1 className="mb-10 px-10 text-3xl text-green-600 font-mono">
          diabetes Desease
        </h1>
        <form
          className="flex flex-col items-center py-8 "
          onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <label className="block w-52 text-sm font-medium text-gray-900 dark:text-white">
                Pregnancies:
                <input
                  type="text"
                  name="Pregnancies"
                  value={formData.Pregnancies}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div>
              <label className="block w-52 text-sm font-medium text-gray-900 dark:text-white">
                Glucose:
                <input
                  type="text"
                  name="Glucose"
                  value={formData.Glucose}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div>
              <label className="block w-52 text-sm font-medium text-gray-900 dark:text-white">
                Blood Pressure:
                <input
                  type="text"
                  name="BloodPressure"
                  value={formData.BloodPressure}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div>
              <label className="block w-52 text-sm font-medium text-gray-900 dark:text-white">
                SkinThickness:
                <input
                  type="text"
                  name="SkinThickness"
                  value={formData.SkinThickness}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div>
              <label className="block w-52 text-sm font-medium text-gray-900 dark:text-white">
                Insulin:
                <input
                  type="text"
                  name="Insulin"
                  value={formData.Insulin}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div>
              <label className="block w-52 text-sm font-medium text-gray-900 dark:text-white">
                BMI:
                <input
                  type="text"
                  name="BMI"
                  value={formData.BMI}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div>
              <label className="block w-52 text-sm font-medium text-gray-900 dark:text-white">
                DiabetesPedigreeFunction:
                <input
                  type="text"
                  name="DiabetesPedigreeFunction"
                  value={formData.DiabetesPedigreeFunction}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div>
              <label className="block w-52 text-sm font-medium text-gray-900 dark:text-white">
                Age:
                <input
                  type="text"
                  name="Age"
                  value={formData.Age}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>
          </div>
          <button
            className="my-7 w-fit px-3 py-1 text-lg bg-green-700 rounded-lg hover:bg-green-900 duration-200"
            type="submit">
            Submit
          </button>
        </form>
        <div className="mb-20 p-6 rounded-2xl bg-green-800 duration-500 cursor-pointer">
          <h1 className="w-fit px-3 py-2 cursor-pointer text-2xl mb-5 bg-green-800  text-black font-mono duration-700 rounded-lg">
            Diabetes Disease Prediction Result:
          </h1>
          {outcome === null ? (
            <p className="text-xl font-mono text-black bg-green-800">
              Submit the form to get the prediction.
            </p>
          ) : outcome === 1 ? (
            <p className="bg-green-800 duration-200 text-black font-mono rounded-lg px-3 py-1 text-xl bg-">
              Sadly, this person has diabetes.
            </p>
          ) : (
            <p className="bg-green-800 text-xl font-mono text-gray-950">
              Good news! This person doesn't have diabetes.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiabetesPrediction;
