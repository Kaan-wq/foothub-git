import {BASE_URL, API_KEY} from "./apiConfig.js";
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

export {generalAPICall, getLiveMatches};