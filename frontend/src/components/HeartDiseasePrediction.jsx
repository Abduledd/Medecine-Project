import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeartDiseasePrediction = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const [outcome, setOutcome] = useState(null);

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
        setOutcome(data.predicted_outcome);
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
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
          Heart Disease Prediction
        </h1>

        <form
          className="flex flex-col items-center py-8"
          onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Age
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Sex:
                <input
                  type="text"
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Chest Pain Type:
                <input
                  type="text"
                  name="cp"
                  value={formData.cp}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Resting Blood Pressure:
                <input
                  type="text"
                  name="trestbps"
                  value={formData.trestbps}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Serum Cholesterol:
                <input
                  type="text"
                  name="chol"
                  value={formData.chol}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Fasting Blood Sugar:
                <input
                  type="text"
                  name="fbs"
                  value={formData.fbs}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Resting Electrocardiographic Results:
                <input
                  type="text"
                  name="restecg"
                  value={formData.restecg}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Maximum Heart Rate Achieved:
                <input
                  type="text"
                  name="thalach"
                  value={formData.thalach}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Exercise Induced Angina:
                <input
                  type="text"
                  name="exang"
                  value={formData.exang}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                ST Depression Induced by Exercise:
                <input
                  type="text"
                  name="oldpeak"
                  value={formData.oldpeak}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Slope of the Peak Exercise ST Segment:
                <input
                  type="text"
                  name="slope"
                  value={formData.slope}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Number of Major Vessels Colored by Fluoroscopy:
                <input
                  type="text"
                  name="ca"
                  value={formData.ca}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>

            <div className="mt-3 mr-2">
              <label className="block w-52  text-sm font-medium text-gray-900 dark:text-white">
                Thalassemia:
                <input
                  type="text"
                  name="thal"
                  value={formData.thal}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </label>
            </div>
          </div>

          <button
            className=" my-7 w-fit px-3 py-1 text-lg bg-green-700 rounded-lg hover:bg-green-900 duration-200"
            type="submit">
            Submit
          </button>
        </form>
        <div className="mb-20 p-6 rounded-2xl bg-green-800 duration-500 cursor-pointer">
          <h1 className="w-fit px-3 py-2 cursor-pointer text-2xl mb-5 bg-green-800  text-black font-mono duration-700 rounded-lg">
            Heart Disease Prediction Result:
          </h1>
          {outcome === null ? (
            <p className="text-lg text-black bg-green-800">
              Submit the form to get the prediction.
            </p>
          ) : outcome === 1 ? (
            <p className="bg-green-800 duration-200 text-black font-mono rounded-lg px-3 py-1 text-xl bg-">
              Unfortunately, this person has heart disease.
            </p>
          ) : (
            <p className="bg-green-800 text-xl font-mono text-gray-950">
              Good news! This person doesn't have heart disease.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeartDiseasePrediction;
