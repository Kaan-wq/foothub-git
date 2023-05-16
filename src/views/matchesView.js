import '../styles/Matches.css';

function MatchesView({ matches }) {
    return (
        <div className="matches-container">
            <div className="matches-background matches-left"></div>

            <div className="matches-list">
                <ul>
                    {/*matches.map((match) =>
                        match.Events.map((event) =>
                            <li onClick={() => matchStats(event.id)}>
                                <span>{event.T1[0].Nm}</span>
                                <span>{event.T2[0].Nm}</span>
                            </li>)
                            
                        )
                    */} 
                        <li>Match 1</li>
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

    function matchStats(id) {
        // This function will be triggered when a match is clicked.
        // Now it should link to the stats of the corresponding match.
    }
}

export default MatchesView;