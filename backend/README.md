## Flask Backend

Start the backend server:

```bash
cd backend

pip install -r requirements.txt

python app.py
```

Available Endpoints

GET /api/prices

Returns Brent historical prices.

GET /api/events

Returns geopolitical events.

GET /api/change-point

Returns Bayesian model summary.

Example

http://127.0.0.1:5000/api/prices