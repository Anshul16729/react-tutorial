import React,{Component} from 'react';

class StudentClass extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div style={{backgroundColor:"skyblue", margin:20}}>
                <h1>Student Class Component</h1>
                <h1> {this.props.Sname} and email is {this.props.email}</h1>
            </div> 
        );

    }

}

export default StudentClass;