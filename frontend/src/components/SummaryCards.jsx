function SummaryCards({summary}){

    if(!summary) return null;

    return(

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
                <h3>Change</h3>
                <p>{Number(summary.percentage_change).toFixed(2)}%</p>
            </div>

        </div>

    );

}

export default SummaryCards;
