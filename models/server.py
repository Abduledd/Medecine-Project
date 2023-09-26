import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier


#Diabete model

diabete_df = pd.read_csv(r"C:\Users\User\Desktop\projects\Medecine Project\datasets\diabetes.csv")

X_diab = diabete_df.drop('Outcome', axis=1)
Y_diab = diabete_df['Outcome']
X_train_diab, X_test_diab, Y_train, Y_test = train_test_split(X_diab, Y_diab, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_diab = scaler.fit_transform(X_train_diab)
X_test_diab = scaler.transform(X_test_diab)

diabetes_model = LogisticRegression()

diabetes_model.fit(X_train_diab, Y_train)

def predict_diabetes_outcome(input_data):
    # Preprocess the input data using the same scaler
    input_data_scaled = scaler.transform(input_data.reshape(1, -1))
    
    # Predict the outcome
    predicted_outcome = diabetes_model.predict(input_data_scaled)
    
    return predicted_outcome[0]

# Heart model

df = pd.read_csv(r"C:\Users\User\Desktop\projects\Medecine Project\datasets\diabetes.csv")

X = df.drop('Outcome', axis=1)
Y = df['Outcome']
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=42)

X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)


# Initialize the model
heart_model = RandomForestClassifier()

# Train the model
heart_model.fit(X_train, Y_train)

def predict_heart_disease_outcome(input_data):
    # Preprocess the input data using the same scaler
    input_data_scaled = scaler.transform(input_data.reshape(1, -1))
    
    # Predict the outcome
    predicted_outcome = heart_model.predict(input_data_scaled)
    
    return predicted_outcome[0]
