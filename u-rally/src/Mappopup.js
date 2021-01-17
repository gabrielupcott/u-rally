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


function Mappopup() {
  const [viewport, setViewport, setState] = useState({
    //margin-upper: 50,
    width: 1920,
    height: 1080,
    latitude: 43.65,
    longitude: -79.38,
    zoom: 5,
    showPopup: true
  });

//const showPopup = this.state;

return (
  <div>

    <div class="map-one">
<ReactMapGL
    {...viewport}
    //   width={400}
    //   height={400}
    //   latitude={37.7577}
    //   longitude={-122.4376}
    //   zoom={8}
    //   dragPan='true'
    //   doubleClickZoom='true'
      onViewportChange={nextViewport => 
         setViewport(nextViewport)}>   

      
        { <Popup
            latitude={44}
            longitude={-78.38}
            closeButton={false}
            closeOnClick={true}
            {...setState}
            tipSize={20}
            anchor="bottom" >
                <img class="popup-image" src={image} alt="Event Photo"></img>
                <h2>BLM RALLY</h2>
                <body class="popup-body">
                    A rally for the BLM protests. Lorem ipsum <br/> Lorem ipsumLorem ipsum Lorem ipsum.
                </body>

            </Popup>    
    }
        </ReactMapGL>
        </div>
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

export default Mappopup