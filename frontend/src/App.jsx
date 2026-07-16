import { useEffect, useMemo, useState } from "react";
import API from "./services/api";
import SummaryCards from "./components/SummaryCards";
import PriceChart from "./components/PriceChart";
import EventTable from "./components/EventTable";
import "./App.css";

function App() {
  const [prices, setPrices] = useState([]);
  const [events, setEvents] = useState([]);
  const [summary, setSummary] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    API.get("/prices")
      .then((res) => setPrices(res.data))
      .catch((err) => console.error(err));

    API.get("/events")
      .then((res) => setEvents(res.data))
      .catch((err) => console.error(err));

    API.get("/change-point")
      .then((res) => setSummary(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredPrices = useMemo(() => {
    return prices.filter((p) => {
      if (startDate && p.Date < startDate) return false;
      if (endDate && p.Date > endDate) return false;
      return true;
    });
  }, [prices, startDate, endDate]);

  return (
    <div className="container">
      <h1>Brent Oil Change Point Analysis Dashboard</h1>

      <SummaryCards
        summary={summary}
        totalEvents={events.length}
        totalPrices={prices.length}
      />

      <div className="filters">
        <label>
          Start Date
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>

        <label>
          End Date
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>

        <button
          onClick={() => {
            setStartDate("");
            setEndDate("");
            setSelectedEvent(null);
          }}
        >
          Reset Filters
        </button>
      </div>

      <PriceChart
        prices={filteredPrices}
        summary={summary}
        selectedEvent={selectedEvent}
      />

      <h2>Historical Geopolitical Events</h2>

      <EventTable
        events={events}
        onSelectEvent={setSelectedEvent}
      />
    </div>
  );
}

export default App;
