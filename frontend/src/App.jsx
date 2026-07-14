import {useEffect,useState} from "react";

import API from "./services/api";

import SummaryCards from "./components/SummaryCards";
import PriceChart from "./components/PriceChart";
import EventTable from "./components/EventTable";

import "./App.css";

function App(){

const [prices,setPrices]=useState([]);

const [events,setEvents]=useState([]);

const [summary,setSummary]=useState(null);

useEffect(()=>{

API.get("/prices").then(r=>setPrices(r.data));

API.get("/events").then(r=>setEvents(r.data));

API.get("/change-point").then(r=>setSummary(r.data));

},[]);

return(

<div className="container">

<h1>Brent Oil Change Point Dashboard</h1>

<SummaryCards summary={summary}/>

<PriceChart
prices={prices}
summary={summary}
/>

<h2>Historical Events</h2>

<EventTable events={events}/>

</div>

);

}

export default App;
