import {API_KEY, BASE_URL} from "./apiConfig.js";
import "./teacherFetch.js";

function generalAPICall(apiParam) {
    function treatHTTPResponseACB(response){ 
        if(!response.ok) throw new Error("API problem "+response.status);  
        return response.json(); 
        }
    return window.fetch(BASE_URL+apiParam, {method : 'GET', headers : {'X-RapidAPI-Key' : API_KEY, 'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'}}).then(treatHTTPResponseACB);
}

function getLiveMatches(){
    function getMatchesACB(response) {
        //console.log(response);
        //console.log(response.Stages);

        return response.Stages;
    }
    return generalAPICall("matches/v2/list-live?Category=soccer").then(getMatchesACB);
}

function getStats(matchId) {
        function getStatsACB(response) {
            return response
        }

    return generalAPICall('matches/v2/get-statistics?Category=soccer&Eid='+matchId).then(getStatsACB);
}

function getMatch(matchId) {
    function getMatchACB(response){
        return response
    }

    return generalAPICall('matches/v2/get-scoreboard?Eid='+matchId+'&Category=soccer').then(getMatchACB);
}

export {generalAPICall, getLiveMatches, getStats};