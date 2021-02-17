import React from 'react';

function Members(props){

    return (
        <div className="Members">
         <h1>User Component (Pass Function as Props)</h1>
         <button onClick={props.data}>Call Data Function</button>
        </div>
    )
}

export default Members;