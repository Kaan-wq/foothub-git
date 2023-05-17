import resolvePromise from "./resolvePromise";
import { generalAPICall, getLiveMatches, getStats } from "./matchesSource";


class FootHubModel{
    constructor(matchesArray=[]){
        this.name="FootHub";
        this.matches=matchesArray;
        this.matchesPromiseState={};
        this.statsPromiseState={};
        this.currentMatch = []
    }

    getMatches(){
        resolvePromise(getLiveMatches(), this.matchesPromiseState);
    }

    setCurrentMatch(matchId, match) {
        if (matchId == this.currentId) return
        this.currentId = matchId
        this.currentMatch = match
        localStorage.setItem("match", JSON.stringify(match))
    }

    getStatistics(id) {
        resolvePromise(getStats(id), this.statsPromiseState)
    }
}

export default FootHubModel;