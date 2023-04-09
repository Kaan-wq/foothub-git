// Add relevant imports here 
import FootHubModel from './FootHubModel.js';
import BannerView from './views/bannerView';
import Banner from './react/bannerPresenter.js';


const myModel = new FootHubModel();

// define the routes

function ReactRoot() { 
    return (
        <Banner model={myModel}></Banner>
    )
 }

 export default ReactRoot;