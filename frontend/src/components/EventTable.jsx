function EventTable({ events, onSelectEvent }) {
  if (!events.length) return <p>Loading events...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Event</th>
          <th>Category</th>
          <th>Region</th>
        </tr>
      </thead>

      <tbody>
        {events.map((event, index) => (
          <tr
            key={index}
            onClick={() => onSelectEvent(event)}
            style={{ cursor: "pointer" }}
          >
            <td>{event.Date}</td>
            <td>{event.Event}</td>
            <td>{event.Category}</td>
            <td>{event.Region}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EventTable;
