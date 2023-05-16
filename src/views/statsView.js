import "../styles/Stats.css";

function StatsView({ matchList }) {
    return (
        <div className="stats-container">
            <ul className="stats">
                {matchList.map((match) => (
                    <li key={match.id}>
                        <div className="scoreboard">
                            <img src={match.logoOne} alt={`${match.teamOne} logo`} />
                            <span>{match.teamOne}</span>
                            <span>{match.scoreOne} - {match.scoreTwo}</span>
                            <span>{match.teamTwo}</span>
                            <img src={match.logoTwo} alt={`${match.teamTwo} logo`} />
                        </div>
                        <div className="statistics">
                            <div className="possession-gauge">
                                <svg viewBox="0 0 100 50">
                                    <rect x="0" y="0" width="200" height="50" fill="#f0f0f0" rx="10" ry="10" />
                                    <rect x="0" y="0" width={2*match.posOne} height="50" fill="#00aaff" rx="10" ry="10" />
                                </svg>
                                <span>{match.posOne}% - {match.posTwo}%</span>
                            </div>
                            <span>Shots: {match.shotsOne} - {match.shotsTwo}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StatsView;
