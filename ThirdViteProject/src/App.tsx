import React from 'react'

const StudentCard = (props) => {
    return (
        <div>
            <h1 style={{color:"Skyblue"}}>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h3>Grade: {props.grade}</h3>
        </div>
    );
};

function App() {
  return (
    <div>
        <StudentCard name="John Doe" age={20} grade="A" />
        <StudentCard name="Jane Smith" age={22} grade="B" />
        <StudentCard name="Alice Johnson" age={19} grade="A+" />
    </div>
  )
}



export default App