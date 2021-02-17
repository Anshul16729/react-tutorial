//FUNCTION COMPONENT
// function User(){
//     return (
//         <div>
//             <h1>User Function Component</h1>
//             <h1>Hello</h1>
//         </div>
//     )
// };

// export default User;

//CLASS COMPONENT
// import React,{Component} from 'react';
// class User extends Component 
// {
//     render() 
//     {
//         return (
//             <h1>User Class Component</h1>
//         )
//     }
// }

//HOW TO USE STATE IN CLASS COMPONENTS

import React, { Component } from 'react';
class User extends Component {
    constructor() {
        super();
        this.state = {
            data: "Gauri"
        }
    }

    updateData(){
        this.setState({data:"Drishti"})
    }

    render() {
        return (
            <div>
                <h1>{this.state.data}</h1>
                <button onClick={()=>this.updateData()}>Update Class Data</button>
            </div>
        )
    }
}
export default User;











// function User() {
//     return (
//         <div>Hello JSX Function Component</div>
//     );
// }

// export default User;