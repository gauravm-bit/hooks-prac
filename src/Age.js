import React,{useState} from 'react';

const Age = () => {

    const[initialAge,setAge] = useState(12)
    const[initialSibling,setSibling] = useState(3)

    const handleClick = () => {
        setAge(initialAge + 1)
    }

    const handleSiblingCount = () => {
        setSibling(initialSibling + 1)
    } 
 
    return(
        <div>
            Your age is {initialAge}
            <button onClick={handleClick}>ADD AGE</button>
            <br/>
            You have {initialSibling} siblings
            <button onClick={handleSiblingCount}> ADD SIBLING</button>
        </div>
    )
}
 
export default Age;