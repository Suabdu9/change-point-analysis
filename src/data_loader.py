from pathlib import Path

import pandas as pd


def load_brent_data(filepath):

    filepath = Path(filepath)

    if not filepath.exists():
        raise FileNotFoundError(
            f"Dataset not found: {filepath}"
        )

    try:

        df = pd.read_csv(filepath)

    except Exception as e:

        raise RuntimeError(
            f"Unable to read dataset: {e}"
        )

    required_columns = ["Date", "Price"]

    missing = [
        c for c in required_columns
        if c not in df.columns
    ]

    if missing:

        raise ValueError(
            f"Missing required columns: {missing}"
        )

    df["Date"] = pd.to_datetime(
        df["Date"],
        errors="raise"
    )

    df = df.sort_values("Date")

    return df