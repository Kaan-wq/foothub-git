import ChatView from "../views/chatView";
import StatsView from "../views/statsView";
import {matchList} from "../data/dataStats";
import {useState, useEffect} from "react";
import promiseNoData from "../views/promiseNoData";
import {useLocation} from "react-router-dom";

//TODO: add relevant props
//TODO: resolvePromise for MatchList
function MatchDetails({model}){

    const [, forceReRender ]= useState();
    const location = useLocation();
    const currentId = location.pathname.match(/\d+$/)[0];

    function reRenderACB(){ forceReRender(new Object()); } 

    function updateOnPromise(promise, reRender){
        if(!promise) return
        promise.then(reRender).catch(reRender);   
        reRender();  // because the promise has changed. Will display the loading image.
    }



    function lifeACB(){
        model.getStatistics(currentId)
        updateOnPromise(model.statsPromiseState.promise, reRenderACB)
        
        return function ripACB(){};
    }

    useEffect(lifeACB, []);

    return (
        promiseNoData(model.statsPromiseState) || <StatsView stats={model.statsPromiseState.data} match={JSON.parse(localStorage.getItem("match"))}></StatsView>
    );
}

export default MatchDetails;