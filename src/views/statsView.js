import "../styles/Stats.css";

function StatsView({ stats, match }) {
    console.log(stats)
    return (
        <div className="stats-container">
            <ul className="stats">
                <li>{match.T1[0].Nm}</li>
                <li>{match.T2[0].Nm}</li>
            </ul>
        </div>
    );
}

export default StatsView;
