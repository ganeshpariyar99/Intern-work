import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(2);
  const [divider, setDivide] = useState(1000);
  const [string, setString] = useState('banana');
  const [array,setArray]= useState([])


  return (
    <div>
      {/* <p>count:{count}</p>
      <p>Multiply:{multiply}</p>
      <p>Divide:{divider}</p>
      <p>String:{string}</p>
      <p>Array:{array}</p>
      <button onClick={() => setCount(prev => prev +1)}>Increment</button>
      <button onClick={() => setCount(prev => prev -1)}>Decrement</button>
      <button onClick ={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prev => prev * 2)}>Multiply</button>
      <button onClick={() => setCount(prev => prev / 2)}>Divide</button>
      <button onClick={() =>setString('Urja Tech')}>String</button>
      <button onClick={() => setArray(prev => [...prev, 'apple'])}>Array</button>
      <button onClick={() => setStudent}></button> */}

      <button onClick={console.log,('Button is clicked')}> Console Clicked</button>
    </div>  
  );

};

export default App;  
