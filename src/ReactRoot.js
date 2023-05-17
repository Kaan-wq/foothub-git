// Add relevant imports here 
import FootHubModel from './FootHubModel.js';
import {  createHashRouter,  RouterProvider} from "react-router-dom";
import Banner from './react/bannerPresenter.js';
import Matches from './react/matchesPresenter.js';
import MatchDetails from './react/matchDetailsPresenter.js';



const myModel = new FootHubModel();
const routes= [
    {
        path: "/",
        element: <div>
            <Banner model={myModel}></Banner>
            <Matches model={myModel}></Matches>
        </div>,
    },
    {
        path: "/matches",
        element: <div>
            <Banner model={myModel}></Banner>
            <Matches model={myModel}></Matches>
        </div>,
    },
    {
        path: "/stats",
        element: <div>
            <Banner model={myModel}></Banner>
            <MatchDetails model={myModel}></MatchDetails>
        </div>
    }
]

// define the routes

function ReactRoot() { 
    return (
        <div>
            <RouterProvider router={createHashRouter(routes)} />
        </div>
        
    )
 }

 export default ReactRoot;