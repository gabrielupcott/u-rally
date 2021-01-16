import React from 'react';
import './Create.css'
import Header from './Header'

function Create() {
    return(
        <body>
        <Header/>
        <div class = "form">
                <form>
                <h3>CREATE YOUR MOVEMENT</h3>
                    <label>
                    Name:
                    <input type="text" name="name" />
                    </label>
                    <p></p>
                    <label>
                    Name:
                    <input type="text" name="name" />
                    </label>
                    <p></p>
                    <input type="submit" value="Submit" />
                </form>
        </div>

    </body>
    );
}

function Form(){
    return(
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default Create