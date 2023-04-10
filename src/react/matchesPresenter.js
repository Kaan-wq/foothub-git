import MatchesView from "../views/matchesView";
import {useState, useEffect} from "react";
import promiseNoData from "../views/promiseNoData";


function Matches({model}) {
    function lifeACB(){
        //console.log("Mounted");
        model.getMatches();
        return function ripACB(){};
    }

    useEffect(lifeACB, []);

    return <MatchesView matches={model.matchesPromiseState.data}></MatchesView>;
}

export default Matches;