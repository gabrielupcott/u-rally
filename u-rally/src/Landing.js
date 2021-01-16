import React from 'react';
import './Landing.css'

function Landing() {
    return(
        <div>
            <div class="centered topnav">
                <div class="center">
                <h2>u-rally</h2>
                </div>
            </div>
            <div class = "split left">
                <div class="centered">
                    <h2>Create an Event</h2>
                    <button class="button">
                        CREATE
                    </button>
                </div>
            </div>
            <div class = "split right">
                <div class="centered">
                    <h2>Find Events</h2>
                    <button class="button">
                        View Map
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Landing