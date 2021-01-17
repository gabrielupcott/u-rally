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
                    Your Name:
                    <input type="text" name="name" placeholder="John Doe"/>
                    <br/>
                    </label>
                    <label>
                    Organization Name:
                    <input type="text" name="organization-name" placeholder="United Way" />
                    <br/>
                    </label>
                    <label>
                    Movement Date:
                    <input type="text" name="organization-name" placeholder="Jan. 1st. 2021" />
                    <br/>
                    </label>
                    <label>
                    Location:
                    <input type="text" name="organization-name" placeholder="123 Main St. Toronto, ON Canada"/>
                    <br/>
                    </label>
                    <label>
                    Description:
                    <textarea class="textarea" placeholder="Enter text here."></textarea>
                    <br/>
                    </label>
                    <label>
                    Affiliated Links:
                    <input type="text" name="organization-name" placeholder="gofundme.org" />
                    <br/>
                    </label>
                    <input type="submit" value="Submit" class="submit" />
                    <br/>
                </form>
        </div>

    </body>
    );
}


export default Create