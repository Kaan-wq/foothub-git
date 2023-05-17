// Add relevant imports here 
import FootHubModel from './FootHubModel.js';
import {  createHashRouter,  RouterProvider} from "react-router-dom";
import Banner from './react/bannerPresenter.js';
import Matches from './react/matchesPresenter.js';
import MatchDetails from './react/matchDetailsPresenter.js';
import Chat from './react/ChatBoxPresenter.js';
import './styles/Chat.css'

const myModel = new FootHubModel();
const routes= [
    {
        path: "/",
        element: <Matches model={myModel}></Matches>,
    },
    {
        path: "/matches",
        element: <Matches model={myModel}></Matches>,
    },
    {
        path: "/stats",
        element: <div class="flexParent">
                    <div class="stats">
                        <MatchDetails model={myModel}></MatchDetails>
                    </div>
                    <div class="chat">
                        <Chat/>
                    </div>
                    
                     
                </div>
        
    },
    {
        path: "/banner",
        element: <Banner model={myModel}></Banner>,
    },
    {
        path : "/stats/:matchId",
        element: null
        //changer stats pour avoir le match correspondant en props
    }
]

// define the routes

function ReactRoot() { 
    return (
        <div>
            <Banner model={myModel}></Banner>
            <RouterProvider router={createHashRouter(routes)} />
        </div>
        
    )
 }

 export default ReactRoot;