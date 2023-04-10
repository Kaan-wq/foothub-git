// Add relevant imports here 
import FootHubModel from './FootHubModel.js';
import BannerView from './views/bannerView';
import Banner from './react/bannerPresenter.js';
import Matches from './react/matchesPresenter.js';
import MatchDetails from './react/matchDetailsPresenter.js';



const myModel = new FootHubModel();

// define the routes

function ReactRoot() { 
    return (
        <div>
            <Banner model={myModel}></Banner>
            <Matches model={myModel}></Matches>
            <MatchDetails model={myModel}></MatchDetails>
        </div>
        
    )
 }

 export default ReactRoot;