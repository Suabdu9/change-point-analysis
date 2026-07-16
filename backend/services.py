from pathlib import Path
import pandas as pd

OUTPUT = Path("outputs")

def load_prices():
    return pd.read_csv(
        OUTPUT/"historical_prices.csv"
    )

def load_events():
    return pd.read_csv(
        OUTPUT/"events.csv"
    )

def load_summary():
    return pd.read_csv(
        OUTPUT/"change_point_summary.csv"
    )
