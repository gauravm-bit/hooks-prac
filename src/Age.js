import React,{useState} from 'react';

const Age = () => {

    const[initialAge,setAge] = useState(12)
    const handleClick = () => {
        setAge(initialAge+1)
    }

    return(
        <div>
            Your age is {initialAge}
            <button onClick={handleClick}>ADD AGE</button>
        </div>
    )
}
 
export default Age;