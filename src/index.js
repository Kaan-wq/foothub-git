// This is the React TW3.3 bootstrapping. 
import React from "react";
import {render} from "react-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));

// needed for View JSX. In a React project you can use a React import in each View instead
window.React= React;

// When the ReactRoot is exported, uncomment lines below:
// using require() instead of import, for the above assignments to take effect before ReactRoot is loaded
const ReactRoot=require("./ReactRoot.js").default;

root.render(<ReactRoot/>);         

// The #root DIV can be found in /src/index.html.
// Webpack will add the needed JavaScript before serving it as /vue/index.html
// The path react/index.html and its association with this JS file is configured in webpack.config.js
