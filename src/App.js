import React, {useState} from 'react';

  const App = () => {
  const [count,setCount] = useState(100)
  let handleClick = () => setCount(count + 1)
  return (
    <div className="App"> 
      Variable is {count}
      <br/>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default App;
