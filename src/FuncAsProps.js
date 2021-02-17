import React from 'react';

function FuncAsProps(props){

    return (
        <div className="FuncAsProps">
         <h1>User Component (Pass Function as Props)</h1>
         <button onClick={props.data}>Call Data Function</button>
        </div>
    )
}

export default FuncAsProps;