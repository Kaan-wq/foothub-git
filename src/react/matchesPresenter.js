import MatchesView from "../views/matchesView";
import {useEffect, useState} from "react";
import promiseNoData from "../views/promiseNoData";


function Matches({model}) {
    const [, forceReRender ]= useState();
    function reRenderACB(){ forceReRender(new Object()); } 
    function updateOnPromise(promise, reRender){
        if(!promise) return
        promise.then(reRender).catch(reRender);   
        reRender();  // because the promise has changed. Will display the loading image.
    }
    
    function lifeACB(){
        model.getMatches()
        updateOnPromise(model.matchesPromiseState.promise, reRenderACB)
        
        return function ripACB(){};
    }

    useEffect(lifeACB, []);

    function chosenMatch(matchId, match) {
        model.setCurrentMatch(matchId, match);
    }


    return promiseNoData(model.matchesPromiseState) || <MatchesView matches={model.matchesPromiseState.data} onMatch={chosenMatch}></MatchesView>;
}

export default Matches;