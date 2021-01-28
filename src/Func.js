import React,{useState} from 'react'

const Func = () => {
    const [state , setState] = useState(0)
    return( <div>
        the value of state is {state} 
        <br />
        <button onClick={() => setState(0)}> Reset </button>
        <button onClick={()=>setState(prevState => prevState + 1) }> Add(+) </button>
        <button onClick={()=>setState(prevState => prevState - 1) }> Sub(-) </button>
    </div>)
}

export default Func