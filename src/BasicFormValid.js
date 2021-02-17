import React,{useState} from 'react';

function BasicFormValid(){

    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [userError,setUserError]=useState(false);
    const [passwordError,setPasswordError]=useState(false);

    function loginHandle(e){
      if (user.length<3||password.length<3) 
      {
          alert("Type correct values");
      }
      else
      {
        alert("Submitted");
      }
        e.preventDefault();
     };

     function userHandler(e){
         let item = e.target.value;
         if (item.length<3) 
         {
            setUserError(true);
         }
         else
         {
            setUserError(false);
         }
         setUser(item);
     }

     function passwordHandler(e){
        let item = e.target.value;
        if (item.length<3) 
        {
            setPasswordError(true);
        }
        else
        {
            setPasswordError(false);
        }
        setPassword(item);
    }

    return (
        <div className="BasicFormValid">
            <h1>Basic Login Form</h1>
          <form onSubmit={loginHandle}>
          <input type="text" placeholder="Enter User Id" onChange={userHandler}/> {userError?<span>User Id not valid</span>:null}
            <br/> <br/>
            <input type="password" placeholder="Enter User Password" onChange={passwordHandler}/>{passwordError?<span>User Password not valid</span>:null}
            <br/> <br/>
            <button type="submit">Login</button>
          </form>
        </div>

    )

}


export default BasicFormValid;