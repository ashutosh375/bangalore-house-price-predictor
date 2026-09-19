# Bangalore House Price Predictor 

This project is a Machine Learning based web application that predicts house prices in Bangalore based on different property features.

The user can enter:

- Total area in square feet
- Number of BHK
- Number of bathrooms
- Location

and the application predicts the estimated house price using a trained Scikit-Learn model.

The project is built using Flask for the backend and HTML, CSS, JavaScript for the frontend.  
The application is also deployed on Render.

---

## Features

- Predict Bangalore house prices instantly
- User-friendly web interface
- Area input in square feet
- BHK selection using radio buttons
- Bathroom selection using radio buttons
- Location selection using dropdown list
- Flask backend API integration
- Machine Learning prediction model
- Deployed online using Render

---

## Project Structure

```text
├── model/
│   ├── bangalore_home_prices_model.pickle
│   └── columns.json
│
└── server/
    ├── server.py
    ├── util.py
    ├── requirements.txt
│
└── static/
    ├── app.html
    ├── app.css
    └── app.js
```

---

## File Description

### model/bangalore_home_prices_model.pickle

Serialized trained Machine Learning model used for prediction.

### model/columns.json

Contains feature columns and all Bangalore locations used during model training.

### server/server.py

Main Flask application file that handles API routes and frontend hosting.

### server/util.py

Loads the trained model and performs price prediction based on user inputs.

### server/requirements.txt

Contains all Python dependencies required to run the project.

### static/app.html

Frontend webpage where users enter property details.

### static/app.css

Stylesheet used for designing the application UI.

### static/app.js

Handles frontend logic, API calls, and displaying predicted prices.

---

## Technologies Used

### Backend

- Python
- Flask
- Scikit-Learn
- NumPy
- Pandas

### Frontend

- HTML
- CSS
- JavaScript

### Deployment

- Render

---

## Machine Learning Workflow

1. Housing dataset collected
2. Data cleaning and preprocessing performed
3. Feature engineering applied
4. Model trained using Scikit-Learn
5. Trained model saved using Pickle
6. Flask API created for predictions
7. Frontend connected with backend API
8. Project deployed on Render

---

## How the Application Works

1. User enters area in square feet
2. User selects BHK
3. User selects number of bathrooms
4. User selects Bangalore location from dropdown
5. Frontend sends data to Flask backend
6. Backend loads trained model
7. Model predicts estimated house price
8. Predicted price is displayed on screen

---

## Installation and Setup

## Clone Repository

```bash
git clone <repository-url>
cd bangalore-house-price-predictor
```

## Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv venv
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r server/requirements.txt
```

### Run Flask Server

```bash
cd server
python server.py
```

---

### Open Application

```text
http://127.0.0.1:5000/
```

---

## API Endpoints

### Get Available Locations

```http
GET /get_location_names
```

### Predict House Price

```http
POST /predict_home_price
```

### Parameters

| Parameter | Description |
|---|---|
| total_sqft | Total area in square feet |
| location | Bangalore location |
| bhk | Number of bedrooms |
| bath | Number of bathrooms |

---

## Deployment

The project is deployed on Render cloud platform.

```text
https://bangalore-house-price-predictor-062w.onrender.com
```

Replace the above URL with your deployed application URL.

---

## Future Improvements

- Better UI and animations
- More accurate prediction model
- Add property type selection
- Add data visualizations and charts
- Add map integration
- Add nearby facilities information

---

## Learning Outcomes

Through this project, the following concepts were implemented and learned:

- Machine Learning model training
- Data preprocessing
- Flask backend development
- REST API creation
- Frontend and backend integration
- Deployment using Render
- Working with Pickle files
- Handling user input dynamically
