import MatchesView from "../views/matchesView";
import {useState, useEffect} from "react";
import promiseNoData from "../views/promiseNoData";
import { getLiveMatches } from "../matchesSource";
import resolvePromise from "../resolvePromise";


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


    return promiseNoData(model.matchesPromiseState) || <MatchesView matches={model.matchesPromiseState.data}></MatchesView>;
}

export default Matches;