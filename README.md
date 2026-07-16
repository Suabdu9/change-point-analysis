# Change Point Analysis and Statistical Modeling of Brent Oil Prices

## Overview

This project investigates the impact of major geopolitical, economic, and policy-related events on Brent crude oil prices using Bayesian Change Point Analysis.

The objective is to identify structural breaks in historical Brent oil prices, associate these changes with significant global events, and present the findings through an interactive dashboard.

---

# Project Structure

```
change-point-analysis

├── backend/
├── frontend/
├── data/
│   ├── raw/
│   ├── external/
│   └── processed/
├── notebooks/
├── src/
├── tests/
├── scripts/
├── reports/
└── README.md
```

---

# Project Tasks

## Task 1

- Data loading
- Exploratory Data Analysis
- Trend analysis
- Stationarity testing
- Volatility analysis
- Historical geopolitical event collection
- Assumptions and limitations

---

## Task 2

- Bayesian Change Point Model
- PyMC implementation
- MCMC sampling
- Posterior analysis
- Event association
- Impact quantification

---

## Task 3

Interactive Dashboard

Backend

- Flask API

Frontend

- React
- Axios
- Recharts

Dashboard Features

- Historical Brent price visualization
- Bayesian change point summary
- Event highlight
- Interactive date filtering
- Historical event exploration

---

# Technologies

Python

- Pandas
- NumPy
- Matplotlib
- Seaborn
- Statsmodels
- PyMC
- ArviZ
- Flask
- Flask-CORS

Frontend

- React
- Axios
- Recharts
- Vite

---

# Installation

## Clone Repository

```bash
git clone <repository-url>

cd change-point-analysis
```

---

## Create Virtual Environment

Windows

```bash
python -m venv .venv

.venv\Scripts\activate
```

Linux / Mac

```bash
python3 -m venv .venv

source .venv/bin/activate
```

---

## Install Python Dependencies

```bash
pip install -r requirements.txt
```

Backend

```bash
cd backend

pip install -r requirements.txt
```

---

## Install Frontend

```bash
cd frontend

npm install
```

---

# Reproducing the Analysis

## Step 1

Run the notebook

```
notebooks/change_point_analysis.ipynb
```

This notebook performs

- Data loading
- EDA
- ADF tests
- Bayesian modelling
- Posterior analysis
- Exporting dashboard datasets

The notebook generates

```
backend/outputs/

historical_prices.csv

events.csv

change_point_summary.csv
```

---

## Step 2

Start Flask

```bash
cd backend

python app.py
```

Available APIs

```
GET /api/prices

GET /api/events

GET /api/change-point
```

---

## Step 3

Start React

```bash
cd frontend

npm run dev
```

Open

```
http://localhost:5173
```

---

# Dashboard Features

✔ Historical Brent price chart

✔ Bayesian change point summary

✔ Event table

✔ Interactive date filtering

✔ Event highlighting

✔ Responsive dashboard

---

# Results

The Bayesian model identified a major structural break around

**24 February 2005**

The analysis indicates a transition to a higher average price regime consistent with major shifts in global oil demand and OPEC production policies.

---

# Limitations

The current implementation assumes

- One structural break
- Normally distributed observations
- Historical events provide temporal association rather than proof of causality

---

# Future Work

- Multiple Bayesian Change Points
- Hidden Markov Models
- VAR Models
- Live API Integration
- Docker Deployment
- Cloud Deployment

---

# Authors

Sumeya Abdulsemed

10 Academy – Week 10 Challenge