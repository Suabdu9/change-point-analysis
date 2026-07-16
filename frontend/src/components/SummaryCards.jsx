function SummaryCards({ summary, totalEvents, totalPrices }) {
  if (!summary) return <p>Loading summary...</p>;

  return (
    <div className="cards">
      <div className="card">
        <h3>Change Point</h3>
        <p>{summary.change_point_date}</p>
      </div>

      <div className="card">
        <h3>Mean Before</h3>
        <p>${Number(summary.mean_before).toFixed(2)}</p>
      </div>

      <div className="card">
        <h3>Mean After</h3>
        <p>${Number(summary.mean_after).toFixed(2)}</p>
      </div>

      <div className="card">
        <h3>Price Change</h3>
        <p>{Number(summary.percentage_change).toFixed(2)}%</p>
      </div>

      <div className="card">
        <h3>Historical Events</h3>
        <p>{totalEvents}</p>
      </div>

      <div className="card">
        <h3>Observations</h3>
        <p>{totalPrices}</p>
      </div>
    </div>
  );
}

export default SummaryCards;
