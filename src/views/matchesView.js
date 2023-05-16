import '../styles/Matches.css';
import {Link, useNavigate} from "react-router-dom";

function MatchesView({ matches }) {

    const navigate= useNavigate();
    navigate("/stats")
    const url = "https://lsm-static-prod.livescore.com/high/";

    return (
        <div className="matches-container">
            <div className="matches-background matches-left"></div>

            <div className="matches-list">
                <ul>
                    {
                    matches.map((match) =>
                        match.Events.map((event) =>
                            <li key={event.Eid} onClick={() => matchStats(event.Eid)}>
                                <img src={url + event.T1[0].Img} />
                                <span>{event.T1[0].Nm}</span>
                                <span>{event.T2[0].Nm}</span>
                                <img src={url + event.T2[0].Img} />
                            </li>)
                        )
                    } 
                </ul>
            </div>
            <div className="matches-background matches-right"></div>
        </div>
    )

    function matchStats(matchId) { navigate(`/stats/${matchId}`); }
}

export default MatchesView;