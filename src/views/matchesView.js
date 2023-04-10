import '../styles/Matches.css'

function MatchesView({ matches }){
    return (
        <div className="container">
            <div className="background left"></div>

            <div className="list">
                <ul>
                    {matches.map((match) =>
                        match.Events.map((event) =>
                            <li /*onClick={() => matchStats(match.id)}*/>
                                <span>{event.T1[0].Nm}</span>
                                <span>{event.T2[0].Nm}</span>
                            </li>)
                        )}
                </ul>
            </div>

            <div className="background right"></div>
        </div>
    )

    function matchStats(id){
        // empty now, but it should link to the stats of the corresponding match
    }
}

export default MatchesView;