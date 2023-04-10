import resolvePromise from "./resolvePromise";
import { generalAPICall, getLiveMatches } from "./matchesSource";
class FootHubModel{
    constructor(matchesArray=[]){
        this.name="FootHub";
        this.matches=matchesArray;
        this.matchesPromiseState={};
    }

    getMatches(){
        resolvePromise(getLiveMatches(), this.matchesPromiseState);
    }
}

export default FootHubModel;