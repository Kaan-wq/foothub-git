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
            <div class="flexParent">
                    <div class="stats">
                        <MatchDetails model={myModel}></MatchDetails>
                    </div>
                    <div class="chat">
                        <Chat model={myModel}></Chat>
                    </div>
                    
                     
                </div>
        </div>
    },
    {
        path: "/stats/:matchId",
        element: <div>
            <Banner model={myModel}></Banner>
            <div className="flexParent">
                <div className="stats">
                    <MatchDetails model={myModel}></MatchDetails>
                </div>
                <div className="chat">
                    <Chat></Chat>
                </div>


            </div>
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