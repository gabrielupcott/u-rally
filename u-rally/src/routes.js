import React from 'react';
import Create from './Create';
import Map from './Map';
import Landing from './Landing'
import Mappopup from './Mappopup'

const routes = {
    "/": () => <Landing />,
    "/Create": () => <Create />,
    "/Map": () => <Map />,
    "/Mappopup" : () => <Mappopup />
}

export default routes;