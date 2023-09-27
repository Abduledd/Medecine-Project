import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import numpy as np


app = Flask(__name__)
CORS(app)


#Diabete model

diabete_df = pd.read_csv(r"C:\Users\User\Desktop\projects\Medecine Project\datasets\diabetes.csv")

X_diab = diabete_df.drop('Outcome', axis=1)
Y_diab = diabete_df['Outcome']
X_train_diab, X_test_diab, Y_train, Y_test = train_test_split(X_diab, Y_diab, test_size=0.2, random_state=42)

diabete_scaler = StandardScaler()
X_train_diab = diabete_scaler.fit_transform(X_train_diab)
X_test_diab = diabete_scaler.transform(X_test_diab)

diabetes_model = LogisticRegression()

diabetes_model.fit(X_train_diab, Y_train)

def predict_diabetes_outcome(input_data):
    # Convert input data to a list and then to numpy array
    input_data_np = np.array(list(input_data.values())).reshape(1, -1)
    input_data_scaled = diabete_scaler.transform(input_data_np)
    predicted_outcome = diabetes_model.predict(input_data_scaled)
    return int(predicted_outcome[0])

# Heart model

heart_df = pd.read_csv(r"C:\Users\User\Desktop\projects\Medecine Project\datasets\heart.csv")

X = heart_df.drop(columns='target', axis=1)
Y = heart_df['target']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

heart_scaler = StandardScaler()
X_train = heart_scaler.fit_transform(X_train)
X_test = heart_scaler.transform(X_test)


# Initialize the model
heart_model = RandomForestClassifier()

# Train the model
heart_model.fit(X_train, Y_train)

def predict_heart_disease_outcome(input_data):
    # Convert input data to a list and then to numpy array
    input_data_np = np.array(list(input_data.values())).reshape(1, -1)
    input_data_scaled = heart_scaler.transform(input_data_np)
    predicted_outcome = heart_model.predict(input_data_scaled)
    return int(predicted_outcome[0])



@app.route('/api/diabetes', methods=['POST'])
def get_diabete_outcome():
    input_data = request.get_json()
    output = predict_diabetes_outcome(input_data)
    print()
    print(output)
    print()
    return jsonify({'predicted_outcome':output})



@app.route('/api/heart', methods=['POST'])
def get_heart_outcome():
    input_data = request.get_json()
    output = predict_heart_disease_outcome(input_data)
    return jsonify({'predicted_outcome': output})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)