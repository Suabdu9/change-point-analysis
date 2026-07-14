import numpy as np


def calculate_log_returns(df):

    if "Price" not in df.columns:

        raise ValueError(
            "Price column not found."
        )

    df = df.copy()

    df["Log_Return"] = np.log(
        df["Price"]
    ).diff()

    return df