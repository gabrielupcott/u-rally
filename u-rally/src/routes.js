import React from 'react';
import Create from './Create';
import Map from './Map';
import Landing from './Landing'
import Mappopup from './Mappopup'

const routes = {
    "/u-rally/": () => <Landing />,
    "/u-rally/Create": () => <Create />,
    "/u-rally/Map": () => <Map />,
    "/u-rally/Mappopup" : () => <Mappopup />
}

export default routes;