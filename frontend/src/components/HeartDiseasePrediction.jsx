import React, { useState } from "react";

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
      <div className="mt-20 text-red-900">
        <h1>Heart Disease Prediction</h1>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <label>
            Sex:
            <input
              type="text"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
            />
          </label>
          <label>
            Chest Pain Type:
            <input
              type="text"
              name="cp"
              value={formData.cp}
              onChange={handleChange}
            />
          </label>
          <label>
            Resting Blood Pressure:
            <input
              type="text"
              name="trestbps"
              value={formData.trestbps}
              onChange={handleChange}
            />
          </label>
          <label>
            Serum Cholesterol:
            <input
              type="text"
              name="chol"
              value={formData.chol}
              onChange={handleChange}
            />
          </label>
          <label>
            Fasting Blood Sugar:
            <input
              type="text"
              name="fbs"
              value={formData.fbs}
              onChange={handleChange}
            />
          </label>
          <label>
            Resting Electrocardiographic Results:
            <input
              type="text"
              name="restecg"
              value={formData.restecg}
              onChange={handleChange}
            />
          </label>
          <label>
            Maximum Heart Rate Achieved:
            <input
              type="text"
              name="thalach"
              value={formData.thalach}
              onChange={handleChange}
            />
          </label>
          <label>
            Exercise Induced Angina:
            <input
              type="text"
              name="exang"
              value={formData.exang}
              onChange={handleChange}
            />
          </label>
          <label>
            ST Depression Induced by Exercise:
            <input
              type="text"
              name="oldpeak"
              value={formData.oldpeak}
              onChange={handleChange}
            />
          </label>
          <label>
            Slope of the Peak Exercise ST Segment:
            <input
              type="text"
              name="slope"
              value={formData.slope}
              onChange={handleChange}
            />
          </label>
          <label>
            Number of Major Vessels Colored by Fluoroscopy:
            <input
              type="text"
              name="ca"
              value={formData.ca}
              onChange={handleChange}
            />
          </label>
          <label>
            Thalassemia:
            <input
              type="text"
              name="thal"
              value={formData.thal}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>

        <h1>Heart Disease Prediction Result:</h1>
        {outcome === null ? (
          <p>Submit the form to get the prediction.</p>
        ) : outcome === 1 ? (
          <p>Unfortunately, this person has heart disease.</p>
        ) : (
          <p>Good news! This person doesn't have heart disease.</p>
        )}
      </div>
    </div>
  );
};

export default HeartDiseasePrediction;
