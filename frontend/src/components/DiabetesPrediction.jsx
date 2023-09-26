import React, { useState } from "react";

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

        // Handle the response from the server as needed
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
        // Handle errors
      });
  };
  return (
    <div>
      <div className="mt-20 text-red-900">
        <h1> diabetes desease</h1>
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

        <h1>Diabetes Disease Prediction Result:</h1>
        {outcome === null ? (
          <p>Submit the form to get the prediction.</p>
        ) : outcome === 1 ? (
          <p>Sadly, this person has diabetes.</p>
        ) : (
          <p>Good news! This person doesn't have diabetes.</p>
        )}
      </div>
    </div>
  );
};

export default DiabetesPrediction;
