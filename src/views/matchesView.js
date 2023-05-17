import "../styles/Matches.css";
import { Link, useNavigate } from "react-router-dom";

function MatchesView({ matches, onMatch }) {
    const navigate = useNavigate();

    const url = "https://lsm-static-prod.livescore.com/high/";
    const url2 = "https://lsm-static-prod.livescore.com/medium/";

    return (
        <div className="matches-container">
            <div className="matches-background matches-left"></div>

            <div className="matches-list">
                <ul>
                    <h1 className="matches-banner">Live Matches</h1>
                    {matches.map((match) =>
                        match.Events.map((event) => (
                            <li key={event.Eid} onClick={() => matchStats(event.Eid, event)}>

                                <img src={url2 + event.T1[0].Img} />
                                <span>{event.T1[0].Nm}</span>
                                <span>{event.Tr1}</span>
                                <span>-</span>
                                <span>{event.Tr2}</span>
                                <span>{event.T2[0].Nm}</span>
                                <img src={url2 + event.T2[0].Img} />

                                <div>
                                    <br /> {/* Add a line break */}
                                    <span className="timestamp">{event.Eps}</span> {/* Add timestamp with the "timestamp" class */}
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
            <div className="matches-background matches-right"></div>
        </div>
    );

    function matchStats(matchId, match) {
        navigate("/stats");
        onMatch(matchId, match);
    }
}

export default MatchesView;
