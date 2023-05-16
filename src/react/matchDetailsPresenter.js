import ChatView from "../views/chatView";
import StatsView from "../views/statsView";
import {matchList} from "../data/dataStats";

//TODO: add relevant props
//TODO: resolvePromise for MatchList
function MatchDetails({model}){
    return (
        <div>
            <StatsView matchList={matchList} matchId={null}></StatsView>
            <ChatView></ChatView>
        </div>
    );
}

export default MatchDetails;