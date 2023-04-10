import '../styles/Matches.css'

function Matches({ matches }){
    return (
        <div className="container">
            <div className="background left"></div>

            <div className="list">
                <ul>
                    {/*matches.map((match) =>
                    <li onClick={() => matchStats(match.id)}>
                        <span>match.teamOne</span>
                        <span>match.scoreOne - match.scoreTwo</span>
                        <span>match.teamTwo</span>
                    </li>)*/}
                </ul>
            </div>

            <div className="background right"></div>
        </div>
    )

    function matchStats(id){
        // empty now, but it should link to the stats of the corresponding match
    }
}

export default Matches