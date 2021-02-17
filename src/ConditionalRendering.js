import React,{useState} from 'react';

function ConditionalRendering(){

    const [loggedIn,setLoggedIn]=useState(3);

//1,2,3

    return (
        <div className="ConditionalRendering">
            <h1>Conditional Rendering</h1>
            {loggedIn==1? 
            <h1>Welcome User 1</h1>
            :loggedIn==2?<h1>Welcome User 2</h1>
            :<h1>Welcome Guest</h1>}
        </div>

    )

}


export default ConditionalRendering;

