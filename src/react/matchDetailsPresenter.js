import ChatView from "../views/chatView";
import StatsView from "../views/statsView";
import {matchList} from "../data/dataStats";
import {useState, useEffect} from "react";
import promiseNoData from "../views/promiseNoData";

//TODO: add relevant props
//TODO: resolvePromise for MatchList
function MatchDetails({model}){

    const [, forceReRender ]= useState();
    function reRenderACB(){ forceReRender(new Object()); } 

    function updateOnPromise(promise, reRender){
        if(!promise) return
        promise.then(reRender).catch(reRender);   
        reRender();  // because the promise has changed. Will display the loading image.
    }



    function lifeACB(){
        model.getStatistics()
        updateOnPromise(model.statsPromiseState.promise, reRenderACB)
        
        return function ripACB(){};
    }

    useEffect(lifeACB, []);


    return (
        promiseNoData(model.statsPromiseState) || <StatsView stats={model.statsPromiseState.data} match={model.currentMatch}></StatsView>
    );
}

export default MatchDetails;