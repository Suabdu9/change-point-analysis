function EventTable({events}){

return(

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

{

events.map((e,i)=>(

<tr key={i}>

<td>{e.Date}</td>

<td>{e.Event}</td>

<td>{e.Category}</td>

<td>{e.Region}</td>

</tr>

))

}

</tbody>

</table>

);

}

export default EventTable;
