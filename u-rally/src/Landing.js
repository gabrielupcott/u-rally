import React from 'react';
import {Route, Link, BrowserRouter as Router, Switch, BrowserRouter} from 'react-router-dom'
import './Landing.css'

function Landing() {
    return(
        <body>
            <Header/>
            <div class = "split left">
                <div class="centered">
                    <h2>CREATE A MOVEMENT</h2>
                    <button class="button-left">
                        <Link to="/Create">CREATE</Link>
                    </button>
                </div>
            </div>
            <div class = "split right">
                <div class="centered">
                    <h2>FIND EVENTS</h2>
                    <button class="button-right">
                    <Link to="/Map">VIEW MAP</Link>
                    </button>
                </div>
            </div>

        </body>
    )
}

function Header(){
    return(
        <div /*class="centered topnav"*/ class="topnav">
                <div class="center">
                <h2>U RALLY</h2>
                </div>
        </div>
    )
}

export default Landing