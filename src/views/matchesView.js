import '../styles/Matches.css';
import {Link, useNavigate} from "react-router-dom";

function MatchesView({ matches }) {

    const navigate= useNavigate();
    navigate("/stats")

    return (
        <div className="matches-container">
            <div className="matches-background matches-left"></div>

            <div className="matches-list">
                <ul>
                    {/*matches.map((match) =>
                        match.Events.map((event) =>
                            <li key={event.id} onClick={() => matchStats(event.id)}>
                                <span>{event.T1[0].Nm}</span>
                                <span>{event.T2[0].Nm}</span>
                            </li>)
                            
                        )
                    */}
                    <div>
                        <li onClick={() => matchStats(null)}>Match 1</li>
                    </div>
                        <li>Match 2</li>
                        <li>Match 3</li>
                        <li>Match 4</li>
                        <li>Match 5</li>
                        <li>Match 6</li>
                        <li>Match 7</li>
                        <li>Match 8</li>
                        <li>Match 9</li>
                        <li>Match 10</li>
                </ul>
            </div>

            <div className="matches-background matches-right"></div>
        </div>
    )

    function matchStats(matchId) { navigate(`/stats`); }
    //   add this for final version      /${matchId}
}

export default MatchesView;