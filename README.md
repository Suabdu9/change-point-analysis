# Change Point Analysis and Statistical Modeling of Brent Oil Prices

## Project Overview

This project investigates how major geopolitical events, economic shocks, international sanctions, and OPEC policy decisions have influenced Brent crude oil prices between May 1987 and September 2022. Using Bayesian Change Point Analysis implemented with PyMC, the project aims to identify structural breaks in the oil price time series and associate these changes with significant real-world events.

The project is conducted as part of Birhan Energies' effort to provide data-driven insights for investors, policymakers, and energy companies.

---

## Objectives

* Analyze historical Brent crude oil price movements.
* Investigate trend, stationarity, and volatility characteristics of the time series.
* Detect structural breaks using Bayesian Change Point Analysis.
* Associate detected change points with major geopolitical and economic events.
* Quantify the impact of significant events on Brent oil prices.
* Develop an interactive dashboard for visualizing analysis results.

---

## Project Structure

```
change-point-analysis/
│
├── data/
│   ├── raw/
│   ├── external/
│   └── processed/
│
├── notebooks/
│
├── reports/
│
├── src/
│
├── scripts/
│
├── tests/
│
├── requirements.txt
├── README.md
└── .gitignore
```

---

## Task 1 Progress

Completed:

* Project setup
* Data loading and preprocessing
* Exploratory Data Analysis (EDA)
* Trend analysis
* Stationarity testing using the Augmented Dickey-Fuller (ADF) test
* Volatility analysis
* Research and compilation of major geopolitical events (20 events)
* Initial documentation of assumptions and limitations

---

## Technologies

* Python
* Pandas
* NumPy
* Matplotlib
* Statsmodels
* PyMC
* ArviZ
* Jupyter Notebook
* Git & GitHub

---

## Dataset

The primary dataset contains daily Brent crude oil prices from **20 May 1987** to **14 November 2022**.

An additional externally compiled dataset contains significant geopolitical, economic, and OPEC-related events used to associate detected change points with historical developments.

---

## Expected Outcomes

* Bayesian identification of structural breaks in Brent oil prices.
* Quantification of changes before and after detected change points.
* Association between detected structural breaks and historical events.
* Interactive dashboard for stakeholders.
