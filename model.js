import React, { useState } from "react";
import axios from 'axios';
import "./Model.css";

const Model = () => {
  // State to hold the values of each input type="text" pattern="[0-9]*"

  const [values, setValues] = useState({
    age: "",
    Sex: "",
    cp:"",
    trestbps:"",
    chol: "",
    fbs:"",
    restecg:"",
    thalach: "",
    exang:"",
    oldPeak: "",
    slope:"",
    ca:"",
    thal:"",
  });
    // Add more if needed for other input type="text" pattern="[0-9]*"

  async function handleclick() {
      try {
        // Send a POST request to your server endpoint
        const response = await axios.post("http://127.0.0.1:5000/predict", values);
        console.log(response.data);
        // Handle the response here, maybe display it in your UI
        if (response.data.prediction === 1) {
          alert("You have a heart disease.");
        } else {
          alert("You don't have a heart disease.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors gracefully
        alert("An error occurred while fetching data.");
      }
    }
  // Function to handle changes in input type="text" pattern="[0-9]*"
  function allNumeric(inputtxt) {
    var numbers = /^[0-9]+$/;
    return inputtxt.match(numbers);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: allNumeric(value) ? value : ""
    });
  };

  return (
    <div className="model">
      <header className="frame-header">
        <div className="frame-child4" />
        <div className="health-360-group">
          <b className="health-3604">
            <span>Health</span>
            <span className="span10">{` `}</span>
            <span className="span11">360</span>
          </b>
          <div className="navbar2">
            <div className="navbar-item" />
            <div className="healthcare-group">
              <div className="healthcare2">Healthcare</div>
              <div className="medicines-other2">{`Medicines & Other Services `}</div>
              <div className="services4">Services</div>
              <div className="about-us4">About Us</div>
            </div>
            <div className="call-1800-425-3800-or-group">
              <div className="call-1800-425-container2">
                <span>
                  <span className="call2">{`Call `}</span>
                  <b>1800 425 3800</b>
                  <span className="span12">{` `}</span>
                </span>
                <span className="or2">
                  <span>or</span>
                </span>
              </div>
              <button className="consult-online-frame">
                <div className="consult-online2">Login / Sign Up</div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="frame-main">
        <div className="frame-child5" />
        <section className="frame-section">
          <div className="frame-child6" />
          <b className="heart-disease-prediction-container">
            <span>Heart Disease</span>
            <span className="span13">{` `}</span>
            <span className="prediction">Prediction</span>
          </b>
          <div className="frame-group">
            <div className="frame-parent1">
              <div className="age-in-years-parent">
                {/* Convert rectangles to input type="text" pattern="[0-9]*"
 elements */}
                <input type="text" pattern="[0-9]*"

                  
                  className="rectangle-set"
                  name="age"
                  value={values.age}
                  onChange={handleChange}
                  placeholder="Age"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set1"
                  name="Sex"
                  value={values.Sex}
                  onChange={handleChange}
                  placeholder="Sex"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set2"
                  name="cp"
                  value={values.cp}
                  onChange={handleChange}
                  placeholder="cp"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set3"
                  name="trestbps"
                  value={values.trestbps}
                  onChange={handleChange}
                  placeholder="trestbps"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set4"
                  name="chol"
                  value={values.chol}
                  onChange={handleChange}
                  placeholder="chol"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set5"
                  name="fbs"
                  value={values.fbs}
                  onChange={handleChange}
                  placeholder="Fbs"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set6"
                  name="restecg"
                  value={values.restecg}
                  onChange={handleChange}
                  placeholder="restecg"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set7"
                  name="thalach"
                  value={values.thalach}
                  onChange={handleChange}
                  placeholder="thalach"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set8"
                  name="exang"
                  value={values.exang}
                  onChange={handleChange}
                  placeholder="exang"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set9"
                  name="oldPeak"
                  value={values.oldPeak}
                  onChange={handleChange}
                  placeholder="old peak"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set10"
                  name="slope"
                  value={values.slope}
                  onChange={handleChange}
                  placeholder="slope"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set11"
                  name="ca"
                  value={values.ca}
                  onChange={handleChange}
                  placeholder="ca"
                />
                <input type="text" pattern="[0-9]*"

                 
                  className="rectangle-set12"
                  name="thal"
                  value={values.thal}
                  onChange={handleChange}
                  placeholder="thal"
                />
               
                {/* Add more input type="text" pattern="[0-9]*"
s for other rectangles */}
              </div>
            </div>
            <div className="reference-frame">
              <button onClick={handleclick} className="submit-button">
                <div className="submit">Submit</div>
              </button>
            </div>
          </div>
        </section>
        <section className="heart-rate-frame">
          <div className="heart-rate-frame-child" />
          <div className="for-reference-frame">
            <b className="for-reference">
              <span>For</span>
              <span className="span14">{` `}</span>
              <span className="reference">Reference</span>
            </b>
            <b className="age-age-container">
              <p className="age-age">Age - age in years</p>
              <p className="sex-1">sex - (1 = male; 0 = female)</p>
              <p className="cp-chest">cp - chest pain type</p>
              <p className="Sex-resting">{`Sex - resting blood pressure `}</p>
              <p className="in-mm-hg">
                {" "}
                (in mm Hg on admission to the hospital)
              </p>
              <p className="chol-serum">chol - serum cholestoral in mg/dl</p>
              <p className="fbs-fasting">{`fbs - (fasting blood sugar > 120 mg/dl) (1 = true; 0 = false)`}</p>
              <p className="restecg-resting">
                restecg - resting electrocardiographic results
              </p>
            </b>
          </div>
          <div className="children-info-frame">
            <b className="thalach-maximum-container">
              <p className="thalach-maximum">
                thalach - maximum heart rate achieved
              </p>
              <p className="exang-exercise">
                exang - exercise induced angina (1 = yes; 0 = no)
              </p>
              <p className="oldpeak-st">
                oldpeak - ST depression induced by exercise relative to rest
              </p>
              <p className="slope-the">
                slope - the slope of the peak exercise ST segment
              </p>
              <p className="ca-number">
                ca - number of major vessels (0-3) colored by flourosopy
              </p>
              <p className="thal-3">
                thal - 3 = normal; 6 = fixed defect; 7 = reversable defect
              </p>
              <p className="target-have">
                target - have disease or not (1=yes, 0=no)
              </p>
            </b>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Model;
