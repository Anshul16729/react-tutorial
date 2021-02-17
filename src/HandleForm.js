import React,{useState} from 'react';

function HandleForm() {

    const[name,setName]=useState("");
    const[tnc,setTnc]=useState(false);
    const[interest,setInterest]=useState("");

    function getFormData(e){
        console.log(name,tnc,interest);
        e.preventDefault();
    }

    return (
        <div ClassName="HandleForm">
      <h1>Handle Form in React</h1> 
      <form onSubmit={getFormData}>
          <input type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/><br/><br/>
          <select onChange={(e)=>setInterest(e.target.value)}>
              <option>Select Option</option>
              <option>Marvel</option>
              <option>DC</option>
          </select> <br/><br/>
          <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept terms and conditions</span>
          <br/><br/>
          <button type="submit">Submit</button>
      </form>
        </div>
    )
}

export default HandleForm;