import React from 'react';
import {Component} from 'react';
import { useState } from 'react';
import ReactMapGL, {FullscreenControl, Popup} from 'react-map-gl';
import Header from './Header'

function Map() {
  const [viewport, setViewport] = useState({
    width: 1920,
    height: 1080,
    latitude: 43.65,
    longitude: -79.38,
    zoom: 5,
    showPopup: true
  });

//const showPopup = this.state;

return (
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
         setViewport(nextViewport)}
    >
        { <Popup
            latitude={43.65}
            longitude={-78.38}
            closeButton={false}
            //closeOnClick={true}

            anchor="top" >
                <div>You are here</div>
            </Popup>    
    }
        </ReactMapGL>
  );
}


export default Map