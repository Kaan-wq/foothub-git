import "../styles/Stats.css"

//TODO: add relevant props
function StatsView({matchList}){
    return(
        <div className="stats-container">
            <ul className="stats">
                {matchList.map((match) =>
                    <li>
                        <div>
                            <span>{match.teamOne}</span>
                            <span>{match.scoreOne}-{match.scoreTwo}</span>
                            <span>{match.teamTwo}</span>

                            <span>Possession : {match.posOne}% - {match.posTwo}%</span>
                            <span>Shots : {match.shotsOne} - {match.shotsTwo}</span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default StatsView;