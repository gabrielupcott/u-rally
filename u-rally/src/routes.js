import React from 'react';
import Create from './Create';
import Map from './Map';
import Landing from './Landing'

const routes = {
    "/": () => <Landing />,
    "/Create": () => <Create />,
    "/Map": () => <Map />
}

export default routes;