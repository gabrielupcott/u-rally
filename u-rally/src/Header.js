import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch, BrowserRouter} from 'react-router-dom'
import './Landing.css'
import './Create.css'

function Header(){
    return(
        <div class="topnav">
                <div class="center">
                <Link class="link-text" to="/">U RALLY</Link>
                </div>
        </div>
    );
}

export default Header