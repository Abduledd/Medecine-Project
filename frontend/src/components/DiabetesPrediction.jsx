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
  return <div>DiabetesPrediction</div>;
};

export default DiabetesPrediction;
