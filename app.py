from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as  np
import pickle


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/predict', methods=['POST'])
def predict():
    # Get input data from the request
    print("hello")
    data = request.get_json()
    print("Received data:", data)

    # Extracting features from the JSON data
    age = int(data['age']) if data['age'].strip() != "" else 0
    sex = int(data['Sex']) if data['Sex'].strip() != "" else 0
    cp = int(data['cp']) if data['cp'].strip() != "" else 0
    trestbps = int(data['trestbps']) if data['trestbps'].strip() != "" else 0
    chol = int(data['chol']) if data['chol'].strip() != "" else 0
    fbs = int(data['fbs']) if data['fbs'].strip() != "" else 0
    restecg = int(data['restecg']) if data['restecg'].strip() != "" else 0
    thalach = int(data['thalach']) if data['thalach'].strip() != "" else 0
    exang = int(data['exang']) if data['exang'].strip() != "" else 0
    oldpeak = float(data['oldPeak']) if data['oldPeak'].strip() != "" else 0
    slope = int(data['slope']) if data['slope'].strip() != "" else 0
    ca = int(data['ca']) if data['ca'].strip() != "" else 0
    thal = int(data['thal']) if data['thal'].strip() != "" else 0
    
    print("Processed features:", [age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal])
    
    # Load the trained model
    with open('Heart_Model.pkl', 'rb') as f:
        model = pickle.load(f)

    # Make predictions
    prediction = model.predict([[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])

    # Return the prediction as JSON

    response = jsonify({'prediction': prediction.tolist()})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == '__main__':
    app.run(debug=True, port=5000)


