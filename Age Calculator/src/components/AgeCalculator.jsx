import React, { useState } from "react";
import "./AgeCalculator.css";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) {
      setAge(null);
      return;
    }

    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let calculatedAge = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  const resetCalculator = () => {
    setBirthDate("");
    setAge(null);
  };

  return (
    <div className="container">
      <div className="container-top">
        <h1>Age Calculator</h1>
        <p className="para-container">
          Calculate your age based on your date of birth.
        </p>
        <div className="right">
          <h4>Date of Birth</h4>
          <input
            type="date"
            className="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <div className="button">
            <button className="btn" onClick={calculateAge}>
              Calculate Age
            </button>
            <button className="btn" onClick={resetCalculator}>
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="left">
        <div className="container-middle-para">
          <h1>Your Age is</h1>
          <h1 className="age_heading">{age === null ? "" : age}</h1>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
