

function Student(props){
    console.log(props);
        return (
            <div style={{backgroundColor:"skyblue", margin:10}}>
                <h1>Props in React with Functional Component </h1>
                <h4>Student Component name is : {props.name} and email is : {props.email}</h4>
                {/* <h4>Address: {props.other.address}</h4> */}
                {/* <h4>Mobile Number: {props.other.mobile}</h4> */}
            </div>
        );
}

export default Student;