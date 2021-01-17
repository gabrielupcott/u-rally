import React from 'react';
import {Component} from 'react';
import { useState } from 'react';
import ReactMapGL, {FullscreenControl, Popup, Marker} from 'react-map-gl';
import Header from './Header'
import './Map.css'
import './mapbox-gl.css';
import image from './test'
import event from './exclamation-mark.png'
import {Route, Link, BrowserRouter as Router, Switch, BrowserRouter} from 'react-router-dom'
import Landing from './Landing'
import dotenv from 'dotenv'


function Map() {
    const API_KEY = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    console.log({API_KEY})
    console.log(process.env.REACT_APP_MAPBOX_ACCESS_TOKEN)
  const [viewport, setViewport, setState] = useState({
    //margin-upper: 50,
    width: 1920,
    height: 1080,
    latitude: 43.65,
    longitude: -79.38,
    zoom: 5,
    showPopup: true,
    mapboxApiAccessToken: API_KEY
  });

//const showPopup = this.state;

return (
    <div class="map-div">
<ReactMapGL
    {...viewport}
    //mapboxApiAccessToken={pk.eyJ1IjoiZ2FicmllbC11cGNvdHQiLCJhIjoiY2trMDJvbWd4MGRlbzJ2bGV5c2JnZ3NkciJ9.n8E876cPUHJ-qiaFaCfLtQ}
    //   width={400}
    //   height={400}
    //   latitude={37.7577}
    //   longitude={-122.4376}
    //   zoom={8}
    //   dragPan='true'
    //   doubleClickZoom='true'
      onViewportChange={nextViewport => 
         setViewport(nextViewport)}>   

      { <Marker key={'event'} longitude={-78.38} latitude={44}>
          <Link to="/Mappopup">
          <img class="marker-image" src={event} alt="Event Photo"></img>
            <h1></h1>
          </Link>
          </Marker>}
    
        </ReactMapGL>
    </div>
    
  );
}
//<Marker/>
//<div>You are here</div></ReactMapGL>
//            onClose={useState => setState({showPopup: false})}

{/* <h2>BLM RALLY</h2>
                <body class="popup-body">
                    A rally for the BLM protests. Lorem ipsum <br/> Lorem ipsumLorem ipsum Lorem ipsum.
                </body> */}

export default Map