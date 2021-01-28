import React,{useState} from 'react';

const Objstate = () => {
    const [state,setState] = useState({age : 19, siblingNum : 4})
    const {age , siblingNum} = state

    const addValue = val => {
        setState({
            ...state,
             [val] : state[val] + 1 
        })    
    }

    return(
        <div>
            Today I am {age} years of age
            <br/>
            I have {siblingNum} siblings
            <br />
            <button onClick={()=>addValue('age')}>
                ADD AGE
            </button>
            <button onClick={()=>addValue('siblingNum')}>
                ADD SIBLING
            </button>
        </div>
    )
}

export default Objstate;
