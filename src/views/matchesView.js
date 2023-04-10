import '../styles/Matches.css'

function MatchesView({ matches }){
    return (
        <div className="matches-container">
            <div className="matches-background matches-left"></div>

            <div className="matches-list">
                <ul>
                    {/*matches.map((match) =>
                        match.Events.map((event) =>
                            <li>
                                <span>{event.T1[0].Nm}</span>
                                <span>{event.T2[0].Nm}</span>
                            </li>)
                        )*/}
                </ul>
            </div>

            <div className="matches-background matches-right"></div>
        </div>
    )

    function matchStats(id){
        // empty now, but it should link to the stats of the corresponding match
    }
}

export default MatchesView;