import '../styles/Matches.css';
import {Link, useNavigate} from "react-router-dom";

function MatchesView({ matches, onMatch }) {

    const navigate= useNavigate();
    navigate("/stats")
    const url = "https://lsm-static-prod.livescore.com/high/";
    const url2 = "https://lsm-static-prod.livescore.com/medium/";

    return (
        <div className="matches-container">
            <div className="matches-background matches-left"></div>

            <div className="matches-list">
                <ul>
                    {
                    matches.map((match) =>
                        match.Events.map((event) =>
                            <li key={event.Eid} onClick={() => matchStats(event.Eid, event)}>
                                <img src={url2 + event.T1[0].Img}/>
                                <span>{event.T1[0].Nm}</span>
                                <span>{event.Tr1}</span>
                                <span>-</span>
                                <span>{event.Tr2}</span>
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
    function matchStats(matchId, match) { 
        navigate('/stats');
        onMatch(matchId, match);
    }
    //   add this for final version      /${matchId}
}

export default MatchesView;