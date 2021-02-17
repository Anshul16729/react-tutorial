import React,{useState} from 'react';

function HideShowToggle() {

    const [status,setStatus]=useState(true);

    return (
        <div ClassName="HideShowToggle">
        {
            status? <h1>Hide Show Toggle</h1>:null
        }
        {/* <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button> */}
        <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}

export default HideShowToggle;