import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import StudentClass from './StudentClass';
import GetInput from './GetInput';
import HideShowToggle from './HideShowToggle';
import HandleForm from './HandleForm';
import ConditionalRendering from './ConditionalRendering';
import BasicFormValid from './BasicFormValid';
import FuncAsProps from './FuncAsProps';
import Members from './Members';

import Student from './Student';

function App() {

 // component under component
  // function Apple() {
  //   return <div>Apple Component</div>
  // }

  //USE OF VARIABLES 
  let data="Anshul Shrivastava";
  function apple() {
    data="Manish";
    alert(data);
  }

  //USE OF STATES 
  const[data2,setData]=useState("Anshul")
  function updateData(){
    setData("Manish Giri")
  }

  const[numb,setNumb]=useState(0)
  function updateData2(){
    setNumb(numb+1)
  }

  const[StudentName,setStudentName]=useState("Annie")
  const[SClassname,setStudentClassName]=useState("Johnny")

  console.warn("__________");

  //Function As Props
  function getData() 
  {
        alert("Hello from App")
  }




  return (
    <div className="App">
     {/* <h1>Hello World</h1>
     <h1>{data}</h1>
     <button onClick={apple}>Click me</button>  */}
     {/* <button onClick={()=>apple()}>Click me 2</button> 
     <button onClick={()=>alert("Hello")}>Click me 3</button>  */}

     {/* <h1>{data2}</h1>
     <button onClick={updateData}>Update Data</button>

     <h1>{numb}</h1>
     <button onClick={updateData2}>Update Data</button>
     <User/> */}
     {/* <Apple/> */}

     {/* Props with functional component */}
     {/* <Student name={StudentName} email={"annie@gmail.com"} other={{address: 'Delhi',mobile:'0000'}}/>
     <button onClick={()=>{setStudentName("Crystal")}}>Update Student</button> */}
     {/* <Student name={"Peter"} email={"peter@gmail.com"} other={{address: 'Noida',mobile:'1111'}}/>
     <Student name={"John"} email={"john@gmail.com"} other={{address: 'Gurugram',mobile:'2222'}}/> */}

      {/* Props with class component */}
      {/* <StudentClass Sname={SClassname} email={"johnny@gmail.com"}/>
      <button onClick={()=>{setStudentClassName("Harry")}}>Update Student Class Component</button> */}
      {/* <StudentClass Sname="Harry" email={"harry@gmail.com"}/> */}

     {/* Get Input box value */}
     {/* <GetInput/> */}
      
      {/* Hide , Show and Toggle in ReactJs */}
      {/* <HideShowToggle/> */}

      {/* Handle Form | checkbox | input field | select */}
      {/* <HandleForm/> */}

      {/* Conditional rendering | If Condition */}
      {/* <ConditionalRendering/> */}

      {/* Basic Form Validation */}
      {/* <BasicFormValid/> */}

      {/*Pass Function as Props */}
      <FuncAsProps data={getData}/>
      <div style={{float:'right'}}>
       <Members  data={getData}/>
      </div>



    </div>
  );
}

export default App;
